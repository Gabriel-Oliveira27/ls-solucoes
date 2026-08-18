import { z } from "zod";

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .transform((value) => (value.length ? value : null))
    .nullable()
    .optional();

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(120),
  phone: z
    .string()
    .trim()
    .min(8, "Informe um WhatsApp válido.")
    .max(24)
    .refine((value) => digitsOnly(value).length >= 10, "Informe DDD + número."),
  city: optionalText(120),
  service: optionalText(60),
  message: optionalText(2000),
  source: z.string().trim().max(60).default("landing"),
  /** honeypot: se vier preenchido, é robô */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

/** Normaliza para E.164 brasileiro quando possível. */
export function normalizePhone(value: string) {
  const digits = digitsOnly(value);
  if (digits.startsWith("55") && digits.length >= 12) return `+${digits}`;
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`;
  return `+${digits}`;
}

export function firstError(error: z.ZodError) {
  return error.issues[0]?.message ?? "Dados inválidos.";
}
