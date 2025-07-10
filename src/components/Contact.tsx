
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "@/components/ui/sonner";

const SERVICE_ID = "service_xy8phla";
const TEMPLATE_ID = "template_jo843ho";
const PUBLIC_KEY = "bX7CVkcPws35e5vrv";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_firstname: data.firstName,
          from_lastname: data.lastName,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        PUBLIC_KEY
      );
      toast.success("Your message has been sent!");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with innovative technology solutions? 
            Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#00345B] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">+44 7752 490144</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#00345B] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">info@mivatechsolutios.com</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-[#00345B] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">10 Brentfield Close, NW10 0QJ,</p>
                <p className="text-gray-600">London, England ( UK )</p>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input
                        placeholder="Enter your first name"
                        {...register("firstName", { required: "First name is required" })}
                      />
                      {typeof errors.firstName?.message === 'string' && (
                        <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input
                        placeholder="Enter your last name"
                        {...register("lastName", { required: "Last name is required" })}
                      />
                      {typeof errors.lastName?.message === 'string' && (
                        <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {typeof errors.email?.message === 'string' && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Input
                      placeholder="Enter the subject"
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {typeof errors.subject?.message === 'string' && (
                      <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your project..."
                      className="min-h-32"
                      {...register("message", { required: "Message is required" })}
                    />
                    {typeof errors.message?.message === 'string' && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <Button
                    className="w-full bg-[#00345B] hover:bg-[#00243d]"
                    size="lg"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
