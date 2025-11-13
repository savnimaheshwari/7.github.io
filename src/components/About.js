import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  render() {
    const aboutText = (
      <div>
        <p>
          I’m an undergraduate <a href="#">Data Science (CS)</a> student at <a href="#">Purdue University</a>, also pursuing a certificate in <a href="#">Entrepreneurship & Innovation</a>. I’m passionate about applying technology to solve real-world problems and eager to take on <a href="#">impactful projects</a>.
        </p>
      </div>
    );

    const techCategories = [
      {
        title: "Languages",
        items: ["Java", "Python", "Swift", "JavaScript", "R", "SQL"],
      },
      {
        title: "Libraries/AI",
        items: ["Pandas", "NumPy", "PyTorch", "scikit-learn", "LangChain", "Hugging Face"],
      },
      {
        title: "Tools",
        items: ["GitHub", "Streamlit", "Docker", "VS Code", "Xcode"],
      },
      {
        title: "Data Visualization",
        items: ["Power BI", "Tableau"],
      },
      {
        title: "Cloud Platforms",
        items: ["AWS", "Azure"],
      },
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {aboutText}
              <h3 className="tech-stack-heading">/ skills 🛠️</h3>
              <div className="tech-cards">
                {techCategories.map((category, idx) => (
                  <FadeInSection delay={`${idx + 1}00ms`} key={idx}>
                    <div className="tech-card">
                      <h4 className="tech-card-title">{category.title}</h4>
                      <ol className="tech-card-list">
                        {category.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ol>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
            <div className="about-image">
              <img alt="Savni Maheshwari" src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
