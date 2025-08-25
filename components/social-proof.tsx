import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content:
      "FlowSync has transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    content:
      "The best investment we've made for our growing team. The analytics dashboard gives us insights we never had before.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director",
    company: "GlobalTech",
    content:
      "Seamless integration with our existing tools and excellent customer support. Highly recommend for any growing business.",
    rating: 5,
  },
]

const stats = [
  { value: "1,000+", label: "Happy Customers" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
  { value: "50+", label: "Integrations" },
]

export function SocialProof() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-4">Loved by Teams Worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their experience with FlowSync.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <div className="h-12 w-32 bg-muted rounded flex items-center justify-center text-sm font-medium">
              Enterprise Security
            </div>
            <div className="h-12 w-32 bg-muted rounded flex items-center justify-center text-sm font-medium">
              SOC 2 Compliant
            </div>
            <div className="h-12 w-32 bg-muted rounded flex items-center justify-center text-sm font-medium">
              GDPR Ready
            </div>
            <div className="h-12 w-32 bg-muted rounded flex items-center justify-center text-sm font-medium">
              99.9% Uptime
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
