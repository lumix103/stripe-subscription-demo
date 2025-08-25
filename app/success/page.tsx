import { CheckCircle, ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="font-heading text-3xl font-bold text-gray-900">Welcome to FlowSync!</h1>
          <p className="text-gray-600 text-lg">
            Your subscription has been activated successfully. You now have access to all premium features.
          </p>
        </div>

        {/* Account Details Card */}
        <Card className="text-left">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-heading text-lg font-semibold text-gray-900">What's Next?</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Check your email for account setup instructions
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Download our mobile app for on-the-go access
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Explore our getting started guide
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Access Your Dashboard
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Download Mobile App
          </Button>
        </div>

        {/* Support Link */}
        <p className="text-sm text-gray-500">
          Need help getting started?{" "}
          <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            Contact our support team
          </Link>
        </p>
      </div>
    </div>
  )
}
