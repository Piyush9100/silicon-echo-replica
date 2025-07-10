
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PortfolioSection from "./Portfolio";
import TestimonialsSection from "./TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <PortfolioSection />
      <TestimonialsSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
