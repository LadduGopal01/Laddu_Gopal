"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, ZoomOut, RotateCw } from "lucide-react";

export default function BusinessesSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);

  const images = [
    { src: "/images/Gallary/V1.mp4", alt: "Business Video", type: "video" },
    { src: "/images/Gallary/1.jpg", alt: "Rice Processing", type: "image" },
    { src: "/images/Gallary/2.jpg", alt: "Quality Rice", type: "image" },
    { src: "/images/Gallary/3.jpg", alt: "Export Operations", type: "image" },
    { src: "/images/Gallary/4.jpg", alt: "Packaging Solutions", type: "image" },
    {
      src: "/images/Gallary/5.jpg",
      alt: "Laddu Gopal Industries",
      type: "image",
    },
    { src: "/images/Gallary/6.jpg", alt: "Business Operations", type: "image" },
    { src: "/images/Gallary/2.jpg", alt: "Packaging Process", type: "image" },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setZoomLevel(1);
    setRotation(0);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setZoomLevel(1);
    setRotation(0);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.5, 0.5));
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <>
      <section
        id="businesses"
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
              Gallery
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Grid */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {images.slice(0, 4).map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer ring-1 ring-amber-200/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => handleImageClick(image)}
                    >
                      {image.type === "video" ? (
                        <video
                          src={image.src}
                          className="w-full h-48 object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Grid */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {images.slice(4, 8).map((image, index) => (
                    <motion.div
                      key={index + 4}
                      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer ring-1 ring-amber-200/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => handleImageClick(image)}
                    >
                      {image.type === "video" ? (
                        <video
                          src={image.src}
                          className="w-full h-48 object-cover"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            {/* Controls */}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <motion.button
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
                title="Zoom Out"
              >
                <ZoomOut className="w-6 h-6 text-white" />
              </motion.button>
              <motion.button
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
                title="Zoom In"
              >
                <ZoomIn className="w-6 h-6 text-white" />
              </motion.button>
              <motion.button
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleRotate();
                }}
                title="Rotate"
              >
                <RotateCw className="w-6 h-6 text-white" />
              </motion.button>
              <motion.button
                className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClose}
                title="Close"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>
            </div>

            {/* Zoom Level Indicator */}
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold">
              {Math.round(zoomLevel * 100)}%
            </div>

            {/* Image Container */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.type === "video" ? (
                <video
                  src={selectedImage.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <motion.img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  animate={{
                    scale: zoomLevel,
                    rotate: rotation,
                  }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                  style={{ transformOrigin: "center" }}
                />
              )}
            </motion.div>

            {/* Image Caption */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium">
              {selectedImage.alt}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
