import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  render() {
    const aboutText = (
      <div>
        <p>
          At Purdue, I’ve worked on impactful projects like analyzing U.S. electric vehicle adoption with the
          <a href="https://engineering.purdue.edu/uSMART" target="_blank" rel="noreferrer"> uSMART</a> team and building a Deepfake Database of Political Incidents with
          <a href="https://www.cla.purdue.edu/academic/polsci/research/labs/grail/index.html" target="_blank" rel="noreferrer"> Purdue GRAIL</a>.
        </p>
        <p>
          As a <b>Corporate Liaison</b> for <a href="https://www.linkedin.com/company/cswn/" target="_blank" rel="noreferrer"> Purdue CSWN</a>, I’ve fostered industry partnerships and organized networking events.
          Additionally, as a <b>CS 193 TA</b>, I’ve mentored 50+ students in Git and LaTeX.
        </p>
        <p>
          Most recently, I’ve been developing an <b>AI-powered student advisor chatbot</b> with Purdue’s
          <a href="https://ml-purdue.github.io/" target="_blank" rel="noreferrer"> Machine Learning Club</a>, leveraging LLaMA models.
        </p>
        <p>
          Outside of academics and work, I enjoy exploring advancements in science and am always eager to expand my skill set.
        </p>
      </div>
    );

    const techCategories = [
      {
        title: "AI & Machine Learning",
        items: ["Machine Learning", "Deep Learning", "AI", "LLaMA", "LangChain", "FAISS"],
      },
      {
        title: "Data Science",
        items: ["Data Analysis", "Data Visualization", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      },
      {
        title: "Frameworks & Tools",
        items: ["TensorFlow", "PyTorch", "scikit-learn", "Streamlit", "Azure OpenAI", "Jupyter Notebooks"],
      },
      {
        title: "Software & App Development",
        items: ["Python", "Java", "Swift", "Git", "REST APIs", "Object-Oriented Programming"],
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
              <h3 className="tech-stack-heading">Technologies I Use 🛠️</h3>
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
