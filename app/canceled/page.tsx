import { XCircle, ArrowLeft, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function CanceledPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Canceled Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
        </div>

        {/* Canceled Message */}
        <div className="space-y-4">
          <h1 className="font-heading text-3xl font-bold text-gray-900">Payment Canceled</h1>
          <p className="text-gray-600 text-lg">
            Your subscription payment was canceled. No charges have been made to your account.
          </p>
        </div>

        {/* Information Card */}
        <Card className="text-left">
          <CardContent className="p-6 space-y-4">
            <h3 className="font-heading text-lg font-semibold text-gray-900">What Happened?</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                Payment process was interrupted or canceled
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                No charges were made to your payment method
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                You can try again anytime with no penalties
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Try Again
            </Link>
          </Button>
          <Button variant="outline" className="w-full bg-transparent">
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
        </div>

        {/* Alternative Options */}
        <div className="space-y-4 pt-4 border-t border-gray-200">
          <p className="text-sm font-medium text-gray-700">Still interested in FlowSync?</p>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700" asChild>
              <Link href="/">View Pricing Plans</Link>
            </Button>
            <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700" asChild>
              <Link href="/">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
