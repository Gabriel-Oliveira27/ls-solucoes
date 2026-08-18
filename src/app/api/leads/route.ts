import { fail, isAuthorized, ok } from "@/lib/api";
import { leadStatuses, leadStore, type LeadStatus } from "@/lib/leads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/leads?status=novo&limit=50
 * Header: x-api-key: $LS_ADMIN_TOKEN
 * Endpoint pronto para o dashboard consumir.
 */
export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return fail("Não autorizado.", 401);
  }

  const { searchParams } = new URL(request.url);
  const statusParam = searchParams.get("status");
  const limit = Number(searchParams.get("limit") ?? 100);

  if (statusParam && !leadStatuses.includes(statusParam as LeadStatus)) {
    return fail(`status deve ser um de: ${leadStatuses.join(", ")}`, 422);
  }

  const leads = await leadStore.list({
    status: (statusParam as LeadStatus) ?? undefined,
    limit: Number.isFinite(limit) ? Math.min(Math.max(limit, 1), 500) : 100,
  });

  return ok({ total: leads.length, leads });
}
