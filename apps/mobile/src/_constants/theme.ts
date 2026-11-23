// Espelha os tokens de cor definidos no globals.css do app web
export const colors = {
    background: "#050505",
    foreground: "#111111",
    middleground: "#171717",
    whiteBackground: "#FFFFFF",
    blackText: "#000000",
    whiteText: "#FFFFFF",
    gold: "#FFC000",
    darkGold: "#B18707",
    success: "#00FF00",
    error: "#FF0000",
} as const

export type ColorToken = keyof typeof colors