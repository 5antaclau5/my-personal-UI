import React, { useState } from 'react';
import { Card, Space, Image } from 'antd';
import './Skills.css';
import ImgDotnet from '../../../imgs/NET_Core_Logo.svg.png';
import ImgSQL from '../../../imgs/MicrosoftTeams-image (1).png';
import ImgReact from '../../../imgs/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png';
import ImgAngular from '../../../imgs/png-transparent-angularjs-ruby-on-rails-typescript-web-application-icon-hacker-angle-triangle-logo.png';
import ImgCsharp from '../../../imgs/c-sharp-c-logo-02F17714BA-seeklogo.com.png';
import Imgtypescript from '../../../imgs/typescript-logo-B29A3F462D-seeklogo.com.png';
import ImgJs from '../../../imgs/JavaScript-logo.png';
import ImgHTML from '../../../imgs/174854.png'
import ImgCss from '../../../imgs/CSS3_logo.svg.png';
import ImgjQuery from '../../../imgs/png-transparent-jquery-hd-logo.png';


const { Meta } = Card;

const Skill = () => {
    return (
        <div id="SkillId">
            <Space direction="Horizontal" size={16}>
                <img width={100} height={100} alt="example" src={ImgDotnet} />
                <img width={100} height={100} alt="example" src={ImgCsharp} />
                <img width={100} height={100} alt="example" src={ImgSQL} />
                <img width={100} height={100} alt="example" src={ImgReact} />
                <img width={100} height={100} alt="example" src={ImgAngular} />
                <img width={100} height={100} alt="example" src={Imgtypescript} />
                <img width={100} height={100} alt="example" src={ImgJs} />
                <img width={100} height={100} alt="example" src={ImgHTML} />
                <img width={100} height={100} alt="example" src={ImgCss} />
                <img width={100} height={100} alt="example" src={ImgjQuery} />
            </Space>
        </div >
    );
}

export default Skill;