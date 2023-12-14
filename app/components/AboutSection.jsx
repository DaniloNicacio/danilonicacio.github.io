"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image"
import TabButton from "@/app/components/TabButton";

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
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Computer Science Bachelor’s Degree - Graduating</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS Academy Cloud Foundations - Amazon Web Services (AWS)</li>
                <li>Scrum Fundamentals Certified - SCRUMstudy</li>
                <li>EF SET English Certificate 56/100 (B2 Upper Intermediate) - EF SET</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }

    const tabs = ["skills", "education", "certifications"];

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/about-image.jpg" width={500} height={500}/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">
                        I am Full Stack Developer, graduating in Computer Science.
                        I have experience working with Python, JavaScript, TypeScript, AngularJs, Spring Boot, Docker, MySQL, Git, Google Cloud and Selenium.
                        Currently Intern in General Command of the Military Police of the State of Amazonas - DTI as a developer in the field of data extraction,
                        process automation and BackEnd maintenance.
                        I am currently seeking new experiences and job opportunities
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        {tabs.map((tabId) => (
                            <TabButton
                                key={tabId}
                                selectTab={() => handleTabChange(tabId)}
                                active={tab === tabId}
                            >
                                {" "}
                                {tabId.charAt(0).toUpperCase() + tabId.slice(1)}{" "}
                            </TabButton>
                        ))}
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id ===tab).content}</div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
