"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeBiomassStep, setActiveBiomassStep] = useState(0);
  const [isBiomassAutoPlaying, setIsBiomassAutoPlaying] = useState(true);

  const riceSteps = [
    {
      id: 1,
      title: "Intake of Paddy",
      image: "/images/Process/Intake of Paddy.jpg",
      description:
        "Fresh paddy is carefully received and inspected for quality. Our rigorous selection process ensures only the finest grains proceed to the next stage, maintaining our commitment to excellence from the very beginning.",
    },
    {
      id: 2,
      title: "Cleaning of Paddy",
      image: "/images/Process/Cleaning.jpg",
      description:
        "Advanced cleaning machinery removes impurities, stones, and damaged grains. This critical step uses multi-stage separation technology to ensure only pure, high-quality paddy moves forward in the process.",
    },
    {
      id: 3,
      title: "Parboiling & Drying",
      image: "/images/Process/parabaoling 2.jpg",
      description:
        "Paddy is soaked, steamed, and dried to enhance its nutritional profile and improve milling yields. This process also helps in reducing breakage during milling.",
    },
    {
      id: 4,
      title: "Milling",
      image: "/images/Process/Milling.jpg",
      description:
        "The outer husk is carefully removed using precision hulling machines. This delicate process preserves the grain's integrity while efficiently separating the rice from its protective shell.",
    },
    {
      id: 5,
      title: "Whitening & Polishing",
      image: "/images/Process/Whitening & Polishing.jpg",
      description:
        "Rice grains undergo controlled whitening and polishing to achieve the desired finish. Our state-of-the-art equipment ensures uniform processing while maintaining nutritional value and grain structure.",
    },
    {
      id: 6,
      title: "Grading & Sorting",
      image: "/images/Process/Grading & Sorting.jpg",
      description:
        "Final quality control through advanced optical sorting and grading systems. Each grain is meticulously categorized by size, color, and quality to meet our strict standards before packaging.",
    },
  ];

  const biomassSteps = [
    {
      id: 1,
      title: "Raw Material Collection",
      image: "/images/Biomass/Raw Material Collection.png",
      description:
        "We collect agricultural residues like rice husk, straw, and other crop waste directly from farmers and local sources, ensuring steady supply and supporting rural income.",
    },
    {
      id: 2,
      title: "Drying",
      image: "/images/Biomass/Drying.jpg",
      description:
        "The biomass is dried to bring down the moisture content to below 10%, which is essential for consistent pellet quality and efficient combustion.",
    },
    {
      id: 3,
      title: "Grinding",
      image: "/images/Biomass/Grinding.jpg",
      description:
        "The dried materials are finely ground in hammer mills to achieve uniform particle size, allowing smooth and compact pellet formation.",
    },
    {
      id: 4,
      title: "Pelletization",
      image: "/images/Process/plletization.png",
      description:
        "Ground biomass is compressed through a pellet mill under high pressure and temperature. The natural lignin acts as a binder, forming dense, cylindrical pellets without any chemical additives.",
    },
    {
      id: 5,
      title: "Cooling",
      image: "/images/Biomass/Cooling.jpg",
      description:
        "Hot pellets from the press are cooled to stabilize their shape and hardness, preventing moisture absorption during storage.",
    },
    {
      id: 6,
      title: "Packaging & Storage",
      image: "/images/Biomass/Packaging.png",
      description:
        "The finished pellets are packed in bulk or customized packaging as per client requirements and stored in moisture-free conditions before dispatch.",
    },
  ];

  // Auto-rotation for rice process
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % riceSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [riceSteps.length, isAutoPlaying]);

  // Auto-rotation for biomass process
  useEffect(() => {
    if (!isBiomassAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveBiomassStep((prevStep) => (prevStep + 1) % biomassSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [biomassSteps.length, isBiomassAutoPlaying]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleBiomassStepClick = (index: number) => {
    setActiveBiomassStep(index);
    setIsBiomassAutoPlaying(false);
    setTimeout(() => setIsBiomassAutoPlaying(true), 10000);
  };

  return (
    <section
      id="process"
      className="pt-8 pb-16 sm:pt-10 sm:pb-20 md:pt-12 md:pb-24 bg-gradient-to-br from-amber-20 to-orange-20 scroll-mt-24 overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-8 md:px-4 max-w-7xl">
        {/* Rice Milling Process */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <header className="mb-6 sm:mb-8 md:mb-10 text-center">
            <h2
              className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-serif font-normal text-gray-900 leading-tight mb-3 tracking-wide"
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
              }}
            >
              Rice Milling Process
            </h2>
            <p className="mt-3 text-[14px] sm:text-base md:text-base text-gray-600 leading-[1.7] sm:leading-relaxed">
              The journey from Paddy to Premium Rice
            </p>
          </header>

          {/* Content Card with Background and Shadow */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 sm:p-8 md:p-10 mb-6 border border-amber-100/50">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
              {/* Image Section - Left on Desktop, Top on Mobile */}
              <div className="order-1 lg:order-1 w-full">
                <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-[4/3] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] xl:min-h-[400px] relative ring-1 ring-amber-200/30">
                  <Image
                    key={activeStep}
                    src={riceSteps[activeStep].image}
                    alt={riceSteps[activeStep].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover animate-fade-in-image"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Text Section - Right on Desktop, Bottom on Mobile */}
              <div className="order-2 lg:order-2">
                <h3
                  key={`title-${activeStep}`}
                  className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-serif font-normal text-gray-900 leading-tight mb-4 sm:mb-6 tracking-wide animate-slide-in-right"
                  style={{
                    fontFamily: "'Playfair Display', 'Times New Roman', serif",
                  }}
                >
                  {riceSteps[activeStep].title}
                </h3>

                <p
                  key={`desc-${activeStep}`}
                  className="text-[14px] sm:text-base md:text-base text-gray-600 leading-[1.7] sm:leading-relaxed text-justify animate-slide-in-right-delay"
                >
                  {riceSteps[activeStep].description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 sm:gap-3">
            {riceSteps.map((_, index: number) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`relative rounded-full transition-all duration-300 ${
                  index === activeStep
                    ? "w-4 h-4 sm:w-5 sm:h-5 shadow-lg"
                    : "w-3 h-3 sm:w-4 sm:h-4 hover:opacity-70"
                }`}
                style={{
                  backgroundColor: index === activeStep ? "#0f3a5c" : "#b3c5d6",
                }}
                aria-label={`Go to step ${index + 1}`}
              >
                {index === activeStep && isAutoPlaying && (
                  <div
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ border: "2px solid #0f3a5c" }}
                  ></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Biomass Pellet Manufacturing Process */}
        <div className="pt-8 sm:pt-10 md:pt-12">
          <header className="mb-6 sm:mb-8 md:mb-10 text-center">
            <h2
              className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-serif font-normal text-gray-900 leading-tight mb-3 tracking-wide"
              style={{
                fontFamily: "'Playfair Display', 'Times New Roman', serif",
              }}
            >
              Biomass Pellet Manufacturing Process
            </h2>
            <p className="mt-3 text-[14px] sm:text-base md:text-base text-gray-600 leading-[1.7] sm:leading-relaxed">
              Transforming Agricultural Waste into Sustainable Energy
            </p>
          </header>

          {/* Content Card with Background and Shadow */}
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 sm:p-8 md:p-10 mb-6 border border-green-100/50">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
              {/* Text Section - Left on Desktop, Bottom on Mobile */}
              <div className="order-2 lg:order-1">
                <h3
                  key={`biomass-title-${activeBiomassStep}`}
                  className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-serif font-normal text-gray-900 leading-tight mb-4 sm:mb-6 tracking-wide animate-slide-in-left"
                  style={{
                    fontFamily: "'Playfair Display', 'Times New Roman', serif",
                  }}
                >
                  {biomassSteps[activeBiomassStep].title}
                </h3>

                <p
                  key={`biomass-desc-${activeBiomassStep}`}
                  className="text-[14px] sm:text-base md:text-base text-gray-600 leading-[1.7] sm:leading-relaxed text-justify animate-slide-in-left-delay"
                >
                  {biomassSteps[activeBiomassStep].description}
                </p>
              </div>

              {/* Image Section - Right on Desktop, Top on Mobile */}
              <div className="order-1 lg:order-2 w-full">
                <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-[4/3] sm:aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] xl:min-h-[400px] relative ring-1 ring-green-200/30">
                  <Image
                    key={activeBiomassStep}
                    src={biomassSteps[activeBiomassStep].image}
                    alt={biomassSteps[activeBiomassStep].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover animate-fade-in-image"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 sm:gap-3">
            {biomassSteps.map((_, index: number) => (
              <button
                key={index}
                onClick={() => handleBiomassStepClick(index)}
                className={`relative rounded-full transition-all duration-300 ${
                  index === activeBiomassStep
                    ? "w-4 h-4 sm:w-5 sm:h-5 shadow-lg"
                    : "w-3 h-3 sm:w-4 sm:h-4 hover:opacity-70"
                }`}
                style={{
                  backgroundColor:
                    index === activeBiomassStep ? "#0f3a5c" : "#b3c5d6",
                }}
                aria-label={`Go to biomass step ${index + 1}`}
              >
                {index === activeBiomassStep && isBiomassAutoPlaying && (
                  <div
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ border: "2px solid #0f3a5c" }}
                  ></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-image {
          from {
            opacity: 0;
            transform: scale(1.05) rotateY(5deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slide-in-right-delay {
          from {
            opacity: 0;
            transform: translateX(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slide-in-left-delay {
          from {
            opacity: 0;
            transform: translateX(-40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .animate-fade-in-image {
          animation: fade-in-image 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }

        .animate-slide-in-right-delay {
          animation: slide-in-right-delay 0.6s ease-out 0.2s both;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }

        .animate-slide-in-left-delay {
          animation: slide-in-left-delay 0.6s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
}
