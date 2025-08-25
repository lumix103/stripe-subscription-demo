import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, TrendingUp, Calendar } from "lucide-react"

export function DashboardPreview() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-primary mb-4">Powerful Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get insights at a glance with our intuitive dashboard designed for modern teams.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Dashboard Mockup */}
          <Card className="mb-8 overflow-hidden">
            <CardHeader className="bg-muted/50 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-heading text-xl">Project Dashboard</CardTitle>
                  <CardDescription>Overview of your team's performance</CardDescription>
                </div>
                <Badge variant="secondary">Live Data</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-primary">1,247</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <BarChart3 className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-primary">89%</div>
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-primary">+23%</div>
                  <div className="text-sm text-muted-foreground">Growth</div>
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-primary">42</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="h-64 bg-muted/30 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Analytics Chart</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-lg">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium">New project created</p>
                      <p className="text-sm text-muted-foreground">Marketing Campaign Q1</p>
                    </div>
                    <Badge variant="outline">2 min ago</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium">Task completed</p>
                      <p className="text-sm text-muted-foreground">Design system update</p>
                    </div>
                    <Badge variant="outline">1 hour ago</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <p className="font-medium">Team member added</p>
                      <p className="text-sm text-muted-foreground">Sarah joined the team</p>
                    </div>
                    <Badge variant="outline">3 hours ago</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Try Dashboard Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
