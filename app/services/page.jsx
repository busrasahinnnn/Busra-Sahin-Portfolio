"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
      num: "01",
      title: "UI/UX Design",
      description:
        "I design intuitive and engaging user interfaces using tools like Figma and Adobe XD, ensuring a smooth user experience across web platforms.",
      href: "/services/ui-ux",
    },
    {
      num: "02",
      title: "Web Development",
      description:
        "I build responsive and dynamic websites using modern technologies like React.js, Next.js, Node.js, and Tailwind CSS.",
      href: "/services/web-development",
    },
    {
      num: "03",
      title: "Database & Backend",
      description:
        "I implement and manage robust backend systems and databases using Oracle, SQL, and Node.js for scalable and efficient data management.",
      href: "/services/backend",
    },
    {
      num: "04",
      title: "Salesforce Development",
      description:
        "I develop and customize Salesforce solutions including Apex, Lightning Components, and automation tools to support business CRM needs.",
      href: "/services/salesforce",
    },
  ];
  

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* Top Row: Number + Icon */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white 
                  group-hover:bg-accent transition-all duration-500 flex justify-center 
                  items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* description */}
              <p className="text-white/60">
                {service.description}
              </p>

              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
