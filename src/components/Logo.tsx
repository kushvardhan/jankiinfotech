import Link from 'next/link'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>

        <div className="">
          <div className={`font-bold ${textSizeClasses[size]}`}>
            <span className="text-green-600">janki</span>
            <span className="text-gray-800">infotech</span>
          </div>
          <div className="text-xs text-gray-600 -mt-1">From Ideas To Reality</div>

        <circle cx="180" cy="20" r="8" className="fill-green-500" />
          <circle cx="185" cy="30" r="6" className="fill-green-400" />
          <circle cx="175" cy="35" r="4" className="fill-green-300" />

        </div>
    </Link>
  )
}
