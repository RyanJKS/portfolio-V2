import React from "react";
import "./Projects.css";
import AppWrap from "../../Wrapper/AppWrap/AppWrap";
import BackgroundCard from "../../Wrapper/BackgroundCard/BackgroundCard";
import CardItem from "../../Components/CardItem/CardItem";
import { ProjectsList } from "../../Data/ProjectList";

import Grid from "@mui/material/Grid";

function Projects() {
  return (
    <>
      <h2 className="project-page-title">Projects</h2>
      <Grid container spacing={4}>
        {ProjectsList?.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <CardItem project={project} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default AppWrap(BackgroundCard(Projects), "Projects");
