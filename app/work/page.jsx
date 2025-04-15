"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// Project data
const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Foteza App UI/UX Design',
    description: "Foteza is a creative collaboration platform. I designed its high-fidelity UI in Figma, focusing on a smooth user experience and clean visual hierarchy to help businesses connect with creatives like videographers and photographers.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
    ],
    image: '/assets/work/photo1.png',
    live: "https://foteza.app/",
    github: "https://github.com",
  },  
  {
    num: '02',
    category: 'fullstack',
    title: 'Sweet Dreams Cookie Shop',
    description:
      'A full-stack e-commerce app for a cookie shop where users can browse cookie varieties, select pack sizes, add to cart, and place orders. Built using React.js for the frontend, Node.js for the backend, and MongoDB for the database.',
    stack: [
      { name: 'React.js' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
    ],
    image: '/assets/work/photo2.png',
    live: 'https://yourcookiesshop.com',
    github: 'https://github.com/yourusername/sweet-dreams-app',
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: {delay: 2.4, duration:0.4, ease:"easeIn"}, }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* LEFT SIDE – Text Content */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col justify-between order-2 xl:order-none">
            {/* Number */}
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>

            {/* Category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} project
            </h2>

            {/* Description */}
            <p className="text-white/60">{project.description}</p>

            {/* Stack */}
            <ul className="flex gap-2 flex-wrap">
              {project.stack.map((item, index) => (
                <li key={index} className="text-xl text-accent">
                  {item.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>

            {/* Border */}
            <div className="border border-white/20"></div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              {/* Live Project */}
              <Link href={project.live} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              {/* GitHub */}
              <Link href={project.github} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE – Image Carousel */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
