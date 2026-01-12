import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, ExternalLink, Code, Palette, Share2, Camera } from "lucide-react"

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "branding", label: "Branding" },
  { id: "social", label: "Social Media" },
  { id: "photography", label: "Photography" },
]

const projects = [
  {
    id: 1,
    title: "TechCorp Website Redesign",
    category: "web",
    description: "Modern, responsive website built with Next.js and cutting-edge animations",
    image: "/modern-tech-website-dashboard-dark-theme.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    icon: Code,
    color: "from-primary to-primary/50",
  },
  {
    id: 2,
    title: "Luxe Fashion Brand Identity",
    category: "branding",
    description: "Complete brand identity system including logo, guidelines, and marketing materials",
    image: "/luxury-fashion-brand-logo-design.jpg",
    tags: ["Brand Strategy", "Logo Design", "Visual Identity"],
    icon: Palette,
    color: "from-accent to-accent/50",
  },
  {
    id: 3,
    title: "FitLife Social Campaign",
    category: "social",
    description: "6-month social media campaign that tripled engagement and doubled followers",
    image: "/fitness-social-media-posts-instagram.jpg",
    tags: ["Instagram", "Content Strategy", "Analytics"],
    icon: Share2,
    color: "from-secondary to-secondary/50",
  },
  {
    id: 4,
    title: "E-commerce Product Shoot",
    category: "photography",
    description: "Professional product photography for premium skincare line with 100+ SKUs",
    image: "/luxury-product-photography-skincare-bottles.jpg",
    tags: ["Studio Photography", "Editing", "Retouching"],
    icon: Camera,
    color: "from-primary to-accent",
  },
  {
    id: 5,
    title: "FinanceHub Web Platform",
    category: "web",
    description: "Secure financial dashboard with real-time data visualization",
    image: "/financial-dashboard-analytics-charts.jpg",
    tags: ["React", "API Integration", "Data Visualization"],
    icon: Code,
    color: "from-primary to-primary/50",
  },
  {
    id: 6,
    title: "GreenEarth Brand Launch",
    category: "branding",
    description: "Sustainable brand identity for eco-friendly products company",
    image: "/eco-friendly-brand-sustainable-logo-green.jpg",
    tags: ["Sustainability", "Packaging", "Brand Guidelines"],
    icon: Palette,
    color: "from-accent to-accent/50",
  },
  {
    id: 7,
    title: "RestaurantPro Social Strategy",
    category: "social",
    description: "Complete social media overhaul for restaurant chain with 15 locations",
    image: "/restaurant-food-social-media-content.jpg",
    tags: ["Multi-Platform", "UGC Campaign", "Influencer"],
    icon: Share2,
    color: "from-secondary to-secondary/50",
  },
  {
    id: 8,
    title: "Jewelry Collection Showcase",
    category: "photography",
    description: "Elegant product photography highlighting craftsmanship and detail",
    image: "/luxury-jewelry-product-photography-diamonds.jpg",
    tags: ["Macro Photography", "Lighting", "Post-Processing"],
    icon: Camera,
    color: "from-primary to-accent",
  },
  {
    id: 9,
    title: "MedTech SaaS Platform",
    category: "web",
    description: "Healthcare management system with patient portal and admin dashboard",
    image: "/healthcare-medical-app-dashboard-interface.jpg",
    tags: ["HIPAA Compliant", "Node.js", "PostgreSQL"],
    icon: Code,
    color: "from-primary to-primary/50",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
              Our{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed animate-fade-in-up">
              Explore our latest work and see how we've helped businesses achieve their digital goals
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "150+" },
              { label: "Happy Clients", value: "50+" },
              { label: "Awards Won", value: "12" },
              { label: "Years Experience", value: "5+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden aspect-[3/2] bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div
                    className={`absolute top-4 right-4 w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}
                  >
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted rounded text-xs border border-border hover:border-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    View Case Study
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-12 border-border/50 bg-card/50 backdrop-blur-sm text-center">
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 italic">
                "Working with CloudTech was a game-changer for our business. Their expertise in web development and
                design transformed our online presence completely. The results exceeded all expectations."
              </p>
              <div>
                <div className="font-semibold text-lg">Michael Thompson</div>
                <div className="text-sm text-muted-foreground">CEO, InnovateTech Solutions</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Let's Create Something{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Ready to start your project? Get in touch and let's bring your vision to life
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 h-12"
          >
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
