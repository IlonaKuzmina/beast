
import { AboutUsSection } from "@/components/AboutUsSection/AboutUsSection";
import { FAQ } from "@/components/FAQ/FAQ";
import { Footer } from "@/components/Footer/Footer";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { MainHeader } from "@/components/MainHeader/MainHeader";

export default function Page() {
    return (
        <main className="min-h-screen bg-backgroundPrimary">
            <MainHeader />
            <HeroSection />
            <AboutUsSection />
            <FAQ />
            <Footer />
        </main>
    );
}
