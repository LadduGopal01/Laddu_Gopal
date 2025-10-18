"use client";
import { motion, Variants } from "framer-motion";

export function QualityStrip() {
  const isEvenDay = new Date().getDate() % 2 === 0;
  const backgroundClass = "bg-gradient-to-br from-amber-20 to-orange-20";
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="quality"
      className={`pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 ${backgroundClass}`}
    >
      <div className="container mx-auto px-6 sm:px-4 max-w-7xl">
        {/* Heading - Matching ProductGrid Style */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-2"
            style={{
              fontFamily: "'Playfair Display', 'Times New Roman', serif",
            }}
          >
            Our Business
          </h2>
        </motion.div>

        {/* Business Description - Full Content */}
        <motion.div
          className="max-w-full lg:max-w-7xl xl:max-w-[1400px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-8 md:p-10 lg:p-12 xl:p-14 shadow-lg">
            <motion.p
              className="text-[15px] sm:text-lg md:text-xl text-gray-700 leading-[1.7] sm:leading-relaxed mb-4 sm:mb-5 font-medium text-justify"
              variants={fadeInUp}
            >
              At Laddu Gopal Industries, we take pride in nurturing a business
              that's deeply rooted in the soil of India.
            </motion.p>

            <motion.p
              className="text-[14px] sm:text-base md:text-lg text-gray-600 leading-[1.7] sm:leading-relaxed mb-4 sm:mb-5 text-justify"
              variants={fadeInUp}
            >
              We operate modern manufacturing facilities for{" "}
              <span>Parboiled Rice, Raw Rice, and Puffed Rice</span>, with a
              combined production capacity of over{" "}
              <span>20,000 MT per month</span>. Our plants are equipped with
              state-of-the-art automated processing lines, advanced sortex
              systems, and stringent quality control mechanisms — ensuring that
              every grain we produce meets global standards of purity, texture,
              and taste.
            </motion.p>

            <motion.p
              className="text-[14px] sm:text-base md:text-lg text-gray-600 leading-[1.7] sm:leading-relaxed mb-4 sm:mb-5 text-justify"
              variants={fadeInUp}
            >
              Expanding our commitment to a greener planet, we have also built a
              dedicated vertical for producing{" "}
              <span>biomass pellets and briquettes</span>, converting
              agricultural residue into clean energy. Today, we proudly supply
              biomass fuel to{" "}
              <span>major Thermal Power Plants across the country</span>,
              contributing to India's renewable energy goals.
            </motion.p>

            <motion.p
              className="text-[14px] sm:text-base md:text-lg text-gray-600 leading-[1.7] sm:leading-relaxed mb-4 sm:mb-5 text-justify"
              variants={fadeInUp}
            >
              Our strength lies in our people — especially the{" "}
              <span>1,000+ farmers</span> who are part of our extended family.
              Through <span>backward integration programs</span>, we work
              closely with them, ensuring fair prices and consistent demand. We
              also procure <span>agro-waste</span> directly from farms —
              material often left behind after harvest — transforming it into a
              valuable resource. This not only creates{" "}
              <span>additional income for farmers</span> but also reduces field
              burning, preserving the health of our land and air.
            </motion.p>

            <motion.p
              className="text-[14px] sm:text-base md:text-lg text-gray-700 leading-[1.7] sm:leading-relaxed font-medium text-justify mb-0"
              variants={fadeInUp}
            >
              Over the decades, this journey has earned us not just growth, but{" "}
              <span>trust, respect, and long-lasting relationships</span> across
              the value chain. At Laddu Gopal Industries, every grain tells a
              story — of <span>sustainability, partnership, and purpose</span>.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
