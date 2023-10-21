import React, { useState } from 'react';
import { Card, Space, Modal, Typography, Image } from 'antd';
import Skill from "./Skills/Skills.js"
import SoftSkill from "./SoftSkills/SoftSkills.js"
import Contact from "./Contact/Contact.js";
import './Home.css';
import Img from '../../imgs/330933890_725648152229997_3794307667321601845_n.jpg';

const { Text } = Typography;
let lstResponsibilities = [{
  nId: 1,
  sDate: "January 2023 - Present",
  sCompany: "Bright Expert Co.,Ltd.",
  sOnsite: "Thai Beverage Public Co.,Ltd.",
  Position: ".NET Developer",
  sDetail: "<h3>API and Back-End Development</h3><p>Designed and developed robust API systems and back-end components for web applications. Utilized Swagger to create user-friendly API documentation.</p><h3>System Analysis and Design</h3><p>Demonstrated the ability to analyze and design computer systems effectively, fulfilling assignments from supervisors. Proficient in project-specific analytical tasks and providing innovative solutions for efficient system analysis and design.</p><h3>Error Resolution</h3><p>Proficient in identifying and rectifying program usage errors, ensuring smooth operation of systems. Developed strategies for error correction and prevention, reporting findings and solutions to project teams and management.</p>",
}, {
  nId: 2,
  sDate: "February 2022 - December 2022",
  sCompany: "Tech Soft Holding Co.,Ltd",
  sOnsite: "Easy Buy Public Co.,Ltd.",
  Position: "FullStack Developer",
  sDetail: "<h3>Develop and Design Full Stack Software</h3><p>Develop and design full-stack software for both front-end and back-end components, ensuring a comprehensive understanding of both aspects.</p><h3>Develop Programs Using C#.Net (Web MVC)</h3><p>Develop programs using C#.Net with a focus on Web MVC to create web applications.</p><h3>Collect and Analyze Business Requirements to Design and Develop the System</h3><p>Gather and analyze business needs to effectively design and develop systems in alignment with the specified requirements.</p>"
}, {
  nId: 3,
  sDate: "July 2020 - February 2022",
  sCompany: "Softthai Application Co., Ltd.",
  sOnsite: "",
  Position: "FullStack Developer",
  sDetail: "<h3>Develop and Design Full-Stack Software for Both Front-End and Back-End</h3><p>In this role, I was responsible for developing and designing comprehensive software solutions that covered both the front-end and back-end components. This included a deep understanding of both aspects to ensure seamless integration.</p><h3>Collaborate with Team Leader in Estimating Project Efforts, Developing Project Plans and Schedules, and Executing Tasks According to the Established Plan</h3><p>I actively participated in collaboration with the team leader to estimate project efforts, create project plans, define timelines, and diligently execute tasks according to the outlined project plan.</p><h3>Test Programs by Creating Sample Data and Systematically Evaluating Their Performance, Mimicking Real-World Scenarios</h3><p>Testing was a crucial part of my role. I developed and implemented comprehensive testing procedures by generating sample data and meticulously evaluating the program's functionality step by step to simulate real-world usage.</p><h3>Build and Deploy Applications</h3><p>My responsibilities extended to developing and deploying applications, ensuring they were ready for production use.</p>"
}, {
  nId: 4,
  sDate: "December 2019 - June 2020",
  sCompany: "Betimes Solutions Co.,Ltd",
  sOnsite: "",
  Position: "FullStack Developer",
  sDetail: " <h3>Full-Stack Software Development and Design</h3><p>Proficient in developing and designing comprehensive full-stack software solutions, encompassing both front-end and back-end components. This role demands a deep understanding of both domains to ensure seamless integration.</p><h3>Development Tools Mastery</h3><p>Expertise in a range of development tools and technologies, including .NET, C#, HTML, DevExpress, MS SQL, and SQL Command.</p>"
}];

