"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      category: "Electronics",
      image: "/products/electronics.png",
      description: "Latest gadgets and electronic devices",
      items: "500+ Products",
    },
    {
      category: "Apparel",
      image: "/products/apparel.jpg",
      description: "Fashion and clothing for all occasions",
      items: "300+ Products",
    },
    {
      category: "Home & Living",
      image: "/products/home.jpg",
      description: "Home decor and lifestyle products",
      items: "400+ Products",
    },
    {
      category: "Beauty & Wellness",
      image: "/products/beauty.jpg",
      description: "Health and beauty essentials",
      items: "250+ Products",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="products"
      className="py-24 bg-[#ffffff] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#241d49]/10 to-transparent"></div>
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#ffa238]/5 rounded-full blur-3xl"></div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#232a2f] mb-6">
            Product{" "}
            <span className="bg-gradient-to-r from-[#ffa238] to-[#ffa238]/70 bg-clip-text text-transparent">
              Trading
            </span>
          </h2>
          <p className="text-xl text-[#4e5458] max-w-4xl mx-auto leading-relaxed">
            Explore our diverse product categories with downloadable catalogs to
            support your business needs and growth.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-[#ffffff] border border-[#4e5458]/20">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.category}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#232a2f]/80 via-[#232a2f]/20 to-transparent"></div>

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-[#ffffff]">
                    <h3 className="text-2xl font-bold mb-2">
                      {product.category}
                    </h3>
                    <p className="text-sm opacity-90 mb-2">
                      {product.description}
                    </p>
                    <span className="text-[#ffa238] font-semibold text-sm">
                      {product.items}
                    </span>
                  </div>

                  {/* Hover Icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-[#ffffff]/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiArrowRight className="text-[#ffffff]" size={20} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
