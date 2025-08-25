'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { subscribeTo } from "@/lib/action"

const pricingTiers = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams getting started",
    features: ["Up to 5 team members", "Basic project management", "10GB storage", "Email support", "Basic analytics"],
    popular: false,
    priceID: "price_1Rzhr9FrZxHoVSsjsHF2mFPa",
  },
  {
    name: "Professional",
    price: "$79",
    description: "Best for growing businesses",
    features: [
      "Up to 25 team members",
      "Advanced project management",
      "100GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "API access",
    ],
    popular: true,
    priceID: "price_1Rznm1FrZxHoVSsjhdSXecbm",
  },
  {
    name: "Enterprise",
    price: "$199",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Enterprise project management",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom analytics",
      "White-label solution",
      "Advanced security",
      "Custom contracts",
    ],
    popular: false,
    priceID: "price_1RznmgFrZxHoVSsj1W5RKr6M",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`relative ${tier.popular ? "border-accent shadow-lg scale-105" : ""}`}>
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent">Most Popular</Badge>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="font-heading text-2xl text-primary">{tier.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${tier.popular ? "bg-accent hover:bg-accent/90" : ""}`}
                  variant={tier.popular ? "default" : "outline"}
                  onClick={() => subscribeTo(tier.priceID)}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution?{" "}
            <a href="#contact" className="text-accent hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
