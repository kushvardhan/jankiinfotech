'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Download, QrCode, Copy, Check } from 'lucide-react'

interface QRCodeGeneratorProps {
  studentId: string
  studentName: string
}

export default function QRCodeGenerator({ studentId, studentName }: QRCodeGeneratorProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateQRCode = async () => {
    setIsGenerating(true)
    
    try {
      // Create the URL that the QR code will point to
      const studentUrl = `${window.location.origin}/student/${studentId}`
      
      // Use QR Server API to generate QR code
      const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(studentUrl)}&format=png&bgcolor=ffffff&color=000000&qzone=2&margin=10`
      
      setQrCodeUrl(qrApiUrl)
    } catch (error) {
      console.error('Error generating QR code:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadQRCode = async () => {
    if (!qrCodeUrl) return

    try {
      const response = await fetch(qrCodeUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      
      const link = document.createElement('a')
      link.href = url
      link.download = `${studentName.replace(/\s+/g, '_')}_QR_Code.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading QR code:', error)
    }
  }

  const copyStudentUrl = async () => {
    const studentUrl = `${window.location.origin}/student/${studentId}`
    
    try {
      await navigator.clipboard.writeText(studentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error('Error copying URL:', error)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <QrCode className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Generate QR Code</h3>
        <p className="text-gray-600 text-sm">Create a QR code for {studentName}&apos;s certificate</p>
      </div>

      {!qrCodeUrl ? (
        <Button
          onClick={generateQRCode}
          disabled={isGenerating}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold"
        >
          {isGenerating ? 'Generating...' : 'Generate QR Code'}
        </Button>
      ) : (
        <div className="space-y-4">
          {/* QR Code Display */}
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <img 
              src={qrCodeUrl} 
              alt={`QR Code for ${studentName}`}
              className="mx-auto rounded-lg shadow-md"
              style={{ maxWidth: '200px', height: 'auto' }}
            />
          </div>

          {/* Student URL */}
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-500 mb-1">Certificate URL:</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-700 truncate flex-1 mr-2">
                {`${window.location.origin}/student/${studentId}`}
              </p>
              <Button
                onClick={copyStudentUrl}
                size="sm"
                variant="outline"
                className="flex-shrink-0"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={downloadQRCode}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button
              onClick={() => setQrCodeUrl('')}
              variant="outline"
              className="border-gray-300"
            >
              Generate New
            </Button>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">How to use:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Generate the QR code for the student</li>
          <li>• Download and print the QR code</li>
          <li>• Students can scan to view their certificate</li>
          <li>• The certificate is accessible via the URL</li>
        </ul>
      </div>
    </div>
  )
}
