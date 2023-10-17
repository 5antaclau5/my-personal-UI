import React, { useState } from 'react';
import { Card, Space, Modal } from 'antd';
import './Contact.css';

let lstResponsibilities = [{
  nId: 1,
  sDate: "January 2023 - Present",
  sCompany: "Bright Expert Co.,Ltd.",
  sOnsite: "Thai Beverage Public Co.,Ltd.",
  Position: ".NET Developer",
  sDetail: "<h2>API and Back-End Development:</h2><p>Designed and developed robust API systems and back-end components for web applications. Utilized Swagger to create user-friendly API documentation.</p><h2>System Analysis and Design:</h2><p>Demonstrated the ability to analyze and design computer systems effectively, fulfilling assignments from supervisors. Proficient in project-specific analytical tasks and providing innovative solutions for efficient system analysis and design.</p><h2>Error Resolution:</h2><p>Proficient in identifying and rectifying program usage errors, ensuring smooth operation of systems. Developed strategies for error correction and prevention, reporting findings and solutions to project teams and management.</p>",
}, {
  nId: 2,
  sDate: "February 2022 - December 2022",
  sCompany: "Tech Soft Holding Co.,Ltd",
  sOnsite: "Easy Buy Public Co.,Ltd.",
  Position: "FullStack Developer",
  sDetail: ""
}, {
  nId: 3,
  sDate: "July 2020 - February 2022",
  sCompany: "Softthai Application Co., Ltd.",
  sOnsite: "",
  Position: "FullStack Developer",
  sDetail: ""
}, {
  nId: 4,
  sDate: "December 2019 - June 2020",
  sCompany: "Betimes Solutions Co.,Ltd",
  sOnsite: "",
  Position: "FullStack Developer",
  sDetail: ""
}]

const Contact = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sDetail, setsDetail] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  }
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <div id="Contactid">
      <div style={{ textAlign: "center" }} >
        <h2>Responsive Zig Zag Layout Example</h2>
        <p>Resize the browser window to see the effect.</p>
      </div>

      <div class="container">
        <div class="row">
          <div class="column-66">
            <h1 class="xlarge-font"><b>Jakkit Wongtewee</b></h1>
            <h1 class="large-font" style={{ color: "MediumSeaGreen" }}><b>About</b></h1>
            <p><span style={{ font: "36px" }}>I am a programmer with experience in web application development using .NET.</span> understand how to create and maintain highly efficient and industry-standard systems. I aim to leverage my knowledge and expertise to add value to the team and organization and am enthusiastic about continuous learning and self-improvement. I am ready to collaborate with a team that aspires to succeed in web system development projects.</p>
            {/* <button class="button">Download Application</button> */}
          </div>
          <div class="column-33">
            <img src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-6/330933890_725648152229997_3794307667321601845_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHumAMb19CHglXLYoKYVs0d4qlq9j29Ak_iqWr2Pb0CT4t07fGVVEEu5nxvWboxybbVTibb-oKeRcrHh-yFrMaq&_nc_ohc=ID222PdqXbAAX-Z1CA6&_nc_ht=scontent.fbkk22-3.fna&oh=00_AfD0I-W3efyXN3K9s1j3ECiS-bQPO8SVf88KSsZVJigHeg&oe=653258E3" width="335" height="471" />
          </div>
        </div>
      </div>

      <div class="container" style={{ backgroundColor: "#f1f1f1" }} >
        <div class="row">
          <div class="column-100">
            <h1 class="xlarge-font"><b>Working Experience</b></h1>
            {/* <h1 class="large-font" style={{ color: "red" }}><b>Pixels, who?</b></h1> */}
            <Space direction="Horizontal" size={16}>
              {
                lstResponsibilities.map(v => {
                  return (<Card key={"Card" + v.nId} title={v.sDate} extra={<a onClick={showModal}>More</a>} style={{ width: 350 }}>
                    <p>Company : {v.sCompany}</p>
                    <p>Onsite : {v.sOnsite}</p>
                    <p>Position : {v.Position}</p>
                  </Card>)
                })
              }
            </Space>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="column-66">
            <h1 class="xlarge-font"><b>The App</b></h1>
            <h1 class="large-font" style={{ color: "MediumSeaGreen" }}><b>Why buy it?</b></h1>
            <p><span style={{ font: "36px" }} >Take photos like a pro.</span> You should buy this app because lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <button class="button">Download Application</button>
          </div>
          <div class="column-33">
            <img src="https://www.w3schools.com/w3images/img_app.jpg" width="335" height="471" />
          </div>
        </div>
      </div>

      <div class="container" style={{ backgroundColor: "#f1f1f1" }} >
        <div class="row">
          <div class="column-33">
            <img src="https://www.w3schools.com/w3images/app5.jpg" alt="App" width="335" height="471" />
          </div>
          <div class="column-66">
            <h1 class="xlarge-font"><b>Clarity</b></h1>
            <h1 class="large-font" style={{ color: "red" }}><b>Pixels, who?</b></h1>
            {/* <p><span style={{ font: "24px" }}>A revolution in resolution.</span> Sharp and clear photos with the world's best photo engine, incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> */}
            {/* <button class="button" style="background-color:red">Read More</button> */}
          </div>
        </div>
      </div>

      <Modal title="Responsibilities" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div >
  );
}

export default Contact;