let lstEducation = [
  {
    nId: 1,
    sDate: "2014 - 2019",
    sDetail: "Bachelor of Computer Engineering | Industrial Technology | SuanSunandhaRaiabhat University, Thailand",
  }, {
    nId: 2,
    sDate: "2010 - 2013",
    sDetail: "High School Education | Science (with a focus on Mathematics) | Nonsiwitthaya School, Thailand",
  }, {
    nId: 3,
    sDate: "2006 - 2009",
    sDetail: "Junior High School Education | Nonsiwitthaya School, Thailand",
  }
];
const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const showModal = (Data) => {
    setModalData(Data);
    setIsModalOpen(true);
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const renderCardResponsibilities = (val) => (
    <Card hoverable key={"Card" + val.nId} title={val.sDate} onClick={() => showModal(val.sDetail)} extra={<a onClick={() => showModal(val.sDetail)}>Job Description</a>} style={{ width: 400, height: 250 }}>
      {/* <Text code>Company : {val.sCompany}</Text> */}
      <p>Company : {val.sCompany}</p>
      {val.sOnsite && <p>Onsite : {val.sOnsite}</p>}
      <p>Position : {val.Position}</p>
    </Card>
  );

  const renderCardEducations = (val) => (
    <Card key={"Educations" + val.nId} title={val.sDate} size="small">
      <p>{val.sDetail}</p>
    </Card>
  );

  return (
    <div id="Homeid">
      <div class="container">
        <div class="row">
          <div class="column-66">
            <h1 class="xlarge-font"><b>Jakkit Wongtewee</b></h1>
            <h1 class="large-font" style={{ color: "MediumSeaGreen" }}><b>About</b></h1>
            <p style={{ lineHeight: "2", wordSpacing: "0.1rem" }}><span style={{ font: "36px" }}>I am a programmer with experience in web application development using .NET.</span> understand how to create and maintain highly efficient and industry-standard systems. I aim to leverage my knowledge and expertise to add value to the team and organization and am enthusiastic about continuous learning and self-improvement. I am ready to collaborate with a team that aspires to succeed in web system development projects.</p>
          </div>
          <div class="column-33">
            <Image width={"80%"} src={Img} />
          </div>
        </div>
      </div>

      <div class="container" style={{ backgroundColor: "#f1f1f1" }} >
        <div class="row">
          <div class="column-100">
            <h1 class="xlarge-font"><b>Working Experience</b></h1>
            <Space direction="Horizontal" size={16}>
              {lstResponsibilities.map(renderCardResponsibilities)}
            </Space>
          </div>
        </div>
      </div>

      <div class="container" >
        <div class="row">
          <div class="column-33">
            <img src="https://freepngimg.com/thumb/education/3-2-education-png-clipart.png" alt="App" width="500" height="471" />
          </div>
          <div class="column-66">
            <h1 class="xlarge-font"><b>Education</b></h1>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              {lstEducation.map(renderCardEducations)}
            </Space>
          </div>
        </div>
      </div>

      <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
        <div class="row">
          <div class="column-100" style={{ textAlign: 'center' }}>
            <h1 class="xlarge-font"><b>Technical Skills</b></h1>
            <Skill></Skill>
          </div>
          {/* <div class="column-50" style={{ textAlign: 'center' }}>
            <h1 class="xlarge-font"><b>Soft Skills</b></h1>
            <SoftSkill></SoftSkill>
          </div> */}
        </div>
      </div>

      <div class="container" >
        <div class="row">
          <div class="column-100" style={{ textAlign: 'center' }}>
            <h1 class="xlarge-font"><b>Soft Skills</b></h1>
            <SoftSkill></SoftSkill>
          </div>
        </div>
      </div>

      <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
        <div class="row">
          <div class="column-100" style={{ textAlign: 'center' }}>
            <h1 class="xlarge-font"><b>Contact</b></h1>
            <Contact></Contact>

          </div>
        </div>
      </div>
      <Modal title={<h2>Job Description</h2>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {
          modalData && (
            <div dangerouslySetInnerHTML={{ __html: modalData }} />
          )
        }
      </Modal>
    </div >
  );
}

export default Home;