import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-background"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border bg-card px-4 py-2 text-sm font-medium mb-8">
            <span className="text-accent mr-2">✨</span>
            New: Advanced Analytics Dashboard
          </div>

          {/* Main Heading */}
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-primary mb-6 leading-tight">
            Streamline Your
            <span className="text-accent block">Workflow</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            The all-in-one SaaS platform that helps teams collaborate, track progress, and deliver results faster than
            ever before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-sm text-muted-foreground">
            <p className="mb-4">Trusted by 1,000+ companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-medium">
                Company A
              </div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-medium">
                Company B
              </div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-medium">
                Company C
              </div>
              <div className="h-8 w-24 bg-muted rounded flex items-center justify-center text-xs font-medium">
                Company D
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
