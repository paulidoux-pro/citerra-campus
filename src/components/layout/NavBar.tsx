"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="Citerra Campus Immobilier"
              width={220}
              height={50}
              className={cn(
                "h-10 w-auto transition-all duration-500",
                !scrolled && "brightness-0 invert"
              )}
              priority
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-navy-500",
                  scrolled ? "text-navy-800" : "text-white/90 hover:text-white"
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300",
                scrolled
                  ? "bg-navy-800 text-white hover:bg-navy-700"
                  : "bg-white text-navy-800 hover:bg-white/90"
              )}
            >
              Nous contacter
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled
                ? "text-navy-800 hover:bg-navy-50"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Ouvrir le menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
