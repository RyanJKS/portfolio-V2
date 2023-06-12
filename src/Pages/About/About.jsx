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
        I am a Mechanical Engineering Master's graduate with a big passion for
        software development. Over the past four years, I taught myself
        programming and worked on different projects, both during university and
        in my free time.
        <br />
        <br />
        I've learned to apply my engineering knowledge to software, creating
        smart, easy-to-use solutions. My skills cover both front-end and
        back-end development, and I'm especially handy with JavaScript and
        React. I always make sure the websites and apps I build work well on any
        device.
        <br />
        <br />
        Beyond coding, I've picked up many useful skills from various part-time
        jobs. As a support worker, gym receptionist, and currently an NHS
        Emergency Department receptionist, I've developed my problem-solving,
        time management, and people skills.
        <br />
        <br />
        Even though my journey from mechanical engineering to software
        development might seem unusual, it's this unique path that makes me a
        strong software engineer. I'm excited to use my mix of engineering
        know-how, problem-solving, and design skills to create great software.
        <br />
        <br />
        Feel free to explore my website and projects to see what I can do. I'm
        looking forward to working together to build something amazing!
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
