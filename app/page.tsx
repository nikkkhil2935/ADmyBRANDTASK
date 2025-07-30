import Navigation from "./components/navigation"
import HeroSection from "./components/hero-section"
import FeaturesSection from "./components/features-section"
import PricingSection from "./components/pricing-section"
import TestimonialsSection from "./components/testimonials-section"
import FAQSection from "./components/faq-section"
import CTASection from "./components/cta-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
