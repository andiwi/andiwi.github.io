import React from "react";
import { makeStyles, Grid, Typography, Fab } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import theme from "../theme";

const useStyles = makeStyles({
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

export default function ContactContainer() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.contactContainer}
      direction="column"
      justify="space-between"
    >
      <Typography variant="h2">
        Hast du ein Projekt, eine App oder Idee bei der du meine Unterstützung
        benötigen könntest? Schreibe mir eine kurze Nachricht.
      </Typography>
      <Grid item direction="column" container alignItems="center">
        <Fab color="primary" className={classes.fabLarge}>
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
