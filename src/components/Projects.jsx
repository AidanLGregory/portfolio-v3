import React from "react";
import ProjectItem from "./ProjectItem";
import project from "../data/project";

function Projects() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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