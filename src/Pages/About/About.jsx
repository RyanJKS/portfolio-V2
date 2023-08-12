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
      <h4>
        I am a Mechanical Engineering Master's graduate with a big passion for
        software development. Over the past four years, I taught myself
        programming and worked on different projects, both during university and
        in my free time.
        <br />
        <br />
        My background in engineering complements my software design skills, leading to functional and user-centric tech solutions. 
        I am familliar with both front-end and back-end frameworks and worked mainly with JavaScript and React. 
        Additionally, I also have experience working with Python and C in embedded systems for robotics projects.
        <br />
        <br />
        Beyond coding, I have picked up many useful skills from various part-time
        jobs. As a support worker, gym receptionist, and currently an NHS
        Emergency Department receptionist, I have developed my problem-solving,
        time management, and interpersonal skills.
        <br />
        <br />
        Even though my journey from mechanical engineering to software
        development might seem unusual, it's this unique path that makes me a
        strong software engineer. I am excited to use my mix of engineering
        know-how, problem-solving, and design skills to create great software solutions.
        <br />
        <br />
        Feel free to explore my website and projects to see what I can do!
      </h4>

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
