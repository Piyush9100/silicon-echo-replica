
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
    const handleScroll = () => {
      const threshold = 120;
      let current = NAV_LINKS[0].href;
      for (const link of NAV_LINKS) {
        const el = document.querySelector(link.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - threshold <= 0 && rect.bottom > threshold) {
            current = link.href;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+44 7752 490144</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@mivatechsolutions.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Excellence in Technology Solutions</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://mivatechsolutions.com/wp-content/uploads/2025/04/cropped-ChatGPT_Image_Apr_4__2025__06_10_33_PM-removebg-preview.png"
              alt="Mivatech Solutions Logo"
              width={250}
              height={85}
              className="object-contain rounded-lg bg-white"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors text-primary hover:text-primary/80 ${activeSection === link.href ? 'font-bold text-[#00345B]' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/80">Get Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors text-primary hover:text-primary/80 ${activeSection === link.href ? 'font-bold underline text-[#00345B]' : ''}`}
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/80 w-fit">Get Quote</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
