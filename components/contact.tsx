"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  FileText,
  Building2,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    const timestamp = new Date()
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(",", "");

    const data = {
      action: "insert",
      sheetName: "Response",
      rowData: JSON.stringify([
        timestamp,
        "",
        formData.get("Name"),
        formData.get("Contect No"),
        formData.get("Gmail"),
        formData.get("Remarks"),
      ]),
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzTMwGyRymCTfj9S5hEa66ciucFqp0T2wGst7B6-MievsFJ1fhiRPIbE8m4g6ymRn0Z/exec",
        {
          method: "POST",
          body: new URLSearchParams(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setStatusMessage(
          "Message sent successfully! We will get back to you soon."
        );

        if (formRef.current) {
          formRef.current.reset();
        }

        setTimeout(() => {
          setSubmitStatus(null);
          setStatusMessage("");
        }, 5000);
      } else {
        throw new Error(result.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setStatusMessage(
        "Failed to send message. Please try again or contact us directly."
      );

      setTimeout(() => {
        setSubmitStatus(null);
        setStatusMessage("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="contact"
      className="pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 scroll-mt-24 bg-gradient-to-br from-amber-20 to-orange-20"
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-4 max-w-7xl">
        {/* Header */}
        <header className="mb-6 sm:mb-8 md:mb-10 text-center">
          <motion.h2
            className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-serif font-normal text-gray-900 leading-tight mb-3 tracking-wide"
            style={{
              fontFamily: "'Playfair Display', 'Times New Roman', serif",
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-[14px] sm:text-base text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Get in touch with us for your requirements
          </motion.p>
        </header>

        {/* Content Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 sm:p-8 md:p-10 border border-blue-100/50 mb-12 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
            {/* Left: Contact Information */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="flex items-start gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "#0a3057" }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Building2 className="h-6 w-6 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Factory & Registered Office
                  </h3>
                  <address className="not-italic text-[14px] sm:text-base text-gray-600 leading-relaxed">
                    Khata No. 183/2043, Tahsil - Belpara,
                    <br />
                    Salandi - 767026, Balangir, Odisha
                  </address>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "#0a3057" }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FileText className="h-6 w-6 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    Legal Information
                  </h3>
                  <div className="space-y-1.5 text-[14px] sm:text-base text-gray-600">
                    <div>
                      <span className="font-medium">GSTIN:</span>{" "}
                      21AAKFL6157F1ZF
                    </div>
                    <div>
                      <span className="font-medium">PAN:</span> AAKFL6157F
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="p-3 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: "#0a3057" }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="h-6 w-6 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">
                    Contact Details
                  </h3>
                  <div className="space-y-3 text-[14px] sm:text-base">
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Mail className="h-5 w-5 text-gray-600 flex-shrink-0" />
                      <a
                        className="hover:underline break-all"
                        style={{ color: "#0a3057" }}
                        href="mailto:laddugopalindustries@gmail.com"
                      >
                        laddugopalindustries@gmail.com
                      </a>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Phone className="h-5 w-5 text-gray-600 flex-shrink-0" />
                      <a
                        className="hover:underline"
                        style={{ color: "#0a3057" }}
                        href="tel:+918282828755"
                      >
                        +91 82828 28755
                      </a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.form
                ref={formRef}
                className="p-6 sm:p-6 rounded-xl border space-y-5"
                style={{
                  backgroundColor: "rgba(10, 48, 87, 0.05)",
                  borderColor: "rgba(10, 48, 87, 0.2)",
                }}
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center mb-2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    Send us a Message
                  </h3>
                </div>

                {/* Status Message */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`p-4 rounded-lg flex items-center gap-3 ${
                        submitStatus === "success"
                          ? "bg-green-50 text-green-800 border border-green-200"
                          : "bg-red-50 text-red-800 border border-red-200"
                      }`}
                    >
                      {submitStatus === "success" ? (
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      )}
                      <p className="text-sm font-medium">{statusMessage}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div variants={itemVariants}>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-900 mb-1.5 block"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="Name"
                    placeholder="Enter your full name"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-white"
                    autoComplete="off"
                  />
                </motion.div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <motion.div variants={itemVariants}>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-900 mb-1.5 block"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="Gmail"
                      type="email"
                      placeholder="you@company.com"
                      required
                      disabled={isSubmitting}
                      className="w-full bg-white"
                      autoComplete="off"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-900 mb-1.5 block"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="Contect No"
                      type="tel"
                      placeholder="+91 00000 00000"
                      disabled={isSubmitting}
                      className="w-full bg-white"
                      autoComplete="off"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-900 mb-1.5 block"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="Remarks"
                    placeholder="How can we help you?"
                    rows={5}
                    required
                    disabled={isSubmitting}
                    className="w-full resize-none bg-white"
                    autoComplete="off"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-2"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white py-6 text-base font-medium"
                    style={{ backgroundColor: "#0a3057" }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>

        {/* Map Section Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-blue-100/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59727.89!2d82.920948!3d20.501021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDMwJzAzLjciTiA4MsKwNTUnMTUuNCJF!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div
            className="p-6 sm:p-8 text-center border-t bg-white"
            style={{ borderColor: "rgba(10, 48, 87, 0.2)" }}
          >
            <MapPin
              className="h-8 w-8 mx-auto mb-3"
              style={{ color: "#0a3057" }}
            />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
              Find Us Here
            </h3>
            <p className="text-gray-600 mb-1 text-[14px] sm:text-base">
              Salandi, Belpara - 767026, Balangir, Odisha
            </p>
            <p className="text-sm text-gray-600 mb-5">
              Interactive map for easy location access
            </p>
            <motion.button
              className="px-6 py-3 text-white rounded-lg transition-colors shadow-md font-medium"
              style={{ backgroundColor: "#0a3057" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/?api=1&query=20.501021,82.920948",
                  "_blank"
                )
              }
            >
              View on Google Maps
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
