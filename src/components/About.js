import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expandedCategories: {}, // track open/close per category
    };
  }

  toggleCategory = (idx) => {
    this.setState((state) => ({
      expandedCategories: {
        ...state.expandedCategories,
        [idx]: !state.expandedCategories[idx],
      },
    }));
  };

  render() {
    const aboutText = (
      <div>
        <p>
          At Purdue, I’ve worked on impactful projects like analyzing U.S. electric vehicle adoption with the
          <a href="https://engineering.purdue.edu/uSMART"> uSMART</a> team and building a Deepfake Database of Political Incidents with
          <a href="https://www.cla.purdue.edu/academic/polsci/research/labs/grail/index.html"> Purdue GRAIL</a>.
        </p>
        <p>
          As a <b>Corporate Liaison</b> for <a href="https://www.linkedin.com/company/cswn/"> Purdue CSWN</a>, I’ve fostered industry partnerships and organized networking events.
          Additionally, as a <b>CS 193 TA</b>, I’ve mentored 50+ students in Git and LaTeX.
        </p>
        <p>
          Most recently, I’ve been developing an <b>AI-powered student advisor chatbot</b> with Purdue’s
          <a href="https://ml-purdue.github.io/"> Machine Learning Club</a>, leveraging LLaMA models.
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
            {/* Image first */}
            <div className="about-image">
              <img alt="Savni Maheshwari" src={"/assets/me2.jpg"} />
            </div>

            {/* Description and tech stack below */}
            <div className="about-description">
              {aboutText}

              <div className="tech-stack-section">
                <h2 className="tech-stack-main-heading">Technologies I Use</h2>

                {techCategories.map((category, idx) => {
                  const isExpanded = this.state.expandedCategories[idx] ?? false;
                  return (
                    <FadeInSection delay={`${(idx + 1) * 100}ms`} key={idx}>
                      <div className="tech-category-block">
                        <h3
                          className="tech-category-title clickable"
                          onClick={() => this.toggleCategory(idx)}
                          aria-expanded={isExpanded}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              this.toggleCategory(idx);
                            }
                          }}
                        >
                          {category.title} {isExpanded ? "▲" : "▼"}
                        </h3>

                        {isExpanded && (
                          <div className="tech-items-grid">
                            {category.items.map((item, i) => (
                              <div className="tech-pill" key={i}>
                                {item}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </FadeInSection>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
