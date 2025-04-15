"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const UIUXPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.5 },
      }}
      className="py-12 px-4 xl:px-0 container mx-auto"
    >
      <h1 className="text-4xl xl:text-5xl font-bold text-accent mb-4">
        UI/UX Design Projects
      </h1>
      <p className="text-white/70 text-lg mb-12 max-w-2xl">
        I design smooth and functional digital interfaces using Figma. Below are two UI/UX projects that demonstrate my ability to deliver engaging and user-friendly designs.
      </p>

      {/* Project 1 - Foteza App */}
      {/* Project 1 - Foteza App */}
<div className="mb-20">
  <h2 className="text-2xl font-semibold text-white mb-2">Foteza: Creative Collaboration App</h2>
  <p className="text-white/60 mb-6">
    Foteza is the first-ever app designed to streamline how businesses collaborate with professional creatives. As the lead UI/UX designer, I created the complete design using Figma — from landing pages and onboarding flows to profile management and project booking screens. The app is focused on delivering a clean, modern experience tailored for photographers, videographers, and clients seeking creative services.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <Image
      src="/assets/work/foteza1.png"
      alt="Foteza landing page"
      width={600}
      height={400}
      className="rounded-lg"
    />
    <Image
      src="/assets/work/foteza2.png"
      alt="Foteza creative dashboard"
      width={600}
      height={400}
      className="rounded-lg"
    />
  </div>
</div>

      {/* Project 2 - Bookstore App */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold text-white mb-2">Bookstore UI</h2>
        <p className="text-white/60 mb-6">
          This bookstore web app UI was designed for a project that showcases clean e-commerce layouts. I created user-friendly screens for browsing, filtering, and purchasing books. The design focuses on readability, navigation clarity, and smooth interaction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="/assets/work/bookstore1.png"
            alt="Bookstore homepage UI"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <Image
            src="/assets/work/bookstore2.png"
            alt="Book details or cart"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default UIUXPage;
