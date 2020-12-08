import React from 'react';
import { skills } from "./skills.data";

const Skill = ({ name }) => {
    return <span className="skill">{name}</span>
}

export const Skills = () => {
    return (
        <section id="skills" className='skills'>
            { skills.map(s => <Skill name={s.name} /> )}
        </section>
    );
};

export default Skills;
