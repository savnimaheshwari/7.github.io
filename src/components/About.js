import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  render() {
    const aboutText = (
     <div>
  <p>
    My name is Savni Maheshwari, and I’m an undergraduate Data Science student at Purdue University, also pursuing a certificate in Entrepreneurship & Innovation. I’m passionate about applying technology to solve real-world problems and eager to take on impactful projects.
  </p>
</div>
  };

    const techCategories = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Swift",
      "UI/UX Design"
    ],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "Java",
      "Node.js",
      "REST APIs",
      "SQL",
      "Object-Oriented Programming"
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Gen AI",
      "LLaMA",
      "LangChain",
      "FAISS",
      "scikit-learn"
    ],
  },
  {
    title: "Frameworks & Tools",
    items: [
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Jupyter Notebooks"
    ],
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
