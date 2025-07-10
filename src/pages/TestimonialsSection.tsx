import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "MivaTech Solutions delivered our project on time and exceeded our expectations. Their team is highly professional and responsive!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James Smith",
    text: "The quality of work and attention to detail was outstanding. We highly recommend MivaTech Solutions for any tech needs!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Davis",
    text: "From start to finish, the process was smooth and transparent. We are thrilled with the results!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Michael Lee",
    text: "Great communication and technical expertise. Our business has grown thanks to their solutions.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white mb-64">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00345B] mb-4">Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about working with MivaTech Solutions.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.name}
                className={`absolute left-0 right-0 transition-opacity duration-700 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                style={{ top: 0 }}
              >
                <div className="bg-white rounded-2xl p-10 flex flex-col items-center animate-fade-in" style={{ boxShadow: '0 8px 32px 0 #00345B33, 0 -8px 32px 0 #00345B33' }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mb-6 border-4 border-[#00345B] object-cover shadow-lg shadow-[#00345B]/30"
                  />
                  <p className="text-lg text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="text-[#00345B] font-bold text-xl">{testimonial.name}</div>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-[#00345B] border-[#00345B]' : 'bg-gray-200 border-gray-300'}`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
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
      `}</style>
    </section>
  );
} 