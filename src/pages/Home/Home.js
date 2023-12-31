import React, { useState, useEffect } from 'react';
import { Card, Space, Modal, Image, Col, Row, Form, Input } from 'antd';
import Skill from "./Skills/Skills.js"
import SoftSkill from "./SoftSkills/SoftSkills.js"
import Contact from "./Contact/Contact.js";
import './Home.css';
import Img from '../../imgs/330933890_725648152229997_3794307667321601845_n.jpg';

const { TextArea } = Input;

let lstResponsibilities = [{
  nId: 1,
  sDate: "2023 - Present",
  sCompany: "Bright Expert Co.,Ltd.",
  sOnsite: "Thai Beverage Public Co.,Ltd.",
  Position: ".NET Developer",
  sDetail: "<h3>API and Back-End Development</h3><p>Designed and developed robust API systems and back-end components for web applications. Utilized Swagger to create user-friendly API documentation.</p><h3>System Analysis and Design</h3><p>Demonstrated the ability to analyze and design computer systems effectively, fulfilling assignments from supervisors. Proficient in project-specific analytical tasks and providing innovative solutions for efficient system analysis and design.</p><h3>Error Resolution</h3><p>Proficient in identifying and rectifying program usage errors, ensuring smooth operation of systems. Developed strategies for error correction and prevention, reporting findings and solutions to project teams and management.</p>",
},
// {
//   nId: 2,
//   sDate: "February 2022 - December 2022",
//   sCompany: "Tech Soft Holding Co.,Ltd",
//   sOnsite: "Easy Buy Public Co.,Ltd.",
//   Position: "FullStack Developer",
//   sDetail: "<h3>Develop and Design Full Stack Software</h3><p>Develop and design full-stack software for both front-end and back-end components, ensuring a comprehensive understanding of both aspects.</p><h3>Develop Programs Using C#.Net (Web MVC)</h3><p>Develop programs using C#.Net with a focus on Web MVC to create web applications.</p><h3>Collect and Analyze Business Requirements to Design and Develop the System</h3><p>Gather and analyze business needs to effectively design and develop systems in alignment with the specified requirements.</p>"
// }, 
{
  nId: 3,
  sDate: "2020 - 2022",
  sCompany: "Softthai Application Co., Ltd.",
  sOnsite: "",
  Position: "FullStack Developer",
  sDetail: "<h3>Develop and Design Full-Stack Software for Both Front-End and Back-End</h3><p>In this role, I was responsible for developing and designing comprehensive software solutions that covered both the front-end and back-end components. This included a deep understanding of both aspects to ensure seamless integration.</p><h3>Collaborate with Team Leader in Estimating Project Efforts, Developing Project Plans and Schedules, and Executing Tasks According to the Established Plan</h3><p>I actively participated in collaboration with the team leader to estimate project efforts, create project plans, define timelines, and diligently execute tasks according to the outlined project plan.</p><h3>Test Programs by Creating Sample Data and Systematically Evaluating Their Performance, Mimicking Real-World Scenarios</h3><p>Testing was a crucial part of my role. I developed and implemented comprehensive testing procedures by generating sample data and meticulously evaluating the program's functionality step by step to simulate real-world usage.</p><h3>Build and Deploy Applications</h3><p>My responsibilities extended to developing and deploying applications, ensuring they were ready for production use.</p>"
}, {
  nId: 4,
  sDate: "2019 - 2020",
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
  const [direction, setDirection] = useState('vertical');
  const [fields, setFields] = useState([
    {
      name: ['nickname'],
      value: 'Tonkla',
    }, {
      name: ['address'],
      value: '35/306 Soi Charansanitwong 91 Bang Ao Subdistrict, Bang Phlat District Bangkok 10700 Thailand',
    }, {
      name: ['phone'],
      value: '094-559-2691',
    }, {
      name: ['email'],
      value: 'JakkitWongtewee@gmail.com',
    }
  ]);

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

  useEffect(() => {
    const handleResize = () => {
      // Set the direction to horizontal for larger screens and vertical for smaller screens
      if (window.innerWidth > 1000) { // 768px is a common breakpoint for tablets
        setDirection('horizontal');
      } else {
        setDirection('vertical');
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

      <div class="container" style={{ marginTop: 15 }}>
        <div class="card">
          <div class="card-img"></div>
          <h1 class="xlarge-font"><b>Jakkit Wongtewee</b></h1>
          <div class="card-info">

            <div class="row" style={{ width: "100%" }} >
              <div class="column-100">
                <Form fields={fields} disabled>
                  <Row justify="space-around">
                    <Col md={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                      <Form.Item name="nickname" label="Nickname">
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col md={{ span: 8 }} xs={{ span: 24 }}>
                      <Form.Item name="address" label="Address">
                        <TextArea rows={3} />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row justify="space-around">
                    <Col md={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                      <Form.Item name="phone" label="Telephone">
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col md={{ span: 8 }} sm={{ span: 24 }} xs={{ span: 24 }}>
                      <Form.Item name="email" label="Email">
                        <Input />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>


            {/* <p class="text-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat, consequuntur doloribus voluptate esse iure?</p>
            <p class="text-title">Autor</p> */}

          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="column-66">
            {/* <h1 class="xlarge-font"><b>Jakkit Wongtewee</b></h1> */}
            <h1 class="large-font" style={{ color: "MediumSeaGreen" }}><b>About</b></h1>
            <p style={{ lineHeight: "2", wordSpacing: "0.1rem" }}>
              <span style={{ font: "36px" }}>I am an experienced web application developer with expertise in .NET technology.</span>
              My skills include designing and maintaining high-efficiency systems that meet industry standards. I am committed to applying my knowledge and expertise to
              enhance the value of our team and organization. I am enthusiastic about continuous learning and self-improvement, and I am ready to collaborate with a
              team that is dedicated to achieving success in web system development projects.
            </p>
          </div>
          <div class="column-33">
            <Image src={Img} />
          </div>
        </div>
      </div>

      <div class="container" style={{ backgroundColor: "#f1f1f1" }} >
        <div class="row">
          <div class="column-100">
            <h1 class="xlarge-font"><b>Working Experience</b></h1>
            <Space direction={direction} size={16}>
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