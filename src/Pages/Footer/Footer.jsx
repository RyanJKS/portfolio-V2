import React from "react";
import Link from "@mui/material/Link";
import Wave from "react-wavify";

function Footer() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Wave mask="url(#mask)" fill="#1277b0">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="100" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
          zIndex: 1,
        }}
      >
        <a
          href="https://www.linkedin.com/in/jhelan-suggun-jks7n99/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: "16px",
            textDecoration: "none",
          }}
        >
          {"Copyright © "}
          <Link
            color="inherit"
            href="https://www.linkedin.com/in/jhelan-suggun-jks7n99/"
          >
            JKS Website
          </Link>{" "}
          {new Date().getFullYear()}
        </a>
      </div>
    </div>
  );
}

export default Footer;
