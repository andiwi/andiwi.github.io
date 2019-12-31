import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Img from "react-image";
import TypeItHeader from "./TypeItHeader";
import theme from "../theme";

const useStyles = makeStyles({
  landingContainer: {
    minHeight: "100vh",
    background:
      "linear-gradient( 109.6deg, #cce4f7 11.2%, rgba(237,246,250,1) 100.2% )" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    fallbacks: [
      {
        // @ts-ignore
        background:
          "-webkit-linear-gradient(109.6deg, #cce4f7 11.2%, rgba(237,246,250,1) 100.2% )" /* Chrome 10-25, Safari 5.1-6 */
      },
      { background: theme.palette.primary.main } /* fallback for old browsers */
    ],
    //backgroundImage: "url('otis-redding.png')",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  titleColumn: {
    paddingTop: theme.spacing(6),
    minHeight: "200px"
  },
  paragraphColumn: {
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end"
    }
  },
  imgContainer: {
    marginTop: "auto",
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-end"
    }
  },
  img: {
    borderRadius: "4px",
    boxShadow: "0px 0px 50px 0px rgba(0,0,0,0.5)",
    width: "200px",
    [theme.breakpoints.up("sm")]: {
      width: "300px"
    }
  },
  contactContainer: {
    height: "100vh",
    padding: theme.spacing(1)
  },
  mailTo: {
    color: theme.palette.primary.contrastText
  },
  fabLarge: {
    width: 80,
    height: 80,
    "& .MuiSvgIcon-root": {
      fontSize: "2.5rem"
    }
  }
});

export default function LandingPageContainer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.landingContainer} direction="column">
      <Grid item className={classes.titleColumn}>
        <TypeItHeader />
      </Grid>
      <Grid item container className={classes.imgContainer}>
        <ScrollAnimation
          animateIn="fadeIn"
          duration={0.5}
          animateOnce={true}
          offset={0}
        >
          <Img src="profile_400x400.jpg" className={classes.img} />
        </ScrollAnimation>
      </Grid>
      <Grid item className={classes.paragraphColumn} container>
        <ScrollAnimation
          animateIn="fadeIn"
          duration={0.5}
          animateOnce={true}
          offset={0}
        >
          <Typography variant="body1">
            <b>TL;DR:</b> Ich bringe deine IT-Projekte <i>zielstrebig</i> und{" "}
            <i>effizient</i> zum Erfolg.
          </Typography>
        </ScrollAnimation>
      </Grid>
    </Grid>
  );
}
