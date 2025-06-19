import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";

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

  // External Links component with conditional icon rendering
  ExternalLinks = ({ githubLink, openLink }) => (
    <div className="external-links">
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon style={{ fontSize: 32 }} />
        </a>
      )}
      {openLink && (
        <a href={openLink} target="_blank" rel="noopener noreferrer">
          <OpenInNewIcon style={{ fontSize: 32 }} />
        </a>
      )}
    </div>
  );

  render() {
    const spotlightProjects = {
      "": {
        title: "AI Advisor for College Students",
        desc:
          "I helped develop advisor-student conversations, including audio transcription, using AI techniques.",
        techStack: "Python , Llama3 , HuggingFace",
        link: "https://github.com/AI-Student-Helper",
        open: "https://mlpurdue.notion.site/8e83150770684e118ed6f423ba54fb81?v=b403456229e8436f8f80740ac735e90a&p=791db14a85574334af541d6ff7757cc7&pm=s",
        image: "/assets/mlproject.png"
      },
      Truth: {
        title: "HELLo: a social media platform",
        desc:
          "A social media application created where users can upload posts, friend or unfriend others, block people, and like or comment on posts. The project focused on implementing key OOP principles, was for my CS 180 class.",
        techStack: "Java (Frontend+Backend)",
        link: "https://github.com/fayeteras/Team-Project",
        open: "https://docs.google.com/presentation/d/1jCSo-N4jeNgjq41tZrvZ5GmvaxUJQRoZcdW_bq2RLT8/edit#slide=id.g2d03de5f53e_3_737",
        image: "/assets/image.png"
      }
    };

    const projects = {
       "Drowsy - Alert System": {
    desc:
      "Developed a real-time driver drowsiness detection system using computer vision and machine learning.",
    techStack: "Python, OpenCV, TensorFlow",
    link: "https://github.com/savnimaheshwari/drowsy",
    image: "/assets/drowsy.png"
  },

  "TravelTab - Trip Management App": {
    desc:
      "TravelTab is a sleek iOS app that helps you plan group trips, track shared expenses, and get personalized insights using AI",
    techStack: "Swift, OpenAPI",
    link: "https://github.com/savnimaheshwari/TravelTab",
    image: "/assets/traveltab.png"
  },
      "Purdue IE (Industrial Engineering) Research": {
        desc:
          "Prepared a dataset from 2013-2023 on electric vehicle registrations and associated state-level variables. Analyzed the relationships using supervised machine learning methods. Presented the results of the analysis.",
        techStack: "R, Machine Learning, Python",
        open: "https://docs.google.com/presentation/d/1F9UZ1B06Vppn5-6rvqEe9CUf33BZT47qTisyD0mCP7Q/edit?usp=sharing",
        link: "https://github.com/savnimaheshwari/EV-Research---IE-4900",
        image: "/assets/purdue-ie.png"
      },
      "Social Media/Gym Post Sentiment Analysis (PHIL 208)": {
        desc:
          "My team and I addressed the pervasive influence of social media, particularly by fitness influencers. We conducted sentiment analysis on a vast dataset of gym-related content across various social media and developed a website for 20,000+ college students to use.",
        techStack: "Data collection , Data analysis",
        open:
          "https://drive.google.com/file/d/1AULR6kgrWeMQUMp8wkosE4K0TxQ58bcl/view?usp=sharing",
        image: "/assets/gym-sentiment.png"
      },
      "Bookstore management software": {
        desc:
          "For my IBDP Computer Science Internal Assessment, I developed a Bookstore Management Software. The project streamlined inventory, sales, and customer management processes. It featured functionalities like tracking stock levels, generating invoices, and maintaining a customer database, all built to improve efficiency and enhance user experience for bookstore operations.",
        techStack: "Java, MySQL",
        image: "/assets/bookstore.png"
      },
      "Kathak: Visharad": {
        desc:
          "I obtained the Visharad Pratham certificate in Kathak after 8 years, equivalent to a Bachelor's in dance. I’ve taught Kathak to kids as part of a social program and participated in stage shows.",
        techStack: "Dancing (practical + theory)",
        open: "https://drive.google.com/file/d/1qVCiW7Px6HWCAcE_6w9Dc86xqo5EVIN_/view?usp=sharing",
        image: "/assets/kathak.png"
      },

      "Project on AI-Based Switching Mechanisms for Wireless Charging Systems for EVs": {
        desc:
          "Working with Professor Tiwari, ex-Dean of IIT Kharagpur, I focused on applying AI to optimize configurations and architecture in wireless charging systems.",
        techStack: "MATLAB",
        open: "https://drive.google.com/file/d/1CO-Lj5h8z93VLv5lgXaYjy264_hgZbKM/view?usp=sharing",
        image: "/assets/ai-charging.png"
      },
       "Static Test Pad for Rocket Motors (Avionics Intern@ STAR)": {
        desc:
          "My team and I at STAR Labs, Gujurat built a static test pad for high-powered rockets using software like Proteus (avionics bay) and SolidWorks (mechanical design) enhancing reliability by 20%.",
        techStack: "Proteus, SolidWorks",
        open:
          "https://drive.google.com/file/d/1_PwD1YMJ-s3djLAGFhWM5I4kUoq55qGw/view?usp=sharing",
        image: "/assets/rocket-testpad.png"
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">projects/certifications</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
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
                  <this.ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  />
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection key={i} delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon style={{ fontSize: 32 }} />
                    </div>
                    <this.ExternalLinks
                      githubLink={projects[key].link}
                      openLink={projects[key].open}
                    />
                  </div>

                  {/* Small project image */}
                  {projects[key].image && (
                    <img
                      src={projects[key].image}
                      alt={`${key} preview`}
                      className="project-small-image"
                    />
                  )}

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
