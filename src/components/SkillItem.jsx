import React from "react";

function SkillItem({ title, icon }) {
    return (
        <div>
            <h4 className="text-center p-3">{title}</h4>
            <img className="m-3" src={icon} />
        </div>
    );
}

export default SkillItem;