"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import MagicButton from "./MagicButton";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Find Your Nanny",
    description: "Programmer and Product Manager",
    image: "/findyournanny.png",
    tag: ["All", "Developer"],
    previewUrl: "https://github.com/tasyaswantara/FindYourNanny",
  },
  {
    id: 2,
    title: "Mofier",
    description: "Frontend Developer and UI Design",
    image: "mofier.png",
    tag: ["All", "Developer"],
    previewUrl: "https://mofierweb.vercel.app/",
  },
  {
    id: 3,
    title: "ICN Official Developersite",
    description: "Frontend Developer and UI Design",
    image: "icn.png",
    tag: ["All", "Developer"],
    previewUrl: "https://icn-filkom.ub.ac.id/",
  },
  {
    id: 4,
    title: "Looker",
    description: "Project 4 description",
    image: "looker.png",
    tag: ["All", "Developer"],
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Jagawana",
    description: "Programmer and Product Manager",
    image: "jagawana.png",
    tag: ["All", "Network"],
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Omnet++ Forest Fire Detection",
    description: "Programmer",
    image: "omnet.png",
    tag: ["All", "Network"],
    previewUrl: "https://github.com/tiaracalistaka/forestfiredetection-omnetpp",
  },
  {
    id: 7,
    title: "Jelajah KBS",
    description: "Product Manager",
    image: "kbs.png",
    tag: ["All", "Developer"],
    previewUrl: "https://03-power-rangers-jelajahkbs.vercel.app",
  },
  {
    id: 8,
    title: "FLEX",
    description: "Product Manager and UI Designer",
    image: "flex.png",
    tag: ["All", "Developer"],
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Water Potability Detection",
    description: "IoT Developer and Programmer",
    image: "wp.png",
    tag: ["All", "Network"],
    previewUrl: "https://github.com/Lab-ICN/water-potability-iot-node",
  },
  {
    id: 10,
    title: "Drivo",
    description: "Product Manager ",
    image: "drivo.png",
    tag: ["All", "Developer"],
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Tangkis",
    description: "Product Manager and UI Designer",
    image: "tangkis.png",
    tag: ["All", "Developer"],
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Mini Internet Project",
    description: "Programmer",
    image: "minet.png",
    tag: ["All", "Network"],
    previewUrl: "/",
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-dark_purple mt-4 mb-8 lg:mb-0">
        <span className="text-main_purple font-bold">Unveiling</span> My
        Projects
      </h2>
      <div className="text-main_purple flex flex-row justify-center items-center gap-3 mb-4">
        <MagicButton
          title="All"
          position="left"
          handleClick={() => handleTagChange("All")}
        />
        <MagicButton
          title="Developer"
          position="left"
          handleClick={() => handleTagChange("Developer")}
        />
        <MagicButton
          title="Network"
          position="left"
          handleClick={() => handleTagChange("Network")}
          otherClasses={
            tag === "Network"
              ? "bg-main_purple text-white"
              : "bg-white text-main_purple"
          }
        />
      </div>

      <ul
        ref={ref}
        className="grid sm:grid-cols-2 md:grid-cols-3 mx-8 md:mx-0 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
