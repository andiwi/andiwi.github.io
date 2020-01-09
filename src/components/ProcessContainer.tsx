import React from "react";
import {
  Grid,
  makeStyles,
  Hidden,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import SectionHeader from "./SectionHeader";

import theme from "../theme";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    padding: theme.spacing(1, 0)
  },
  title: {
    padding: theme.spacing(0, 1)
  },
  heading: {}
});

export default function ServicesContainer() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      className={classes.container}
      justify="space-between"
      alignItems="center"
    >
      <SectionHeader>
        <>Mit diesen Schritten bringen wir dein Projekt zum Erfolg</>
      </SectionHeader>
      <Grid item xs={11} md={10} lg={8}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography className={classes.heading}>
              1. Erstgespräch und Kennenlernen
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Bei einem ersten get-together erzählst du mir von deiner
              Projektidee und Vision. Gemeinsam klären wir Erwartungen und
              definieren Ziele. Selbstverständlich kostenlos.{" "}
              <span role="img" aria-label="wink">
                😉
              </span>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography className={classes.heading}>
              2. Start des Projekts
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Innerhalb kürzester Zeit stelle ich ein speziell auf deine
              Bedürfnisse zugeschnittenes Angebot zusammen. Mit deinem:{" "}
              <b>
                <i>Go!</i>
              </b>{" "}
              lege ich los.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography className={classes.heading}>
              3. Agile Sprints
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Rom wurde nicht an einem Tag gebaut. Dein Projekt auch nicht. Doch
              du kannst zusehen wie es Stück für Stück wächst! In kurzen
              Iterationen bleiben wir agil, können uns austauschen und du
              bleibst ständig up-to-date.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <Typography className={classes.heading}>4. Launch time!</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Es ist Zeit dein Projekt online zu stellen! Ich stehe dir bei
              diesem Schritt natürlich zur Seite und unterstütze dich, bis alles
              perfekt ist.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
      <Hidden smDown>
        <Grid item></Grid>
      </Hidden>
    </Grid>
  );
}
