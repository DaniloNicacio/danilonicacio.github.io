import React from "react";
import Image from "next/image"

const AboutSection = () => {
    return <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.jpg" width={500} height={500}/>
            <div>
                <h2>
                    About Me
                    <p>
                        I am Full Stack Developer, graduating in Computer Science.
                        I have experience working with Python, JavaScript, TypeScript, AngularJs, Spring Boot, Docker, MySQL, Git, Google Cloud and Selenium.
                        Currently Intern in General Command of the Military Police of the State of Amazonas - DTI as a developer in the field of data extraction,
                        process automation and BackEnd maintenance.
                        I am currently seeking new experiences and job opportunities
                    </p>
                </h2>
            </div>
        </div>
    </section>;
};

export default AboutSection;