"use client";
import React,{ useState, useRef } from "react"
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Sand Simulation",
        description: "A Project that simulates sand using Cellular Automata principles",
        image: "/images/projects/sand-simulation.png",
        tag: ["All", "Web", "JavaScript"],
        gitUrl: "https://github.com/DaniloNicacio/Sand-Simulation",
        previewUrl: "https://sandsimulation.danilonicacio.dev/"
    },
    {
        id: 2,
        title: "Discord Music Bot",
        description: "A Discord bot that plays songs from YouTube",
        image: "/images/projects/discord-bot.png",
        tag: ["All", "Web", "Python"],
        gitUrl: "https://github.com/DaniloNicacio/discord-bot",
        previewUrl: "https://github.com/DaniloNicacio/discord-bot"
    },
    {
        id: 3,
        title: "CuteBotYTD",
        description: "A Discord bot that download videos and send it to the user",
        image: "/images/projects/telegram-bot.png",
        tag: ["All", "Python"],
        gitUrl: "https://github.com/DaniloNicacio/cutebotytd",
        previewUrl: "https://t.me/cuteytb_bot"
    },
    {
        id: 4,
        title: "Work in Progress",
        description: "This is just a placeholder",
        image: "/images/projects/work-in-progress.png",
        tag: ["All", "Web", "JavaScript","Python"],
        gitUrl: "/",
        previewUrl: "/"
    }
]

const ProjectsSection = () =>{
    const [tag, setTag] = useState("All");
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const handleTagChange = (newTag) =>{
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
     )
    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y:0, opacity: 1},
    }
    return(
        <section id="projects">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="JavaScript"
                    isSelected={tag === "JavaScript"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Python"
                    isSelected={tag === "Python"}
                />
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gab-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{duration: 0.3, delay: index * 0.4}}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            tags={project}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default ProjectsSection