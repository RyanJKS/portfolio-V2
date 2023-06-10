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
      <CardMedia className="img-container">
        <img src={image} alt={title} />
      </CardMedia>

      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <br />
        <Typography gutterBottom variant="body2" color="text.secondary">
          {description}
        </Typography>

        <Divider color="grey" />
        <Typography gutterBottom variant="h6" component="div">
          Stack
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {tags?.map((tag, tagId) => (
            <Grid item xs={6} lg={6} key={tagId}>
              <Typography variant="body2" color="text.secondary">
                {tag}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <Divider color="black" />
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
