import { render, screen } from "@testing-library/react-native"
import HomeScreen from "@/app/index"

describe("HomeScreen", () => {
    it("shows the brand name as the screen header", async () => {
        await render(<HomeScreen />)

        expect(screen.getByRole("header", { name: "Lamborghini" })).toBeOnTheScreen()
    })
})