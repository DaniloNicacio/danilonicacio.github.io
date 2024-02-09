"use client";
import React from "react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

const HeroSection = () =>{
    return (
        <section className="lg:py-16 lg:mt-20">
            {/* Presentation Setup */}
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial= {{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-300">
                            Hello, I&apos;m{" "}
                        </span>
                        <br/>
                        <TypeAnimation
                            sequence={[
                                'FullStack Developer',
                                1000,
                                'Mobile Developer',
                                1000,
                                'Game Developer',
                                1000,
                                'Danilo',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={0}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        I&apos;m just a placeholder :D
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
                            Hire Me
                        </button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br hover:bg-slate-800 text-white border mt-3">
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                        </button>
                    </div>
                </motion.div>
                {/* Profile Picture Setup */}
                <motion.div
                    initial= {{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                    className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px]  lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero-image.jpg"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;