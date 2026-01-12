import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "hello@cloudtech.com",
    link: "mailto:hello@cloudtech.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "123 Innovation Drive, Tech City, TC 12345",
    link: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon-Fri: 9:00 AM - 6:00 PM EST",
    link: "#",
  },
]

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website typically takes 2-4 weeks, while more complex applications can take 2-3 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes! We provide ongoing maintenance and support packages to ensure your digital assets continue to perform optimally. We're here to help you succeed long after launch.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer custom pricing based on your specific needs and project scope. After our initial consultation, we'll provide a detailed proposal with transparent pricing and deliverables.",
  },
  {
    question: "Can you work with our existing brand guidelines?",
    answer:
      "We're experienced in working within established brand guidelines and can seamlessly integrate our work with your existing brand identity.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
              Let's{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Work Together
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed animate-fade-in-up">
              Have a project in mind? We'd love to hear from you. Get in touch and let's create something amazing
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.link}
                className="group block"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="p-6 text-center border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2 text-sm text-muted-foreground">{info.title}</h3>
                  <p className="text-sm group-hover:text-primary transition-colors">{info.content}</p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="aspect-[4/3] bg-muted relative">
                  <img src="/modern-office-building-tech-company.jpg" alt="Office Location" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Visit Our Office</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    We'd love to meet you in person! Schedule a visit to our office to discuss your project over coffee.
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Get Directions
                    <MapPin className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </Card>

              <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Why Choose CloudTech?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Fast Response Time</div>
                      <div className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours</div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Free Consultation</div>
                      <div className="text-sm text-muted-foreground">
                        Initial consultation is always free, no strings attached
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Flexible Engagement</div>
                      <div className="text-sm text-muted-foreground">
                        We work with businesses of all sizes and budgets
                      </div>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Quick answers to common questions about working with us
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Prefer a Different Way to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Choose the communication method that works best for you
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@cloudtech.com"
              className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-12 px-8 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
            >
              <Mail className="mr-2 w-5 h-5" />
              Send Email
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-muted h-12 px-8 text-lg bg-transparent"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
