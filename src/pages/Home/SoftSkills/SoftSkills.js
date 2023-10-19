import React, { useState } from 'react';
import { Divider, List } from 'antd';
import './SoftSkills.css';


const data = [
    "Problem-Solving :  Proficiency in finding efficient solutions to complex issues.",
    "Critical Thinking : The ability to analyze and evaluate technical information and make informed decisions.",
    "Teamwork : The capability to work effectively in a team, contributing to project success.",
    "Teaching and Sharing: Willingness to share knowledge and mentor others in the field.",
    "Quick Learning : Adaptability and the ability to quickly grasp new technologies and concepts.",
    "Responsibility : A commitment to delivering work on time and to a high standard.",
    "Adaptability and Flexibility : Readiness to adjust to project and technology changes.",
    "Time Management : Effective organization and multitasking skills.",
    "Creativity : Innovative thinking to devise unique solutions and program developments.",
    "Ethical Practices : Adherence to ethical and privacy principles when dealing with sensitive data.",
];

const SoftSkill = () => {
    return (
        <div id="SoftSkillId">
            <Divider orientation="left"></Divider>
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
        </div >
    );
}

export default SoftSkill;