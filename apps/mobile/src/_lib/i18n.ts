import { DEFAULT_LOCALE, createTranslator } from "@lamborghini/translations"

// Enquanto não há troca de idioma no app, todas as telas usam o locale padrão
export const locale = DEFAULT_LOCALE

export const t = createTranslator(locale)