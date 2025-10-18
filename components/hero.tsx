"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      id="home"
      className="min-h-[70vh] flex items-center relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(45deg, #f2efe8, #e5e1d8)",
            "linear-gradient(45deg, #e5e1d8, #d8d4c9)",
            "linear-gradient(45deg, #f2efe8, #e5e1d8)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Loading skeleton while image loads */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary/20 animate-pulse" />
      )}

      {/* Background image optimized with next/image */}
      {!imageError && (
        <Image
          src="/images/Home.png"
          alt="Premium Rice Processing - Laddu Gopal Industries"
          priority
          fill
          sizes="100vw"
          className={`object-cover transition-all duration-700 ease-out ${
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          quality={85}
          onLoad={() => {
            setImageLoaded(true);
          }}
          onError={(e) => {
            console.error("Failed to load hero background image");
            setImageError(true);
            setImageLoaded(true);
          }}
        />
      )}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>

      <div className="container mx-auto px-6 sm:px-8 md:px-4 py-12 sm:py-14 md:py-16 text-center relative z-10">
        <motion.h1
          className="font-serif text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.2] sm:leading-tight text-balance text-white drop-shadow-2xl px-2 sm:px-0"
          variants={itemVariants}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          From Our Fields to Your Family
        </motion.h1>
        <motion.p
          className="mt-4 sm:mt-5 md:mt-6 max-w-2xl mx-auto text-[15px] sm:text-base md:text-lg lg:text-xl text-white/95 drop-shadow-lg leading-[1.6] sm:leading-relaxed px-4 sm:px-6 md:px-0 text-center"
          variants={itemVariants}
        >
          At Laddu Gopal Industries, every grain tells a story — of purity,
          care, and tradition. Grown with love and processed with precision, our
          rice brings the authentic taste of India to homes and hearts across
          the globe.
        </motion.p>
        <motion.div
          className="mt-6 sm:mt-8 md:mt-10 flex items-center justify-center gap-3 sm:gap-4 flex-wrap px-4 sm:px-0"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px rgba(14, 51, 84, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold cursor-pointer"
            >
              View Products
            </Button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 12px rgba(255, 255, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto border-2 border-white/60 bg-white/10 text-white hover:bg-white/20 hover:border-white/80 shadow-lg hover:shadow-xl transition-all duration-300 px-6 sm:px-8 py-3 sm:py-3.5 text-base sm:text-lg font-semibold backdrop-blur-sm cursor-pointer"
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
