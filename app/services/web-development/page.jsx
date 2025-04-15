"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WebDevelopmentPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.3, duration: 0.5, ease: "easeInOut" },
      }}
      className="py-12 px-4 xl:px-0"
    >
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-accent mb-6">
          Web Development
        </h1>
        <p className="text-white/80 text-lg mb-12 max-w-3xl">
          I build responsive and dynamic websites using modern technologies like
          <span className="text-accent font-medium"> React.js</span>,
          <span className="text-accent font-medium"> Next.js</span>, and
          <span className="text-accent font-medium"> Tailwind CSS</span>.
          My work emphasizes performance, user experience, and clean code.
        </p>

        {/* Project - Portfolio Website */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Personal Portfolio Website
          </h2>
          <p className="text-white/60 mb-6">
            This website was fully built with <span className="text-accent font-medium">Next.js</span>, styled with <span className="text-accent font-medium">Tailwind CSS</span>, and enhanced using <span className="text-accent font-medium">Framer Motion</span> animations.
            <br /><br />
            It features a modern, minimal design with smooth page transitions, responsive layout, and dynamic routing. It’s optimized for performance and built to present my UI/UX, web, and backend development work clearly and professionally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src="/assets/work/portfolio1.png"
              alt="Portfolio Home Page"
              width={600}
              height={400}
              className="rounded-xl border border-white/10"
            />
            <Image
              src="/assets/work/portfolio2.png"
              alt="Portfolio Contact Page"
              width={600}
              height={400}
              className="rounded-xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WebDevelopmentPage;
