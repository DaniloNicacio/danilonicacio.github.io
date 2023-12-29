import React from "react"
import ProjectCard from "@/app/components/ProjectCard";

const projectsData = [
    {
        id: 1,
        title: "Work in Progress",
        description: "This is just a placeholder",
        image: "/images/projects/work-in-progress.png",
        tag: ["All", "Web"]
    }
]

const ProjectsSection = () =>{
    return(
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="grid md:grid-cols-3 gab-8 md:gap-12">
                {projectsData.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    tags={project}
                />
            ))}
            </div>
        </>
    )
}

export default ProjectsSection