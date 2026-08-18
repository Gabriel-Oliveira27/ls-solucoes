import { ok } from "@/lib/api";
import { projects } from "@/content/site";

export const runtime = "nodejs";

/** GET /api/projects — obras exibidas na landing. */
export async function GET() {
  return ok({ total: projects.length, projects });
}
