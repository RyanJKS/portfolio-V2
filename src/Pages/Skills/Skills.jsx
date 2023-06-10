import React from "react";
import "./Skills.css";
import AppWrap from "../../Wrapper/AppWrap/AppWrap";
import BackgroundCard from "../../Wrapper/BackgroundCard/BackgroundCard";
import SkillCard from "../../Components/SkillCard/SkillCard";
import { Skillset } from "../../Data/Skillset";
import Grid from "@mui/material/Grid";

function Skills() {
  return (
    <>
      <div className="page-title">Skills</div>
      <Grid container spacing={4}>
        {Skillset?.map((skill, index) => (
          <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
            <SkillCard Skill={skill} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default AppWrap(BackgroundCard(Skills), "Skills", "white");
