import React from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    description: "A scalable online store with payment integration, inventory management, and user accounts.",
    link: "#",
  },
  {
    title: "Mobile Banking App",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    description: "A secure mobile app for banking, featuring instant transfers, bill pay, and account analytics.",
    link: "#",
  },
  {
    title: "Healthcare Portal",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "A patient and doctor portal for appointments, records, and telemedicine.",
    link: "#",
  },
  {
    title: "Travel Booking System",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "A platform for booking flights, hotels, and tours with real-time availability.",
    link: "#",
  },
  {
    title: "Restaurant POS",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    description: "A point-of-sale system for restaurants with order management and analytics.",
    link: "#",
  },
  {
    title: "Fitness Tracker",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    description: "A web and mobile app for tracking workouts, nutrition, and progress.",
    link: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#00345B] mb-4 animate-fade-in">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in delay-100">
            Explore some of our recent projects, showcasing our expertise in web, mobile, and enterprise solutions.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <a
              href={project.link}
              key={project.title}
              className="group block rounded-2xl bg-white shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#00345B] mb-2 group-hover:text-[#00243d] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <span className="inline-block px-4 py-2 bg-[#00345B] text-white rounded-lg text-sm font-semibold group-hover:bg-[#00243d] transition-colors duration-300">
                  View Project
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(.4,0,.2,1) both;
        }
        .delay-100 { animation-delay: 0.1s; }
      `}</style>
    </section>
  );
} 