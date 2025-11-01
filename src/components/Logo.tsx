import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: { height: 40, width: 120 },
    md: { height: 50, width: 150 },
    lg: { height: 60, width: 180 },
  };

  return (
    <Link
      href="/"
      className={`flex items-center transition-transform duration-300 hover:scale-105 ${className}`}
    >
      <div className="relative">
        <Image
          src="/jankiinoftech-Logo.png"
          alt="JankiInfotech Logo"
          width={sizeClasses[size].width}
          height={sizeClasses[size].height}
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
