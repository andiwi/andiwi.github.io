import React from "react";
import { makeStyles, Grid, Typography, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";
import theme from "../theme";

const useStyles = makeStyles({
  container: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1, 1, 0, 1)
  },
  link: {
    color: theme.palette.secondary.light
  }
});

export default function Footer() {
  const classes = useStyles();

  const githubOnClickHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    window.location.href = "https://github.com/andiwi";
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={6}>
        <IconButton
          aria-label="link to github profile"
          onClick={githubOnClickHandler}
        >
          <GitHubIcon />
        </IconButton>
      </Grid>
      <Grid item xs={6} container alignItems="center" justify="flex-end">
        <Typography variant="body2" align="right">
          <Link to="/impressum" className={classes.link}>
            Impressum & Datenschutz
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
