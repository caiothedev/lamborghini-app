import HeroSection from "@/_components/initial-sections/HeroSection"
import ModelsSection from "@/_components/initial-sections/ModelsSection"
import DealerLocatorSection from "@/_components/initial-sections/DealerLocatorSection"
import ConfigureYourSection from "@/_components/initial-sections/ConfigureYourSection"

export default function Home() {
    return (
        <main>
            <HeroSection />
            <ModelsSection />
            <DealerLocatorSection />
            <ConfigureYourSection />
        </main>
    )
}