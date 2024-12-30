import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";
import FractalTree from "./FractalTree";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        <FractalTree></FractalTree>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"savni"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I code and write stuff sometimes.</div>
          <div className="intro-desc">
            My name is Savni Maheshwari, and I am an undergraduate student at{' '}
            <a href="https://www.purdue.edu/">Purdue University</a>, pursuing a
            Bachelor's degree in {' '} <a href="https://www.cs.purdue.edu/">Data Science</a>, offered by the CS dept. along with a certificate in
            Entrepreneurship & Innovation.
            <p>
              I am currently seeking internships for Summer 2025 in roles related
              to machine learning and data science. With a passion for leveraging
              data-driven insights, I am eager to contribute to innovative
              projects and grow my expertise in these fields.
            </p>
          </div>
          <a
            href="mailto:maheshwarisavni@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {" Get in touch !"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
