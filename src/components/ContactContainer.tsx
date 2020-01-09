import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import theme from "../theme";
import SectionHeader from "./SectionHeader";
import ContactElement from "./ContactElement";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    padding: theme.spacing(4, 1)
  }
});

export default function ContactContainer() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <SectionHeader>
        <>Alles Spanisch für dich? No hay problema!</>
      </SectionHeader>
      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.5}
        animateOnce={true}
        offset={0}
      >
        <Typography variant="body1" align="center">
          <b>TL;DR</b> Gemeinsam bringen wir deine Ideen und IT Projekte zum
          Erfolg.{" "}
          <span role="img" aria-label="flexed biceps">
            💪
          </span>
        </Typography>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.5}
        animateOnce={true}
        offset={0}
      >
        <ContactElement />
      </ScrollAnimation>
    </Grid>
  );
}
