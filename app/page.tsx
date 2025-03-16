import { FeaturesSection } from "@/components/feature";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { LogoGrid } from "@/components/logo-grid";
import Navbar from "@/components/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
    return (
        <ScrollArea>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <LogoGrid />
            <Footer />
        </ScrollArea>
    );
}
