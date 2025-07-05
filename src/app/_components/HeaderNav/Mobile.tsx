"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Mobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Channels", href: "#channels" },
    // { name: "Twitch", href: "#twitch" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
  ];
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </Button>

      {isMenuOpen && (
        <nav className="md:hidden mt-4 py-4 border-t border-muted bg-background/95 absolute top-[50px] left-0 right-0 z-50">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary hover:bg-primary/10 transition-smooth font-inter font-medium py-4 px-6"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
