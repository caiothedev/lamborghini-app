import type ptBR from "./locales/pt-BR"

// Transforma literais em string para que os outros locales sigam a mesma estrutura com textos próprios
type DeepStringify<T> = { [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]> }

export type Dictionary = DeepStringify<typeof ptBR>

// Gera a união de todas as chaves no formato "secao.subsecao.chave"
type Paths<T, Prefix extends string = ""> = {
    [K in keyof T & string]: T[K] extends string ? `${Prefix}${K}` : Paths<T[K], `${Prefix}${K}.`>
}[keyof T & string]

export type TranslationKey = Paths<Dictionary>

export type TranslationParams = Record<string, string | number>