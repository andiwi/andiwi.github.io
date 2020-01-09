import React from "react";
import { makeStyles, Grid, Typography, Fab } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import theme from "../theme";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    padding: theme.spacing(1)
  },
  contactContainer: {
    marginTop: theme.spacing(4)
  },
  mailTo: {
    color: theme.palette.primary.contrastText
  },
  fabLarge: {
    marginTop: theme.spacing(1),
    width: 65,
    height: 65,
    "& .MuiSvgIcon-root": {
      fontSize: "2rem"
    }
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
      <Typography variant="body1" align="center">
        <b>TL;DR</b> Gemeinsam bringen wir deine Ideen und IT Projekte zum
        Erfolg.{" "}
        <span role="img" aria-label="flexed biceps">
          💪
        </span>
      </Typography>
      <Grid
        item
        direction="column"
        container
        alignItems="center"
        className={classes.contactContainer}
      >
        <Typography variant="h3">Let's talk!</Typography>
        <Fab
          color="secondary"
          className={classes.fabLarge}
          href="mailto:mail@andreaswittmann.com"
        >
          <EmailOutlinedIcon />
        </Fab>
        <Typography variant="body1" className={classes.mailTo}>
          <a className={classes.mailTo} href="mailto:mail@andreaswittmann.com">
            mail@andreaswittmann.com
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
}
