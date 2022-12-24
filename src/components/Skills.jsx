import React from "react";
import skill from "../data/skill";
import SkillItem from "./SkillItem";
import Title from "./Title";

function Skills() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center my-20">
            <div className="grid grid-cols-1 md:w-7/12">
                <Title>Skills</Title>
                <p>Here are the different technologies that I have experience in:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-5">
                    {skill.map(skill => (
                        <SkillItem
                            title={skill.title}
                            icon={skill.icon}
                        />

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;