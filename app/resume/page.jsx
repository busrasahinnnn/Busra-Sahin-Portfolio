"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Busra Sahin",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 647 606 82 51",
    },
    {
        fieldName: "Experience",
        fieldValue: "2 Years",
      },
    {
        fieldName: "E-mail",
        fieldValue: "sahinnbusraa41@gmail.com",
      },
    {
      fieldName: "Skype",
      fieldValue: "sahinnbusraa41",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Turkish/Canadian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Turkish",
    },
  ],
};

// experience data
const experience = {
  icon: "/public/assets/resume/resume.pdf",
  title: "My experience",
  description:
    "As a UI/UX Designer for the Foteza App, I worked on a dynamic project aimed at connecting local videographers and photographers with clients. I designed user interfaces using Figma and Adobe XD, ensuring a clean and engaging user experience. My role also included contributing to the front-end development using HTML, CSS, React.js, and Node.js. Collaborating within a Scrum team, I participated in agile sprints and continuous improvement processes, working closely with developers and product managers. This experience strengthened my skills in team communication, iterative design, and development workflows. The Foteza App has grown into a trusted media platform, and I’m proud to have played a role in making it user-friendly and impactful.",
  items: [
    {
      company: "Foteza",
      position: "UI/UX Designer",
      duration: "October 2024-Present",
    },
  ],
};

// education data
const education = {
  icon: "/public/assets/resume/diploma.pdf",
  title: "My education",
  description:
    "I am currently pursuing a Diploma in Computer Programming at Humber College in Toronto, Canada (May 2024 – August 2025), where I am deepening my skills in web development, database design, and object-oriented programming. My coursework includes web and mobile development using JavaScript, React, and Node.js, as well as backend programming with Java and Python, and database technologies like Oracle and SQL. Before transitioning into the tech field, I completed a Salesforce Developer & Admin Bootcamp at SFdify (January 2021 – June 2021), where I gained hands-on experience with Apex, Visualforce, Lightning Components, and automation tools such as Flows and Process Builder. This intensive program strengthened my foundation in cloud-based platforms and CRM solutions. Earlier in my academic journey, I earned a Bachelor’s Degree in Primary School Education from the University of Kocaeli in Türkiye. This background has given me strong interpersonal and communication skills, a structured approach to problem-solving, and a lifelong passion for learning—qualities that I now bring into my work as a developer.",
  items: [
    {
      institution: "Humber College",
      degree: "Computer Programming",
      duration: "May 2024-August 2025",
    },
    {
      institution: "SFDIFY Salesforce Bootcamp",
      degree: "Salesforce Developer & Admin",
      duration: "January 2021-June 2021",
    },
    {
      institution: "University of Kocaeli",
      degree: "Primary School Education",
      duration: "September 2010-August 2014",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "I bring a well-rounded skill set that combines both technical and interpersonal strengths. I have hands-on experience in full-stack web development using technologies like JavaScript, React.js, Node.js, HTML, and CSS, along with backend languages such as Java and Python. I’m also proficient in working with databases like Oracle and SQL, and I’m comfortable using tools like GitHub, Figma, and Adobe XD for version control and design. Thanks to my background in education, I’ve developed strong communication, collaboration, and problem-solving skills. I am highly detail-oriented, eager to learn new technologies, and passionate about building clean, user-focused applications that create real value.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
        icon: <FaJs />,
        name: "JavaScript",
      },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
   
  ],
};

// Resume Component
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{experience.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {experience.description}
    </p>

    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {experience.items.map((item, index) => {
          return (
            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
              <div className="flex items-center gap-3">
                {/* dot */}
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.company}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  </div>
</TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{education.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {education.description}
    </p>

    <ScrollArea className="h-[400px]">
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {education.items.map((item, index) => {
          return (
            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
              <span className="text-accent">{item.degree}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
              <div className="flex items-center gap-3">
                {/* dot */}
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.institution}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  </div>
</TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <div>
                    <div>
                       <h3 className="text-4xl font-bold mb-4">{skills.title}</h3>
                       <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    </div>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.skillList.map((skill, index) => {
                            return <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </li>;
                        })}
                    </ul>
                </div>
              
            </TabsContent>
            {/* about me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
  {about.info.map((item, index) => {
    return (
      <li
        key={index}
        className="flex items-start gap-2 xl:gap-4"
      >
        <span className="text-white/60 w-[120px] shrink-0">{item.fieldName}:</span>
        <span className="text-white text-sm break-words">{item.fieldValue}</span>
      </li>
    );
  })}
</ul>


              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
