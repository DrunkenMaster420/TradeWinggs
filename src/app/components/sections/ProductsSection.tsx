"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const ProductsSection = () => {
  // explicit HTMLDivElement ref for type-safety
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      category: "Electronics",
      image: "/products/electronics.webp",
      description: "Latest gadgets and electronic devices",
      items: "500+ Products",
    },
    {
      category: "Apparel",
      image: "/products/apparel.webp",
      description: "Fashion and clothing for all occasions",
      items: "300+ Products",
    },
    {
      category: "Home & Living",
      image: "/products/home.webp",
      description: "Home decor and lifestyle products",
      items: "400+ Products",
    },
    {
      category: "Beauty & Wellness",
      image: "/products/beauty.webp",
      description: "Health and beauty essentials",
      items: "250+ Products",
    },
  ] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  // ✅ ease casted with `as const` to satisfy TS
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#241d49]/10 to-transparent" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#ffa238]/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        {/* Section header */}
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

        {/* Products grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {products.map((p) => (
            <motion.div key={p.category} variants={itemVariants} className="group cursor-pointer">
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2 bg-white border border-[#4e5458]/20">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.category}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#232a2f]/80 via-[#232a2f]/20 to-transparent" />

                  {/* Card content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{p.category}</h3>
                    <p className="text-sm opacity-90 mb-2">{p.description}</p>
                    <span className="text-[#ffa238] font-semibold text-sm">
                      {p.items}
                    </span>
                  </div>

                  {/* Hover icon */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiArrowRight size={20} className="text-white" />
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
