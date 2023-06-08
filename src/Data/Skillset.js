import html from "../Assets/Images/html-logo.png";
import css from "../Assets/Images/css-logo.png";
import javascript from "../Assets/Images/javascript-logo.png";
import reactJS from "../Assets/Images/react-logo.png";
import bootstrap from "../Assets/Images/bootstrap-logo.png";
import material from "../Assets/Images/material-logo.png";
import nodeLogo from "../Assets/Images/node-logo.png";
import express from "../Assets/Images/express-logo.png";
import mysql from "../Assets/Images/msql-logo.png";
import mongodb from "../Assets/Images/mongodb-logo.png";
import python from "../Assets/Images/python-logo.png";
import c from "../Assets/Images/c-logo.png";
import aws from "../Assets/Images/aws-logo.png";
import gitLogo from "../Assets/Images/git-logo.png";
import githubLogo from "../Assets/Images/github-logo.png";
import firebase from "../Assets/Images/firebase-logo.png";

export const Skillset = [
  {
    stack: "Front-End",
    items: [
      { logo: html, iconName: "HTML" },
      { logo: css, iconName: "CSS" },
      { logo: javascript, iconName: "JavaScript" },
      { logo: reactJS, iconName: "React" },
      { logo: bootstrap, iconName: "Bootstrap" },
      { logo: material, iconName: "Material UI" },
    ],
  },
  {
    stack: "Back-End",
    items: [
      { logo: nodeLogo, iconName: "NodeJS" },
      { logo: express, iconName: "ExpressJS" },
    ],
  },
  {
    stack: "Databases",
    items: [
      { logo: mysql, iconName: "MySQL" },
      { logo: mongodb, iconName: "MongoDB" },
      { logo: firebase, iconName: "Firebase" },
    ],
  },
  {
    stack: "Other Technologies",
    items: [
      { logo: python, iconName: "Python" },
      { logo: c, iconName: "C Programming" },
      { logo: aws, iconName: "AWS" },
      { logo: gitLogo, iconName: "Git" },
      { logo: githubLogo, iconName: "GitHub" },
    ],
  },
];
