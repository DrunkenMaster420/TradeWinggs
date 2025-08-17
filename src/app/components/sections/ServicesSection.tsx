// "use client";
// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   MdOutlineDesignServices,
//   MdWeb,
//   MdPhoneAndroid,
//   MdSearch,
//   MdOutlineCampaign,
// } from "react-icons/md";
// import { FaInstagram } from "react-icons/fa";
// import { FiBriefcase, FiClipboard } from "react-icons/fi";

// const ServicesSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const services = [
//     {
//       title: "SEO Optimization",
//       description:
//         "Boost visibility and rank higher on search engines with our proven SEO strategies.",
//       icon: <MdSearch size={36} />,
//       features: ["Keyword Research", "Technical SEO", "Content Optimization"],
//       color: "from-blue-500 to-blue-600",
//     },
//     {
//       title: "Social Media Marketing",
//       description:
//         "Engage and grow your audience across all major social platforms.",
//       icon: <FaInstagram size={36} />,
//       features: ["Content Strategy", "Community Management", "Paid Campaigns"],
//       color: "from-pink-500 to-purple-600",
//     },
//     {
//       title: "Paid Advertising",
//       description:
//         "Maximize ROI with targeted PPC and paid advertising campaigns.",
//       icon: <MdOutlineCampaign size={36} />,
//       features: ["Google Ads", "Facebook Ads", "Campaign Optimization"],
//       color: "from-green-500 to-green-600",
//     },
//     {
//       title: "Brand Identity",
//       description:
//         "Build a strong, memorable brand identity that resonates with your audience.",
//       icon: <FiBriefcase size={36} />,
//       features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
//       color: "from-orange-500 to-red-500",
//     },
//     {
//       title: "Website Development",
//       description:
//         "Create responsive, user-friendly websites that convert visitors into customers.",
//       icon: <MdWeb size={36} />,
//       features: ["Responsive Design", "E-commerce", "CMS Integration"],
//       color: "from-cyan-500 to-blue-500",
//     },
//     {
//       title: "App Development",
//       description:
//         "Custom mobile applications that enhance user engagement and drive growth.",
//       icon: <MdPhoneAndroid size={36} />,
//       features: ["iOS & Android", "Cross-platform", "UI/UX Design"],
//       color: "from-purple-500 to-purple-600",
//     },
//     {
//       title: "Graphic Design",
//       description:
//         "Eye-catching visuals and designs that capture your brand essence perfectly.",
//       icon: <MdOutlineDesignServices size={36} />,
//       features: ["Logo Design", "Print Design", "Digital Assets"],
//       color: "from-yellow-500 to-orange-500",
//     },
//     {
//       title: "Content Marketing",
//       description:
//         "Strategic content creation that drives engagement and builds authority.",
//       icon: <FiClipboard size={36} />,
//       features: ["Blog Writing", "Video Content", "Social Posts"],
//       color: "from-indigo-500 to-blue-600",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section
//       id="services"
//       className="py-24 bg-darkblue text-white relative overflow-hidden"
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-darkblue via-darkblue/95 to-darkblue/90"></div>
//         <motion.div
//           className="absolute top-20 left-20 w-96 h-96 bg-orange/10 rounded-full blur-3xl"
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-20 w-96 h-96 bg-orange/5 rounded-full blur-3xl"
//           animate={{
//             x: [0, -100, 0],
//             y: [0, 50, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       </div>

//       <div ref={ref} className="container mx-auto px-6 relative z-10">
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
//             Our Digital Marketing{" "}
//             <span className="bg-gradient-to-r from-orange to-orange/70 bg-clip-text text-transparent">
//               Services
//             </span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//             Comprehensive digital solutions designed to help your business grow
//             and succeed in today's competitive digital landscape.
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//         >
//           {services.map((service, index) => (
//             <motion.div key={index} variants={itemVariants} className="group">
//               <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-orange/50 transition-all duration-500 hover:bg-white/10 relative overflow-hidden h-full">
//                 {/* Gradient Background on Hover */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
//                 ></div>

//                 {/* Floating Icon Background */}
//                 <motion.div
//                   className="absolute -top-4 -right-4 w-20 h-20 bg-orange/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"
//                   whileHover={{ scale: 1.5, rotate: 180 }}
//                 />

//                 <motion.div
//                   className="text-orange mb-6 relative z-10"
//                   whileHover={{ scale: 1.1, rotate: 5 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   {service.icon}
//                 </motion.div>

//                 <h3 className="text-xl font-bold mb-4 relative z-10 group-hover:text-orange transition-colors duration-300">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
//                   {service.description}
//                 </p>

