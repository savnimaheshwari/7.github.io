import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Purdue College of Science": {
      jobTitle: "COSINE Calculus Tutor (substitute) @",
      duration: "AUG 2024 - PRESENT",
      desc: [
      "I serve as a COSINE math tutor at Purdue University, specializing in Calculus 1, 2, 3, and Pre-Calculus for undergraduate students."  ,
"I assist students in understanding complex mathematical concepts and help them improve their problem-solving skills.",
"I provide group tutoring sessions to support coursework and exam preparation."
      ]
    },
    "Purdue Computer Science Dept.": {
      jobTitle: "Undergraduate Teaching Assistant @",
      duration: "AUG 2024 - DEC 2024",
      desc: [
        "I held online office hours for 50+ freshmen students in the class CS 193 (Tools), helping them with questions about the command line, LaTeX, Git, GitHub, interview preparation, and resume building.",  
        "I graded homework assignments and provided feedback to support their learning."
      ]
    },
    "Accenture": {
      jobTitle: "AI/ML Intern",
      duration: "JUL 2024 - AUG 2024",
      desc: [
        "Worked on the architecture and implementation of a Conversational Interface on Unstructured Data, focusing on Gen AI design patterns.",
"Delivered an end-to-end solution to interact with unstructured text files using natural language.",
"Developed a user interface with Streamlit, a vector DB with FAISS for data chunking and vectorization, and a backend layer with FastAPI.",
"Integrated Azure Open AI using Cipla’s Gen AI foundational layer and used Python for development."
      ]
    },
    "STAR LABS Surat": {
      jobTitle: "Avionics Intern @",
      duration: "JUN 2022 - JUL 2022",
      desc: [
        "Collaborated with IIT Madras Aerospace students to design a static test pad for high-powered rockets, enhancing reliability by 20%.",  
        "Used Proteus for avionics simulation and SolidWorks for mechanical design, contributing to the project’s technical accuracy.",  
        "Worked as part of a team to apply engineering knowledge to improve the reliability and functionality of the test pad."
      ]
    },
    // TDSB: {
    //   jobTitle: "Software Engineer @",
    //   duration: "SEPT 2019 - DEC 2020",
    //   desc: [
    //     "Co-developed homework management software integrable with Google Classroom by utilizing the Python’s Flask micro-framework for the back-end API and Vue.js for the front-end UI, in order to translate business requirements into a functional full-stack application."
    //   ]
    // },
    
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
