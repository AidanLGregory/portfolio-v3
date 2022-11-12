import React from "react";
import ProjectItem from "./ProjectItem";
import project from "../data/project";
import Title from "./Title";

function Projects() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1">
                <Title>Projects</Title>
                <div className="grid grid-cols-3">
                    {/* Loops through the projects in the project data js file and creates a new project based on that */}
                    {project.map(project => (
                        <ProjectItem
                            imgUrl={project.imgUrl}
                            title={project.title}
                            stack={project.stack}
                            codeUrl={project.codeUrl}
                            linkUrl={project.linkUrl}
                            description={project.description}
                        />

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;