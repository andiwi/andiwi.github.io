import React from "react";
import { makeStyles, Grid, Typography, Fab } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import theme from "../theme";

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

export default function AboutMeContainer() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.container}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} md={10} lg={8}>
        <ScrollAnimation
          animateIn="fadeIn"
          duration={0.5}
          animateOnce={true}
          offset={0}
        >
          <Typography variant="body1" align="center">
            Ich habe Startups in den Sand gesetzt, mich von Managern großer
            Unternehmen quälen lassen und Software gebaut die niemand verwendet.
            Ich habe unzählige Webseiten und Webapps erstellt, AI für autonomes
            Fahren entwickelt und Blockchain Anwendungen geschrieben.
            <br />
            <br />
            Die Uni zwang mich Konzepte bis ins kleinste Detail zu lernen und zu
            verstehen. Das kann ich auch heute noch. Ich liebe es neue
            Technologien zu lernen und Trends zu verfolgen. Ich bin ein Nerd für
            den AI und Blockchain nicht nur Fremdwörter sind.
            <br />
            <br />
            Und ich bin sowas von bereit dein nächstes Projekt in die Realität
            umzusetzen! Du auch?
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
              <a
                className={classes.mailTo}
                href="mailto:mail@andreaswittmann.com"
              >
                mail@andreaswittmann.com
              </a>
            </Typography>
          </Grid>
        </ScrollAnimation>
      </Grid>
    </Grid>
  );
}
