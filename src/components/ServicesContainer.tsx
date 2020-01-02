import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import HorizontalScroll from "./HorizontalScroll";
import theme from "../theme";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    padding: theme.spacing(1, 0)
  },
  title: {
    padding: theme.spacing(0, 1)
  }
});

export default function ServicesContainer() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.container}
      justify="space-between"
    >
      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.5}
        animateOnce={true}
        offset={0}
      >
        <Typography variant="h2" className={classes.title}>
          Skills & Services
        </Typography>
      </ScrollAnimation>
      <HorizontalScroll />
    </Grid>
  );
}
