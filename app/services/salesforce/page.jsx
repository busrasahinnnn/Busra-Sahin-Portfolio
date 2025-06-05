"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Salesforce = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 text-center">

          <h1 className="text-4xl xl:text-5xl font-bold text-accent">
            Salesforce Development
          </h1>

          <p className="text-white/80 text-lg">
          I build and customize Salesforce applications using Flows, and create custom objects, master-detail relationships, and formula fields. 
          </p>

          <p className="text-white/70 text-base">
          I’m actively growing my skills on Trailhead and staying current with new Salesforce features.
          </p>

          <Link
            href="https://www.salesforce.com/trailblazer/busrasahin" 
            target="_blank"
            className="inline-block bg-accent text-primary font-semibold py-3 px-6 rounded-md hover:scale-105 transition duration-300"
          >
            View My Trailhead Profile
          </Link>

        </div>
      </div>
    </motion.section>
  );
};

export default Salesforce;
