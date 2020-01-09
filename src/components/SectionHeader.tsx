import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

import theme from "../theme";

const useStyles = makeStyles({
  header: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "center"
    }
  }
});

interface ISectionHeader {
  children: JSX.Element | JSX.Element[];
}

export default function SectionHeader(props: ISectionHeader) {
  const classes = useStyles();

  return (
    <Grid item xs={11} md={10} lg={8}>
      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.5}
        animateOnce={true}
        offset={0}
      >
        <Typography variant="h2" className={classes.header}>
          {props.children}
        </Typography>
      </ScrollAnimation>
    </Grid>
  );
}
