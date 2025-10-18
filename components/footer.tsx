"use client";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.footer
      className="pt-8 pb-6 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10 bg-primary text-primary-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <div className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-3xl sm:text-3xl md:text-4xl font-serif font-normal mb-4 sm:mb-6 tracking-wide" style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif" }}>
              Laddu Gopal Industries
            </h3>
            <p className="text-primary-foreground/80 mb-4 leading-[1.7] sm:leading-relaxed text-[14px] sm:text-base md:text-base">
              Premium rice processing and manufacturing with over 26 years of excellence in quality and service.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg sm:text-xl md:text-xl mb-4 sm:mb-5">Quick Links</h4>
            <ul className="space-y-3 text-primary-foreground/80 text-[14px] sm:text-base md:text-base">
              <li>
                <a 
                  href="#home" 
                  className="hover:text-amber-300 transition-all hover:translate-x-1 inline-block duration-200"
                >
                  → Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="hover:text-amber-300 transition-all hover:translate-x-1 inline-block duration-200"
                >
                  → About Us
                </a>
              </li>
              <li>
                <a
                  href="#businesses"
                  className="hover:text-amber-300 transition-all hover:translate-x-1 inline-block duration-200"
                >
                  → Our Businesses
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-amber-300 transition-all hover:translate-x-1 inline-block duration-200"
                >
                  → Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-amber-300 transition-all hover:translate-x-1 inline-block duration-200"
                >
                  → Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg sm:text-xl md:text-xl mb-4 sm:mb-5">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80 text-[14px] sm:text-base md:text-base">
              <li>Rice Processing</li>
              <li>Custom Milling</li>
              <li>Quality Testing</li>
              <li>Packaging Solutions</li>
              <li>Bulk Supply</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg sm:text-xl md:text-xl mb-4 sm:mb-5">Contact Us</h4>
            <div className="space-y-4 text-primary-foreground/80 text-[14px] sm:text-base md:text-base">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-300" />
                <a
                  href="mailto:laddugopalindustries@gmail.com"
                  className="hover:text-amber-300 transition-colors break-all leading-[1.7] sm:leading-relaxed"
                >
                  laddugopalindustries@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-300" />
                <a
                  href="tel:+918282828755"
                  className="hover:text-amber-300 transition-colors leading-[1.7] sm:leading-relaxed"
                >
                  +91 82828 28755
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-300" />
                <p className="leading-[1.7] sm:leading-relaxed">
                  Khata No. 183/2043, Tahsil - Belpara, Salandi - 767026, Balangir, Odisha, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-primary-foreground/20"
          variants={itemVariants}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-primary-foreground/80 text-[14px] sm:text-base md:text-base">
              &copy; {new Date().getFullYear()} Laddu Gopal Industries. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-[14px] sm:text-base md:text-base">
              <span className="text-primary-foreground/80">Powered by</span>
              <motion.a
                href="https://www.botivate.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-amber-300 hover:text-amber-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Botivate
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
