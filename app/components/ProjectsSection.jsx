"use client";
import {React, useState} from "react"
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";

const projectsData = [
    {
        id: 1,
        title: "Sand Simulation",
        description: "A Project that simulates sand using Cellular Automata principles",
        image: "/images/projects/sand-simulation.png",
        tag: ["All", "Web", "JavaScript"],
        gitUrl: "https://github.com/DaniloNicacio/Sand-Simulation",
        previewUrl: "https://danilonicacio.github.io/Sand-Simulation/"
    },
    {
        id: 2,
        title: "Work in Progress",
        description: "This is just a placeholder",
        image: "/images/projects/work-in-progress.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    }
]

const ProjectsSection = () =>{
    const [tag, setTag] = useState("All");
    const handleTagChange = (newTag) =>{
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
     )

    return(
        <>
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
            </div>
            <div className="grid md:grid-cols-3 gab-8 md:gap-12">
                {filteredProjects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    tags={project}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
            ))}
            </div>
        </>
    )
}

export default ProjectsSection