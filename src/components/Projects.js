import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "": {
        title: "AI Advisor for College Students",
        desc:
          "I helped develop advisor-student conversations, including audio transcription, using AI techniques.",
        techStack: "Python , Llama3 , HuggingFace",
        open: "https://github.com/AI-Student-Helper",
        link: "https://mlpurdue.notion.site/8e83150770684e118ed6f423ba54fb81?v=b403456229e8436f8f80740ac735e90a&p=791db14a85574334af541d6ff7757cc7&pm=s",
        image: "/assets/mlproject.png"
      },
      Truth: {
        title: "HELLo: a social media platform",
        desc:
          "A social media application created where users can upload posts, friend or unfriend others, block people, and like or comment on posts. The project focused on implementing key OOP principles, was for my CS 180 class.",
        techStack: "Java (Frontend+Backend)",
        open: "https://github.com/fayeteras/Team-Project",
        link: "https://docs.google.com/presentation/d/1jCSo-N4jeNgjq41tZrvZ5GmvaxUJQRoZcdW_bq2RLT8/edit#slide=id.g2d03de5f53e_3_737",
        image: "/assets/image.png"
      }
    };
    const projects = {
      "Purdue IE (Industrial Engineering) Research": {
        desc:
          "Prepared a dataset from 2013-2023 on electric vehicle registrations and associated state-level variables. Analyzed the relationships using supervised machine learning methods. Presented the results of the analysis.",
        techStack: "R, Machine Learning, Python",
        link: "https://docs.google.com/presentation/d/1F9UZ1B06Vppn5-6rvqEe9CUf33BZT47qTisyD0mCP7Q/edit?usp=sharing",
        open: "https://github.com/savnimaheshwari/EV-Research---IE-4900"
      },
      "Social Media/Gym Post Sentiment Analysis (PHIL 208)": {
        desc:
          "My team and I addressed the pervasive influence of social media, particularly by fitness influencers. We conducted sentiment analysis on a vast dataset of gym-related content across various social media and developed a website for 20,000+ college students to use.",
        techStack: "Data collection , Data analysis",
        link:
          "https://drive.google.com/file/d/1AULR6kgrWeMQUMp8wkosE4K0TxQ58bcl/view?usp=sharing"
      },
      "Bookstore management software": {
        desc:
          "For my IBDP Computer Science Internal Assessment, I developed a Bookstore Management Software. The project streamlined inventory, sales, and customer management processes. It featured functionalities like tracking stock levels, generating invoices, and maintaining a customer database, all built to improve efficiency and enhance user experience for bookstore operations.",
        techStack: "Java, MySQL",
        link: "",
        open: ""
      },
      "Kathak: Visharad": {
        desc:
          "I obtained the Visharad Pratham certificate in Kathak after 8 years, equivalent to a Bachelor's in dance. I’ve taught Kathak to kids as part of a social program and participated in stage shows.",
        techStack: "Dancing (practical + theory)",
        link: "",
        open: "https://drive.google.com/file/d/1Ce-X5fOm9c4_uSBxgQE02VG01Mgk2jyF/view?usp=sharing"
      },
      "Project on on AI-Based Switching Mechanisms for Wireless Charging Systems for EVs": {
        desc:
          "Working with Professor Tiwari, ex-Dean of IIT Kharagpur, I focused on applying AI to optimize configurations and architecture in wireless charging systems.",
        techStack: "MATLAB",
        link: "",
        open: "https://drive.google.com/file/d/1CO-Lj5h8z93VLv5lgXaYjy264_hgZbKM/view?usp=sharing"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/projects/certifications</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
