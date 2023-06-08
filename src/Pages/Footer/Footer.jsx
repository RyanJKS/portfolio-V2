import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Wave from "react-wavify";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      height="5vh"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://google.com/">
        JKS Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer() {
  return (
    <>
      <Wave mask="url(#mask)" fill="#1277b0">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
}

export default Footer;
