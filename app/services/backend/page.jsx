"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Backend = () => {
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
        <div className="max-w-5xl mx-auto flex flex-col gap-16">

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl xl:text-5xl font-bold text-accent">
              Database & Backend Projects
            </h1>
            <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
              I build scalable, efficient backend solutions using both MongoDB and Firebase. Here are two projects that demonstrate my experience.
            </p>
          </div>

          {/* SpaceX Launches App */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-accent">
              SpaceX Launches App
            </h2>
            <p className="text-white/70">
              This app fetches and displays real-time data about SpaceX launches. I used Firebase Firestore to manage and store dynamic launch data. The app demonstrates clean mobile UI and integration with live APIs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/assets/work/spacex1.png"
                alt="SpaceX App Screenshot 1"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <Image
                src="/assets/work/spacex2.png"
                alt="SpaceX App Screenshot 2"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Parking App */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-accent">
              Parking Management App
            </h2>
            <p className="text-white/70">
              A mobile app for managing parking records. I implemented MongoDB for storing user parking data and Firebase Authentication for secure login. The app supports full CRUD operations with a clean green-themed UI.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Image
                src="/assets/work/parking1.png"
                alt="Parking App Screenshot 1"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <Image
                src="/assets/work/parking2.png"
                alt="Parking App Screenshot 2"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Backend;
