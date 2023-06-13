import React from "react";
import "./About.css";
import pdfPath from "../../Assets/CV.pdf";

function Resume() {
  return (
    <iframe
      src={pdfPath}
      style={{
        width: "100vw", // Set width to 100% of the viewport width
        height: "100vh", // Set height to 100% of the viewport height
        border: "none", // Remove border if needed
      }}
      title="PDF Viewer"
    />
  );
}

export default Resume;
