"use client";
import { motion } from "framer-motion";

export function Sustainability() {
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
      id="sustainability"
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
            Sustainability & Responsibility
          </motion.h2>
        </header>

        {/* Content Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 sm:p-8 md:p-10 border border-amber-100/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="p-6 rounded-lg bg-amber-50/50 border border-amber-200/50 shadow-sm hover:shadow-md hover:bg-amber-100/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3
                className="text-xl font-serif font-normal text-gray-900 mb-3"
                style={{
                  fontFamily: "'Playfair Display', 'Times New Roman', serif",
                }}
              >
                Efficient Water Usage
              </h3>
              <p className="text-[14px] sm:text-base text-gray-600 leading-[1.7] sm:leading-relaxed">
                Optimized processes reduce waste and preserve resources.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg bg-amber-50/50 border border-amber-200/50 shadow-sm hover:shadow-md hover:bg-amber-100/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3
                className="text-xl font-serif font-normal text-gray-900 mb-3"
                style={{
                  fontFamily: "'Playfair Display', 'Times New Roman', serif",
                }}
              >
                Energy Conservation
              </h3>
              <p className="text-[14px] sm:text-base text-gray-600 leading-[1.7] sm:leading-relaxed">
                Modern machinery and renewable energy initiatives.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg bg-amber-50/50 border border-amber-200/50 shadow-sm hover:shadow-md hover:bg-amber-100/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <h3
                className="text-xl font-serif font-normal text-gray-900 mb-3"
                style={{
                  fontFamily: "'Playfair Display', 'Times New Roman', serif",
                }}
              >
                Community & Farmers
              </h3>
              <p className="text-[14px] sm:text-base text-gray-600 leading-[1.7] sm:leading-relaxed">
                Employment opportunities and long-term farmer programs.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
