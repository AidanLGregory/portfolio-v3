import React from "react";
import skill from "../data/skill";
import SkillItem from "./SkillItem";
import Title from "./Title";

function Skills() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1">
                <Title>Skills</Title>
                <p>Here are the different technologies that I have experience in:</p>
                <div className="grid grid-cols-4">
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