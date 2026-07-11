import { z } from "zod";

import { t, type Locale } from "@/lib/i18n";

const strings = {
  required: { en: "Required", el: "Υποχρεωτικό" },
  invalidEmail: { en: "Invalid email", el: "Μη έγκυρο email" },
  consent: {
    en: "Please confirm consent to continue",
    el: "Παρακαλούμε επιβεβαιώστε τη συναίνεση για να συνεχίσετε",
  },
} as const;

export function makeCheckinSchema(locale: Locale) {
  const req = t(strings.required, locale);
  return z.object({
    firstName: z.string().min(2, req),
    lastName: z.string().min(2, req),
    email: z.string().email(t(strings.invalidEmail, locale)),
    phone: z.string().optional(),
    document: z.string().min(4, req),
    afm: z.string().optional(),
    arrival: z.string().min(1, req),
    departure: z.string().min(1, req),
    guests: z.coerce.number().int().min(1, req).max(20, req),
    consent: z.boolean().refine((v) => v === true, {
      message: t(strings.consent, locale),
    }),
  });
}

export type CheckinSchema = ReturnType<typeof makeCheckinSchema>;
export type CheckinInput = z.input<CheckinSchema>;
export type CheckinOutput = z.output<CheckinSchema>;
