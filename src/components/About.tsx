
import { CheckCircle, Users, Award, Target } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "50+", label: "Expert Developers" },
    { icon: Award, number: "500+", label: "Projects Delivered" },
    { icon: Target, number: "98%", label: "Client Satisfaction" },
    { icon: CheckCircle, number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About SiliconTech
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over a decade of experience in the technology industry, SiliconTech has been 
                at the forefront of digital innovation, helping businesses transform and grow through 
                cutting-edge technology solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of expert developers, designers, and consultants work collaboratively to 
                deliver exceptional results that exceed expectations and drive measurable business outcomes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Innovation-Driven Approach</h3>
                  <p className="text-gray-600">We leverage the latest technologies and methodologies to deliver cutting-edge solutions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Client-Centric Focus</h3>
                  <p className="text-gray-600">Your success is our priority. We work closely with you to understand and meet your unique needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">Quality Assurance</h3>
                  <p className="text-gray-600">Rigorous testing and quality control processes ensure reliable, high-performance solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Our Team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-blue-200">Years of Excellence</div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
