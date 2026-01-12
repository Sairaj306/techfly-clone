import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  Code,
  Palette,
  Share2,
  Camera,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Search,
  ShoppingCart,
  Video,
  BarChart3,
  PenTool,
} from "lucide-react"

const services = [
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description:
      "Create powerful, scalable web applications that drive business growth and deliver exceptional user experiences.",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "API Integration & Development",
      "Performance Optimization",
      "Responsive Design",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    color: "from-primary to-primary/50",
  },
  {
    id: "branding",
    icon: Palette,
    title: "Brand Identity & Design",
    description:
      "Build memorable brand identities that resonate with your audience and differentiate you from competitors.",
    features: [
      "Logo Design & Branding",
      "Brand Strategy & Guidelines",
      "Visual Identity Systems",
      "Marketing Collateral",
      "UI/UX Design",
      "Design Systems",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision"],
    color: "from-accent to-accent/50",
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Management",
    description:
      "Amplify your brand's voice and engage your audience with strategic social media campaigns and content.",
    features: [
      "Content Strategy & Planning",
      "Social Media Marketing",
      "Community Management",
      "Analytics & Reporting",
      "Influencer Partnerships",
      "Paid Advertising Campaigns",
    ],
    technologies: ["Meta Business Suite", "Hootsuite", "Buffer", "Analytics Tools"],
    color: "from-secondary to-secondary/50",
  },
  {
    id: "photography",
    icon: Camera,
    title: "Product Photography",
    description:
      "Showcase your products with stunning, professional photography that drives conversions and builds trust.",
    features: [
      "Product Photography",
      "Lifestyle & Contextual Shots",
      "360° Product Views",
      "Photo Editing & Retouching",
      "Background Removal",
      "Image Optimization",
    ],
    technologies: ["Professional DSLR", "Studio Lighting", "Adobe Lightroom", "Photoshop"],
    color: "from-primary to-accent",
  },
]

const additionalServices = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search engine rankings",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store setup and management",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional video content creation",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven decision making tools",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Engaging content for all platforms",
  },
]

export default function ServicesPage() {
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
              Our{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Premium Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed animate-fade-in-up">
              Comprehensive digital solutions designed to transform your business and exceed your goals
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 animate-scale-in`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h3 className="font-semibold mb-4 text-lg">What We Deliver:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-semibold mb-3 text-sm text-muted-foreground">Technologies & Tools:</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted rounded-full text-sm border border-border hover:border-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Card className="relative p-8 md:p-12 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                    />
                    <div className="relative space-y-6">
                      <div className="text-6xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent opacity-20">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-2">Starting From</div>
                        <div className="text-3xl font-bold mb-4">Custom Pricing</div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                          Every project is unique. We provide tailored solutions and transparent pricing based on your
                          specific needs and goals.
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-center space-x-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span>Free Initial Consultation</span>
                          </li>
                          <li className="flex items-center space-x-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span>Flexible Payment Plans</span>
                          </li>
                          <li className="flex items-center space-x-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span>Ongoing Support Included</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Expand your digital capabilities with our complementary services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={service.title}
                className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
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
            Ready to Get{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Started?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and create a custom solution that meets your needs
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 h-12"
          >
            <Link href="/contact">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
