import { readFileSync } from "node:fs"
import { join } from "node:path"
import { colors } from "@/_constants/theme"

// Converte camelCase para o nome da variável CSS usada no app web
function toCssVariable(token: string) {
    return `--${token.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`
}

const globalsCss = readFileSync(join(__dirname, "../../../web/src/app/globals.css"), "utf8")
const rootBlock = globalsCss.match(/:root\s*\{([^}]*)\}/)?.[1] ?? ""
const webTokens = new Map(
    [...rootBlock.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map((match) => [match[1], match[2]?.trim().toUpperCase()]),
)

describe("theme colors", () => {
    it.each(Object.entries(colors))("%s mirrors the web token", (token, value) => {
        expect(webTokens.get(toCssVariable(token))).toBe(value.toUpperCase())
    })
})