import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tours & Travels ",
      description: "Management System",
      imgUrl: projImg1,
      githubUrl: "https://github.com/suyashzalte/University-Management-System.git",
    },
    {
      title: "Colleage ERP ",
      description: "Management System", 
      imgUrl: projImg2,
    },
    {
      title: "Authentication APIs ",
      description: "OAuth 2.0 RESTful APIs",
      imgUrl: projImg3,
    },
    {
      title: "Email_AI_Assistant",
      description: "AI Assistant Project",
      imgUrl: projImg4,
    },
    {
      title: "Votting Application",
      description: "Polling WebSite",
      imgUrl: projImg5,
    },
    {
      title: "instant messaging app",
      description: "Messanger App",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>"I have developed multiple projects utilizing Java Spring Boot for backend development, integrating SQL databases like PostgreSQL and MySQL for efficient data management. My expertise extends to building scalable microservices architectures and implementing RESTful APIs with Hibernate for seamless database interactions. On the frontend, I have worked with React.js and JavaScript, occasionally using Bootstrap for responsive UI design. These projects showcase my ability to develop full-stack applications with robust backend logic and dynamic user interfaces, ensuring high performance and maintainability."</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>"I have developed multiple projects utilizing Java Spring Boot for backend development, integrating SQL databases like PostgreSQL and MySQL for efficient data management. My expertise extends to building scalable microservices architectures and implementing RESTful APIs with Hibernate for seamless database interactions. On the frontend, I have worked with React.js and JavaScript, occasionally using Bootstrap for responsive UI design. These projects showcase my ability to develop full-stack applications with robust backend logic and dynamic user interfaces, ensuring high performance and maintainability."</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
