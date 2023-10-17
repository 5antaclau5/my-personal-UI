import React, { useState } from 'react';
import { Card, Space, Modal, Typography, Row, Col } from 'antd';
import './Skills.css';

const Skill = () => {
    return (
        <div id="SkillId">
            <div class="card">
                <div class="tools">
                    <div class="circle">
                        <span class="red box"></span>
                    </div>
                    <div class="circle">
                        <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                        <span class="green box"></span>
                    </div>
                </div>
                <div class="card__content">
                </div>
            </div>
        </div>
    );
}

export default Skill;