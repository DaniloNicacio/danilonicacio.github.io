"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

const HeroSection = () => {
    const phrases = [
        "I'm just a placeholder :D",
        "1+1 = 2",
        "It is a mistake to think you can solve any major problems just with potatoes.",
        "This is a random pharse",
        "console.log(\"Why this isn't working?\")",
        "Hello World",
        "Error 404",
        "Oh, hi! I didn't see you there",
        "Sometimes i think, but then i forget"
    ]

    const [randomPhrase, setRandomPhrase] = useState("")

    const getRandomPhrase = () => {
        const randomIndex = Math.floor(Math.random() * phrases.length)
        return phrases[randomIndex]
    }

    useEffect(() => {
        const random = getRandomPhrase()
        setRandomPhrase(random)
    }, [])

    return (
        <section className="lg:py-16 lg:mt-20">
            {/* Presentation Setup */}
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-300">
              Hello, I&apos;m{" "}
            </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'FullStack Developer',
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
                        &quot;{randomPhrase}&quot;
                    </p>
                    <div>
                        <button className="px-6 py-3 btn sm:btn-md mr-4 btn-error text-black">
                            Hire Me
                        </button>
                        <button className="px-1 py-1 btn sm:btn-md btn-outline mt-3">
                            <span className="border-slate-600 hover:border-white">Download CV</span>
                        </button>
                    </div>
                </motion.div>
                {/* Profile Picture Setup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
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
    )
}

export default HeroSection
