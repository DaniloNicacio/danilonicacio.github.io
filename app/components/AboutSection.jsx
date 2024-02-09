"use client"
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "@/app/components/TabButton";
import { motion, AnimatePresence } from "framer-motion";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>Data Extraction</li>
                <li>Selenium</li>
                <li>MySQL</li>
                <li>C++</li>
                <li>AngularJS</li>
                <li>Spring Boot</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Computer Science Bachelor’s Degree - Graduating</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>
                    AWS Academy Cloud Foundations - Amazon Web Services (AWS)
                </li>
                <li>Scrum Fundamentals Certified - SCRUMstudy</li>
                <li>
                    EF SET English Certificate 56/100 (B2 Upper Intermediate) - EF SET
                </li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");

    const handleTabChange = (id) => {
        setTab(id);
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.jpg" width={500} height={500} alt="profile-picture" />
                <motion.div
                    initial= {{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">
                        I am Full Stack Developer, graduating in Computer Science.
                        I have experience working with Python, JavaScript, TypeScript, AngularJs, Spring Boot, Docker, MySQL, Git, Google Cloud and Selenium.
                        Currently Intern in General Command of the Military Police of the State of Amazonas - DTI as a developer in the field of data extraction,
                        process automation and BackEnd maintenance.
                        I am currently seeking new experiences and job opportunities
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        {TAB_DATA.map((tabItem) => (
                            <TabButton
                                key={tabItem.id}
                                selectTab={() => handleTabChange(tabItem.id)}
                                active={tab === tabItem.id}
                            >
                                {tabItem.title}
                            </TabButton>
                        ))}
                    </div>
                    <div className="mt-8 h-80 overflow-y-auto">
                        <AnimatePresence>
                            {TAB_DATA.map((tabItem) => (
                                <motion.div
                                    key={tabItem.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: tab === tabItem.id ? 1 : 0, scale: tab === tabItem.id ? 1 : 0.9 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ display: tab === tabItem.id ? "block" : "none" }}
                                >
                                    <div className="pl-4">
                                        {tabItem.content}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
