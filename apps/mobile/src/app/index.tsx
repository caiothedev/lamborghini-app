import { StyleSheet, Text, View } from "react-native"
import { colors } from "@/_constants/theme"
import { t } from "@/_lib/i18n"

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text accessibilityRole="header" style={styles.title}>
                {t("common.brand")}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
    },
    title: {
        color: colors.whiteText,
        fontSize: 32,
        fontWeight: "700",
        letterSpacing: -1,
        textTransform: "uppercase",
    },
})