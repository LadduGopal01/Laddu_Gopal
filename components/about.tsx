"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
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
      id="about"
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
            About Us
          </motion.h2>
        </header>

        {/* Content Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 sm:p-8 md:p-10 border border-amber-100/50 mb-12 sm:mb-14 md:mb-16"
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
                className="text-[14px] sm:text-base md:text-base text-gray-600 leading-[1.7] sm:leading-relaxed mb-4 text-justify"
                variants={itemVariants}
              >
                The story of Laddu Gopal Industries (A unit of Shyamji Group)
                began in <span>1999</span>, with a humble dream — to bring the
                finest grains of rice from our land to every home. What started
                as a small plant with a capacity of just{" "}
                <span>4 MT per hour</span> has today grown into a symbol of
                progress, trust, and perseverance, producing over{" "}
                <span>20,000 MT of rice every month</span>.
              </motion.p>
              <motion.p
                className="text-[14px] sm:text-base md:text-base text-gray-600 leading-[1.7] sm:leading-relaxed mb-4 text-justify"
                variants={itemVariants}
              >
                Now in its third generation of leadership, our journey is guided
                by the same values that shaped our foundation —{" "}
                <span>honesty, hard work, and commitment to quality</span>. Each
                generation has added its own vision and strength, turning what
                began as a family business into a modern enterprise built on
                technology and tradition alike.
              </motion.p>
              <motion.p
                className="text-[14px] sm:text-base md:text-base text-gray-600 leading-[1.7] sm:leading-relaxed mb-4 text-justify"
                variants={itemVariants}
              >
                Our <span>state-of-the-art manufacturing campus</span> is
                powered by a dedicated{" "}
                <span>team of more than 100 skilled professionals</span>,
                working together to ensure that every grain leaving our mill
                reflects our promise of purity and excellence.
              </motion.p>
              <motion.p
                className="text-[14px] sm:text-base md:text-base text-gray-600 leading-[1.7] sm:leading-relaxed mb-0 text-justify"
                variants={itemVariants}
              >
                From one small unit to a thriving integrated agri-industry,
                Laddu Gopal Industries stands as{" "}
                <span>a story of creation with purpose</span> — where every
                milestone achieved is rooted in faith, family, and the farmers
                who make it all possible.
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
                  src="/images/AboutUs.jpg"
                  alt="Laddu Gopal Industries rice processing facility"
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Brands Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <header className="mb-6 sm:mb-8 md:mb-10 text-center">
            <motion.h3
              className="text-3xl sm:text-3xl md:text-4xl font-serif font-normal text-gray-900 mb-3 tracking-wide"
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
              }}
              variants={itemVariants}
            >
              Our Brands
            </motion.h3>
          </header>

          {/* Logos Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 sm:p-10 md:p-12 border border-amber-100/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-4xl mx-auto"
              variants={containerVariants}
            >
              {/* Syamji Logo */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group flex items-center justify-center"
              >
                <img
                  src="/images/Logo/Syamji.png"
                  alt="Sanjay Grain Products Pvt. Ltd."
                  className="max-h-52 sm:max-h-60 md:max-h-72 w-auto object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
                  onError={(e) => {
                    console.error("Failed to load Syamji.png");
                    e.currentTarget.src =
                      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><text x="50%" y="50%" text-anchor="middle" fill="gray">Syamji</text></svg>';
                  }}
                />
              </motion.div>

              {/* Laddu Gopal Logo */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group flex items-center justify-center"
              >
                <img
                  src="/images/Logo/LadduGopal.png"
                  alt="Sunfire Metal Industries LLP"
                  className="max-h-32 sm:max-h-40 md:max-h-52 w-auto object-contain filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
                  onError={(e) => {
                    console.error("Failed to load LadduGopal.png");
                    e.currentTarget.src =
                      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="100"><text x="50%" y="50%" text-anchor="middle" fill="gray">Laddu Gopal</text></svg>';
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
