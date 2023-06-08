import React from "react";
import "./CardItem.css";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Button,
  Tooltip,
  Divider,
} from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { GoEye } from "react-icons/go";

function CardItem({ project }) {
  const { id, title, description, image, tags, sourceCode, visit } = project;

  return (
    <Card className="card" key={id}>
      <CardMedia component="img" height="250" image={image} alt={title} />

      <CardContent sx={{ justifyContent: "center" }}>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {description}
        </Typography>
        <br />
        <Divider />
        <Typography gutterBottom variant="h6" component="div">
          Stack
        </Typography>
        <Typography variant="h8" color="text.secondary">
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {tags?.map((tag, tagId) => (
              <Grid item xs={6} lg={6} key={tagId}>
                {tag}
              </Grid>
            ))}
          </Grid>
        </Typography>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "space-evenly" }}>
        <Tooltip title="View code">
          <Button onClick={() => window.open(sourceCode, "_blank")}>
            <FaGithub size={25} style={{ fill: "black" }} />
          </Button>
        </Tooltip>

        <Tooltip title="View Project">
          <Button onClick={() => window.open(visit, "_blank")}>
            <GoEye size={25} style={{ fill: "black" }} />
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default CardItem;
