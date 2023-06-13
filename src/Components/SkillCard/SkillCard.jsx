import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function SkillCard({ Skill }) {
  const { stack, items } = Skill;
  return (
    <Card
      sx={{
        minHeight: 730,
        minWidth: 300,
        textAlign: "center",
        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
      }}
    >
      <CardContent>
        <Typography variant="h4" component="div">
          {stack}
        </Typography>
        <br />

        {items?.map((skill, index) => (
          <div key={index}>
            <a
              href={
                skill.url
                  ? skill.url
                  : "https://github.com/RyanJKS/portfolio-v2"
              }
              target="_blank"
              rel="noreferrer"
            >
              <img src={skill.logo} alt={skill.iconName} />
            </a>
            <h4 key={index + 100}>{skill.iconName}</h4>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default SkillCard;
