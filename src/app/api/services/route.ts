import { ok } from "@/lib/api";
import { services } from "@/content/site";

export const runtime = "nodejs";

/** GET /api/services — conteúdo dos serviços (hoje estático, amanhã do banco). */
export async function GET() {
  return ok({ total: services.length, services });
}
