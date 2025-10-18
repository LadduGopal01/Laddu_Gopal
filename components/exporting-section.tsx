"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ExportingSection() {
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
      id="exporting"
      className="pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 scroll-mt-24 bg-gradient-to-br from-amber-20 to-orange-20"
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-4 max-w-7xl">
        {/* Header */}
        <header className="mb-6 sm:mb-8 md:mb-10 text-center">
          <motion.p
            className="text-xs sm:text-xs tracking-wider text-amber-700 uppercase mb-2 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            DELIVERING WORLDWIDE
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-serif font-normal text-gray-900 leading-tight mb-3 tracking-wide"
            style={{
              fontFamily: "'Playfair Display', 'Times New Roman', serif",
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Export Excellence
          </motion.h2>
        </header>

        {/* Content Card with Background and Shadow */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 sm:p-8 md:p-10 border border-amber-100/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
            {/* Text Section */}
            <motion.div
              className="order-2 lg:order-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                className="text-[14px] sm:text-base md:text-base text-gray-600 leading-[1.7] sm:leading-relaxed text-justify"
                variants={itemVariants}
              >
                We are equipped with state-of-the-art milling technologies and a
                highly efficient production process. This enables us to
                seamlessly handle bulk orders. With a monthly capacity of
                <motion.span
                  className="font-semibold text-orange-600"
                  initial={{ color: "#ea580c" }}
                  animate={{ color: "#ff6b35" }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  {" "}
                  20,000 metric tons,
                </motion.span>{" "}
                we are prepared to meet all your rice requirements with
                reliability and consistency.
              </motion.p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="order-1 lg:order-2 w-full"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-[4/3] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] xl:min-h-[400px] relative ring-1 ring-amber-200/30">
                <Image
                  src="/images/Exporters/Exporters.jpg"
                  alt="Export and shipping operations"
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  priority={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
