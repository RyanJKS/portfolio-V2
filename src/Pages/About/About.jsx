import React from "react";
import "./About.css";
import AppWrap from "../../Wrapper/AppWrap/AppWrap";
import BackgroundCard from "../../Wrapper/BackgroundCard/BackgroundCard";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import resume from "../../Assets/Jhelan Suggun CV.pdf";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">A little about me</h2>
      <h4>
        I am a mechanical engineering graduate with a deep passion for software
        development. During my university years, I discovered my love for
        programming and since then I have been honing my skills through
        university projects and personal initiatives.
        <br />
        <br />
        I have gained extensive knowledge in creating fully responsive
        applications using frameworks like React. I am a self-taught developer,
        always eager to learn and stay up-to-date with the latest technologies.
        My expertise includes React, JavaScript, Material UI, MongoDB, Node.js,
        MySQL, Express, and leveraging API data for dynamic charting.
        <br />
        <br />
        Driven by a commitment to clean and scalable code, I strive to build
        innovative applications that are user-friendly and offer unique data
        visualization. Although I am transitioning into software development, my
        mechanical engineering background equips me with strong problem-solving
        and analytical skills.
        <br />
        <br />
        Although my experience may be limited, I bring a strong work ethic, a
        genuine passion for programming, and a dedication to continuous
        learning. I am excited about the opportunity to collaborate on
        meaningful projects and contribute my skills to deliver exceptional
        software solutions.
        <br />
        <br />
        Let's work together to create impactful applications that meet your
        needs and exceed expectations.
      </h4>

      <Stack direction="row" justifyContent="space-evenly" paddingTop="2rem">
        <Button variant="outlined">
          <a href={resume} download={resume}>
            Vew Resume
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
