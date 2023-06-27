import html from "../Assets/Images/html-logo.png";
import css from "../Assets/Images/css-logo.png";
import javascript from "../Assets/Images/javascript-logo.png";
import typescript from "../Assets/Images/typescript-logo.png";
import reactJS from "../Assets/Images/react-logo.png";
import graphQL from "../Assets/Images/graphql-logo.png";
import sass from "../Assets/Images/sass-logo.png";
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
      { logo: typescript, iconName: "Typescript" },
      { logo: reactJS, iconName: "React" },
      { logo: graphQL, iconName: "GraphQL" },
      { logo: sass, iconName: "SASS" },
    ],
  },
  {
    stack: "Back-End",
    items: [
      {
        logo: nodeLogo,
        iconName: "NodeJS",
        url: "https://github.com/RyanJKS/social-stock-analysis",
      },
      {
        logo: express,
        iconName: "ExpressJS",
        url: "https://github.com/RyanJKS/social-stock-analysis",
      },
    ],
  },
  {
    stack: "Databases",
    items: [
      { logo: mysql, iconName: "MySQL" },
      {
        logo: mongodb,
        iconName: "MongoDB",
        url: "https://github.com/RyanJKS/mern-quiz-app",
      },
      {
        logo: firebase,
        iconName: "Firebase",
        url: "https://github.com/RyanJKS/firebase-blog",
      },
    ],
  },
  {
    stack: "Other Technologies",
    items: [
      {
        logo: python,
        iconName: "Python",
        url: "https://github.com/RyanJKS/Line-Tracking-Robot",
      },
      {
        logo: c,
        iconName: "C Programming",
        url: "https://github.com/RyanJKS/Line-Tracking-Robot",
      },
      { logo: aws, iconName: "AWS" },
      { logo: gitLogo, iconName: "Git" },
      {
        logo: githubLogo,
        iconName: "GitHub",
        url: "https://github.com/RyanJKS",
      },
    ],
  },
];
