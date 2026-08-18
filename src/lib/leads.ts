import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export const leadStatuses = ["novo", "em_contato", "orcamento", "ganho", "perdido"] as const;
export type LeadStatus = (typeof leadStatuses)[number];

export type Lead = {
  id: string;
  name: string;
  phone: string;
  city: string | null;
  service: string | null;
  message: string | null;
  source: string;
  status: LeadStatus;
  createdAt: string;
};

export type NewLead = Omit<Lead, "id" | "status" | "createdAt">;

/**
 * Persistência dos leads.
 * Hoje: arquivo JSON em /data (e memória, se o disco for somente leitura).
 * Quando o dashboard chegar, troque só esta implementação por Prisma/Supabase —
 * as rotas em /api continuam iguais.
 */
export interface LeadStore {
  create(input: NewLead): Promise<Lead>;
  list(options?: { status?: LeadStatus; limit?: number }): Promise<Lead[]>;
  update(id: string, patch: Partial<Pick<Lead, "status">>): Promise<Lead | null>;
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "leads.json");

const memory: Lead[] = [];
let diskAvailable = true;

async function readAll(): Promise<Lead[]> {
  if (!diskAvailable) return memory;
  try {
    const raw = await readFile(DATA_FILE, "utf8");
    return JSON.parse(raw) as Lead[];
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === "ENOENT") return [];
    diskAvailable = false;
    return memory;
  }
}

async function writeAll(leads: Lead[]) {
  if (!diskAvailable) {
    memory.splice(0, memory.length, ...leads);
    return;
  }
  try {
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(DATA_FILE, JSON.stringify(leads, null, 2), "utf8");
  } catch {
    diskAvailable = false;
    memory.splice(0, memory.length, ...leads);
  }
}

export const leadStore: LeadStore = {
  async create(input) {
    const lead: Lead = {
      ...input,
      id: randomUUID(),
      status: "novo",
      createdAt: new Date().toISOString(),
    };
    const leads = await readAll();
    leads.unshift(lead);
    await writeAll(leads);
    return lead;
  },

  async list({ status, limit = 100 } = {}) {
    const leads = await readAll();
    return leads.filter((lead) => !status || lead.status === status).slice(0, limit);
  },

  async update(id, patch) {
    const leads = await readAll();
    const index = leads.findIndex((lead) => lead.id === id);
    if (index < 0) return null;
    leads[index] = { ...leads[index], ...patch };
    await writeAll(leads);
    return leads[index];
  },
};

/** Encaminha o lead para fora (n8n, CRM, Slack...) sem derrubar a resposta ao visitante. */
export async function forwardLead(lead: Lead) {
  const url = process.env.LS_LEADS_WEBHOOK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
  } catch (error) {
    console.error("[leads] falha ao encaminhar webhook", error);
  }
}
