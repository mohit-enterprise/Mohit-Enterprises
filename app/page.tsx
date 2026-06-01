import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/ui/FloatingButtons";
import LoadingScreen from "@/components/ui/LoadingScreen";
import HeroSection from "@/components/sections/HeroSection";
import BusinessCardsSection from "@/components/sections/BusinessCardsSection";
import AboutSection from "@/components/sections/AboutSection";
import OwnerTeamSection from "@/components/sections/OwnerTeamSection";
import MohitMobileSection from "@/components/sections/MohitMobileSection";
import MohitGeneralSection from "@/components/sections/MohitGeneralSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <BusinessCardsSection />
        <AboutSection />
        <OwnerTeamSection />
        <MohitMobileSection />
        <MohitGeneralSection />
        <WhyChooseUs />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
