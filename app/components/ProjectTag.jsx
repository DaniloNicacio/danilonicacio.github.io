import React from "react"

const ProjectTag = ({name, onClick, isSelected}) =>{
    const buttonStyles = isSelected ? "text-white border-primary-500" : "border-slate-600 hover:border-white"
    return(
        <button className={`${buttonStyles} btn sm:btn-md btn-outline cursor-pointer`}
        onClick={() => onClick(name)}>
            {name}
        </button>
    )
}

export default ProjectTag