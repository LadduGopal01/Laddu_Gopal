"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  // IntersectionObserver for active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash("#" + entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -70% 0px",
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Scroll listener to add 'scrolled' state
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#quality", label: "Business" },
    { href: "#products", label: "Products" },
    { href: "#process", label: "Process" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#businesses", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  // Smooth scroll on nav click
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveHash(href);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-background/90 backdrop-blur border-b transition-shadow duration-300 ${
        scrolled ? "shadow-md bg-white/90" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* Optimized logo image */}
          <Image
            src="/images/LadduGopal.png"
            alt="Laddu Gopal logo"
            width={160}
            height={64}
            className="h-24 w-auto max-h-[64px]"
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4 text-sm ml-auto font-bold">
          {navLinks.map(({ href, label }) => {
            const isActive = activeHash === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleSmoothScroll(e, href)}
                className={`px-3 py-1 rounded-md transition-colors duration-300 ease-in-out cursor-pointer
                  ${
                    isActive
                      ? "bg-[#001f4d] text-white"
                      : "text-[#001f4d] hover:bg-[#cbd5e1] hover:text-[#001f4d]"
                  }
                `}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="h-4 w-6 border-t-2 border-b-2 border-foreground" />
        </button>
      </div>

      {/* Mobile nav with reduced gap */}
      {open && (
        <div className="md:hidden border-t bg-background">
          <nav className="px-4 py-2 flex flex-col gap-1 text-sm font-bold">
            {navLinks.map(({ href, label }) => {
              const isActive = activeHash === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={(e) => handleSmoothScroll(e, href)}
                  className={`px-3 py-1 rounded-md transition-colors duration-300 ease-in-out cursor-pointer
                    ${
                      isActive
                        ? "bg-[#001f4d] text-white"
                        : "text-[#001f4d] hover:bg-[#cbd5e1] hover:text-[#001f4d]"
                    }
                  `}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
