import React from "react";

function SkillItem({ title, icon }) {
    return (
        <div>
            <img className="m-3" src={icon} />
            <h4 className="text-center p-2">{title}</h4>
        </div>
    );
}

export default SkillItem;