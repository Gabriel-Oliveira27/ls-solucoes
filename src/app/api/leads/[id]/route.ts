import { fail, isAuthorized, ok } from "@/lib/api";
import { leadStatuses, leadStore, type LeadStatus } from "@/lib/leads";

export const runtime = "nodejs";

/**
 * PATCH /api/leads/:id  { "status": "em_contato" }
 * Header: x-api-key: $LS_ADMIN_TOKEN
 * Usado pelo futuro dashboard para mover o lead no funil.
 */
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isAuthorized(request)) {
    return fail("Não autorizado.", 401);
  }

  const { id } = await params;

  let body: { status?: string };
  try {
    body = await request.json();
  } catch {
    return fail("Corpo da requisição inválido.");
  }

  if (!body.status || !leadStatuses.includes(body.status as LeadStatus)) {
    return fail(`status deve ser um de: ${leadStatuses.join(", ")}`, 422);
  }

  const lead = await leadStore.update(id, { status: body.status as LeadStatus });
  if (!lead) return fail("Lead não encontrado.", 404);

  return ok(lead);
}
