import React from "react"
import ProjectCard from "@/app/components/ProjectCard";

const projectsData = [
    {
        id: 1,
        title: "Work in Progress",
        description: "This is just a placeholder",
        image: "/images/projects/work-in-progress.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    }
]

const ProjectsSection = () =>{
    return(
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <button className="rounded-full border-2 border-red-500 px-6 py-3 text-xl cursor-pointer">
                    All
                </button>
                <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
                    Web
                </button>
            </div>
            <div className="grid md:grid-cols-3 gab-8 md:gap-12">
                {projectsData.map((project) => (
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