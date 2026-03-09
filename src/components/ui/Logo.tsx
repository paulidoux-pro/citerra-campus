import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className, light }: LogoProps) {
  return (
    <Image
      src="/Logo.png"
      alt="Citerra Campus Immobilier"
      width={240}
      height={54}
      className={cn("h-auto", light && "brightness-0 invert", className)}
      priority
    />
  );
}
