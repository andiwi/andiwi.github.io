import React from "react";
import { makeStyles, Grid, Typography, Fab } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import theme from "../theme";

const useStyles = makeStyles({
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

export default function ContactElement() {
  const classes = useStyles();

  return (
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
  );
}
