
import { AboutUsSection } from "@/components/AboutUsSection/AboutUsSection";
import { BestDealsSection } from "@/components/BestDealsSection/BestDealsSection";
import { FAQ } from "@/components/FAQ/FAQ";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { OurPartnersSection } from "@/components/OurPartnersSection/OurPartnersSection";

export default function Page() {
    return (
        <main className="min-h-screen bg-backgroundPrimary">
            <HeroSection />
            <AboutUsSection />
            <BestDealsSection />
            <OurPartnersSection />
            <FAQ />
        </main>
    );
}
