import { clientIp, fail, ok, rateLimit } from "@/lib/api";
import { forwardLead, leadStore } from "@/lib/leads";
import { contactSchema, firstError, normalizePhone } from "@/lib/validation";

export const runtime = "nodejs";

/** POST /api/contact — recebe o formulário da landing e grava o lead. */
export async function POST(request: Request) {
  const ip = clientIp(request);
  if (!rateLimit(`contact:${ip}`).allowed) {
    return fail("Muitos envios seguidos. Tente novamente em um minuto.", 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return fail("Corpo da requisição inválido.");
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return fail(firstError(parsed.error), 422, {
      issues: parsed.error.flatten().fieldErrors,
    });
  }

  // Honeypot preenchido: responde como sucesso e descarta.
  if (parsed.data.website) {
    return ok({ received: true });
  }

  const lead = await leadStore.create({
    name: parsed.data.name,
    phone: normalizePhone(parsed.data.phone),
    city: parsed.data.city ?? null,
    service: parsed.data.service ?? null,
    message: parsed.data.message ?? null,
    source: parsed.data.source,
  });

  await forwardLead(lead);

  return ok({ id: lead.id, received: true }, { status: 201 });
}
