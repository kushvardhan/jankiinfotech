import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <div className={`font-bold ${textSizeClasses[size]}`}>
          <span className="text-green-600">janki</span>
          <span className="text-gray-800">Infotech</span>
        </div>
        <div className="text-xs text-gray-600 -mt-1">From Ideas To Reality</div>

        {/* Decorative SVG Elements */}
        <svg
          className="absolute -top-1 -right-8 w-8 h-8 opacity-60"
          viewBox="0 0 32 32"
        >
          <circle cx="16" cy="8" r="3" className="fill-green-500" />
          <circle cx="20" cy="16" r="2" className="fill-green-400" />
          <circle cx="12" cy="20" r="1.5" className="fill-green-300" />
        </svg>
      </div>
    </Link>
  );
}
