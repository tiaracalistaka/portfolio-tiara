"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

type Tab = {
  title: string;
  id: string;
  content: JSX.Element;
};

const TAB_DATA: Tab[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML CSS JavaScript</li>
        <li>React NextJS </li>
        <li>Kotlin</li>
        <li>Node-RED</li>
        <li>GNS3</li>
        <li>Omnet++</li>
      </ul>
    ),
  },
  {
    title: "Organization",
    id: "organization",
    content: (
      <ul className="list-disc pl-2">
        <li>Core Member Information Centric Network Laboratory</li>
        <li>Cabinet's Advisor BEM FILKOM UB</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Operating the Internet SOI Asia</li>
        <li>Understanding the Internet SOI Asia</li>
        <li>APIE Online SOI Asia</li>
        <li>APIE E-Workshop SOI Asia</li>
        <li>Cybersecurity Fundamentals IBM SkillsBuild</li>
        <li>Project Management Fundamentals IBM SkillsBuild</li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-main_purple" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 mx-3 md:mx-0 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/profile.jpeg" width={500} height={500} alt="Profile" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl md:text-4xl font-bold text-dark_purple mt-4 md:mt-0 mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I am a{" "}
            <span className="text-dark_purple font-semibold">
              Frontend Developer
            </span>{" "}
            and{" "}
            <span className="text-dark_purple font-semibold">
              Network Engineer
            </span>{" "}
            with a passion for creating interactive and responsive web
            applications while ensuring robust and efficient network
            infrastructure. I have experience working with JavaScript, React,
            HTML, CSS, and Git for developing user-centric applications, as well
            as expertise in network technologies such as routing and switching,
            network security, and wireless networking.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("organization")}
              active={tab === "organization"}
            >
              Organization
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-3">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
