import { fireEvent, render, screen } from "@testing-library/react-native"
import Button from "./Button"

describe("Button", () => {
    it("renders the label", async () => {
        await render(<Button label="Book a service" />)

        expect(screen.getByRole("button", { name: "Book a service" })).toBeOnTheScreen()
    })

    it("calls onPress when pressed", async () => {
        const onPress = jest.fn()
        await render(<Button label="Confirm" onPress={onPress} />)

        await fireEvent.press(screen.getByRole("button", { name: "Confirm" }))

        expect(onPress).toHaveBeenCalledTimes(1)
    })

    it("does not call onPress when disabled", async () => {
        const onPress = jest.fn()
        await render(<Button label="Confirm" onPress={onPress} disabled />)

        await fireEvent.press(screen.getByRole("button", { name: "Confirm" }))

        expect(onPress).not.toHaveBeenCalled()
        expect(screen.getByRole("button", { name: "Confirm" })).toBeDisabled()
    })
})