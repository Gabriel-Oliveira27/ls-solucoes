import { ok } from "@/lib/api";

export const runtime = "nodejs";

/** GET /api/health — usado por monitoramento e pelo deploy. */
export async function GET() {
  return ok({ status: "up", timestamp: new Date().toISOString() });
}
