import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pro-img-1.png";
import projImg2 from "../assets/img/pro-img-2.png";
import projImg3 from "../assets/img/pro-img-3.png";
import projImg4 from "../assets/img/pro-img-4.png";
import projImg5 from "../assets/img/pro-img-5.png";
import projImg6 from "../assets/img/pro-img-6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "McBrain and Neil",
      readMoreLink: "https://mcbrianandneil.com/",
      description: "Oil & Gas",
      imgUrl: projImg1,
      
    },
    {
      title: "Chereb Care Home",
      readMoreLink: "https://cherebcareservices.com/",
      description: "Care Services",
      imgUrl: projImg2,
    },
    {
      title: "Thrive Hope ",
      readMoreLink: "https://thrivehopefoundation.org/",
      description: "NGO Services",
      imgUrl: projImg3,
    },
    {
      title: "Bliss Legacy ",
      readMoreLink: "https://blisslegacy.com",
      description: "Real Estate",
      imgUrl: projImg4,
    },
    {
      title: "MGI IT Solutions ",
      readMoreLink: "https://mgitsolutions.co.uk/",
      description: "IT Solutions ",
      imgUrl: projImg5,
    },
    {
      title: "Vasu Brand ",
      readMoreLink: "https://vasubrandlimited.com/",
      description: "Ecommerce",
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
                <p>Some very few of our exciting projects. Israel is committed to creating any type of website of your choice not limited to the samples displayed..</p>
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
                            );
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Additional content for Tab 2.</p>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Additional content for Tab 3.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
