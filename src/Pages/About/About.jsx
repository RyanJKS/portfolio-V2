import React from "react";
import "./About.css";
import AppWrap from "../../Wrapper/AppWrap/AppWrap";
import BackgroundCard from "../../Wrapper/BackgroundCard/BackgroundCard";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">A little about me</h2>
      <p>
        Hello! I'm Jhelan, a dynamic Full-Stack Developer with a solid foundation in Mechanical Engineering and a profound passion for technology. My journey in software development is marked by a deep commitment to data engineering and cloud computing, demonstrating a unique blend of analytical and technical skills.
        <br /><br />

        <strong>Core Strengths:</strong>
        <ul>
          <li>
            <strong>Full-Stack Development: </strong> Proficient in both front-end and back-end technologies. I specialize in creating seamless user experiences with JavaScript and React, and robust backend systems using Python and SQL.
          </li>
          <li>
            <strong>Data Engineering: </strong> Adept at managing and interpreting large datasets. I excel in building efficient data pipelines and storage solutions, as evident in my diverse project portfolio.
          </li>
          <li>
            <strong>Cloud Computing: </strong> My expertise extends to leveraging cloud platforms, particularly AWS, for scalable, secure, and efficient data handling and application deployment.
          </li>
        </ul>

        <strong>My Philosophy: </strong>
        I believe in continuous learning and adapting to the ever-evolving tech landscape. My engineering background has instilled a rigorous problem-solving approach, enabling me to navigate and excel in complex software and data engineering projects.
        <br /><br />

        <strong>Future Aspirations: </strong>
        Eager to step into the professional tech arena, I am keen to join innovative teams where I can apply my skills in full-stack development, data engineering, and cloud computing. I look forward to contributing to impactful projects and further expanding my expertise in these domains.
      </p>

      <Stack direction="row" justifyContent="space-evenly" paddingTop="2rem">
        <Button variant="outlined">
          <a href="Resume" target="_blank">
            View Resume
          </a>
        </Button>
        <Button variant="outlined">
          <a href="#Contact%20Me">Contact Me</a>
        </Button>
      </Stack>
    </div>
  );
};

export default AppWrap(BackgroundCard(About), "About", "white");
