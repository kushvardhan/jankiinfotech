import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertCircle, Home, Search } from 'lucide-react'
import Logo from '@/components/Logo'

export default function StudentNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Logo size="lg" />
        </div>

        {/* Error Icon */}
        <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="h-10 w-10 text-red-600" />
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Student Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The student certificate you&apos;re looking for doesn&apos;t exist or may have been removed.
          Please check the QR code or URL and try again.
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              <Home className="h-4 w-4 mr-2" />
              Go to Homepage
            </Button>
          </Link>
          
          <Link href="/contact">
            <Button variant="outline" className="w-full border-gray-300">
              <Search className="h-4 w-4 mr-2" />
              Contact Support
            </Button>
          </Link>
        </div>

        {/* Help Text */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Need Help?</h3>
          <p className="text-sm text-blue-700">
            If you believe this is an error, please contact our support team with the 
            certificate ID or QR code you&apos;re trying to access.
          </p>
        </div>
      </div>
    </div>
  )
}