//                 <ul className="space-y-2 relative z-10">
//                   {service.features.map((feature, idx) => (
//                     <motion.li
//                       key={idx}
//                       className="text-sm text-gray-400 flex items-center"
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={
//                         isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
//                       }
//                       transition={{ delay: index * 0.1 + idx * 0.1 }}
//                     >
//                       <span className="w-1.5 h-1.5 bg-orange rounded-full mr-2"></span>
//                       {feature}
//                     </motion.li>
//                   ))}
//                 </ul>

//                 {/* Hover Effect Border */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange/0 via-orange/20 to-orange/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ delay: 1, duration: 0.8 }}
//         >
//           <motion.a
//             href="#contact"
//             className="inline-flex items-center bg-gradient-to-r from-orange to-orange/80 text-darkblue font-bold py-4 px-10 rounded-full text-lg shadow-xl group overflow-hidden relative"
//             whileHover={{ scale: 1.05, y: -3 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <span className="relative z-10">Start Your Project</span>
//             <motion.div
//               className="absolute inset-0 bg-white"
//               initial={{ scale: 0, opacity: 0 }}
//               whileHover={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.3 }}
//               style={{ borderRadius: "9999px" }}
//             />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;
"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MdOutlineDesignServices,
  MdWeb,
  MdPhoneAndroid,
  MdSearch,
  MdOutlineCampaign,
} from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiBriefcase, FiClipboard } from "react-icons/fi";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "SEO Optimization",
      description:
        "Boost visibility and rank higher on search engines with our proven SEO strategies.",
      icon: <MdSearch size={36} />,
      features: ["Keyword Research", "Technical SEO", "Content Optimization"],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Social Media Marketing",
      description:
        "Engage and grow your audience across all major social platforms.",
      icon: <FaInstagram size={36} />,
      features: ["Content Strategy", "Community Management", "Paid Campaigns"],
      color: "from-pink-500 to-purple-600",
    },
    {
      title: "Paid Advertising",
      description:
        "Maximize ROI with targeted PPC and paid advertising campaigns.",
      icon: <MdOutlineCampaign size={36} />,
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization"],
      color: "from-green-500 to-green-600",
    },
    {
      title: "Brand Identity",
      description:
        "Build a strong, memorable brand identity that resonates with your audience.",
      icon: <FiBriefcase size={36} />,
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Website Development",
      description:
        "Create responsive, user-friendly websites that convert visitors into customers.",
      icon: <MdWeb size={36} />,
      features: ["Responsive Design", "E-commerce", "CMS Integration"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "App Development",
      description:
        "Custom mobile applications that enhance user engagement and drive growth.",
      icon: <MdPhoneAndroid size={36} />,
      features: ["iOS & Android", "Cross-platform", "UI/UX Design"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Graphic Design",
      description:
        "Eye-catching visuals and designs that capture your brand essence perfectly.",
      icon: <MdOutlineDesignServices size={36} />,
      features: ["Logo Design", "Print Design", "Digital Assets"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Content Marketing",
      description:
        "Strategic content creation that drives engagement and builds authority.",
      icon: <FiClipboard size={36} />,
      features: ["Blog Writing", "Video Content", "Social Posts"],
      color: "from-indigo-500 to-blue-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="py-24 bg-white text-black relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-white/95 to-white/90"></div>
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-[#FFA238]/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(112,56,255,0.1)" }}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-black">
            Our Digital Marketing{" "}
            <span className="bg-gradient-to-r from-[#FFA238] to-[#FFA238]/70 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to help your business grow
            and succeed in today's competitive digital landscape.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-gray-200 hover:border-[#FFA238]/50 transition-all duration-500 hover:bg-white/95 relative overflow-hidden h-full shadow-lg">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                ></div>

                {/* Floating Icon Background */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-[#FFA238]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"
                  whileHover={{ scale: 1.5, rotate: 180 }}
                />

                <motion.div
                  className="text-[#FFA238] mb-6 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-4 relative z-10 group-hover:text-[#FFA238] transition-colors duration-300 text-black">
                  {service.title}
                </h3>

                <p className="text-gray-700 mb-6 relative z-10 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="text-sm text-gray-600 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                      }
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#FFA238] rounded-full mr-2"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FFA238]/0 via-[#FFA238]/20 to-[#FFA238]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-[#FFA238] to-[#FFA238]/80 text-[#241D49] font-bold py-4 px-10 rounded-full text-lg shadow-xl group overflow-hidden relative"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Start Your Project</span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ borderRadius: "9999px" }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
