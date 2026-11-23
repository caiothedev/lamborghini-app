import { Pressable, StyleSheet, Text, type PressableProps } from "react-native"
import { colors } from "@/_constants/theme"

export type ButtonVariant = "primary" | "outline"

interface ButtonProps extends Omit<PressableProps, "children"> {
    label: string
    variant?: ButtonVariant
}

export default function Button({ label, variant = "primary", disabled, style, ...props }: ButtonProps) {
    const isOutline = variant === "outline"

    return (
        <Pressable
            accessibilityRole="button"
            accessibilityState={{ disabled: Boolean(disabled) }}
            disabled={disabled}
            style={(state) => [
                styles.base,
                isOutline ? styles.outline : styles.primary,
                state.pressed && styles.pressed,
                disabled && styles.disabled,
                typeof style === "function" ? style(state) : style,
            ]}
            {...props}
        >
            <Text style={[styles.label, isOutline ? styles.outlineLabel : styles.primaryLabel]}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    base: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
    },
    primary: {
        backgroundColor: colors.gold,
        borderColor: colors.gold,
    },
    outline: {
        backgroundColor: "transparent",
        borderColor: colors.whiteText,
    },
    pressed: {
        opacity: 0.8,
    },
    disabled: {
        opacity: 0.4,
    },
    label: {
        fontSize: 14,
        fontWeight: "600",
        letterSpacing: 1,
        textTransform: "uppercase",
    },
    primaryLabel: {
        color: colors.blackText,
    },
    outlineLabel: {
        color: colors.whiteText,
    },
})