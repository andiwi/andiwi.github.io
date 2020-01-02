import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import {
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  Chip,
  Grid,
  Typography
} from "@material-ui/core";
import { useWindowWidth } from "@react-hook/window-size/throttled";

import theme from "../theme";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "nowrap"
  },
  element: {
    flex: "0 0 auto",
    display: "flex"
  },
  navArrowLeft: {
    marginLeft: theme.spacing(1)
  },
  navArrowRight: {
    marginRight: theme.spacing(1)
  },
  scrollContainer: {
    padding: theme.spacing(2, 0)
  },
  card: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(1, 2),
    minWidth: "200px",
    width: "75vw",
    maxWidth: "400px",
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("xl")]: {
      maxWidth: "500px"
    }
  },
  chipContainer: {
    marginTop: "auto",
    padding: theme.spacing(3)
  },
  chip: {
    margin: "1px"
  }
});

export default function HorizontalScroll() {
  const classes = useStyles();
  const width = useWindowWidth();

  let children: JSX.Element[] = [];
  children.push(
    <Card className={classes.card} raised={true}>
      <CardHeader title="Web Development"></CardHeader>
      <CardContent>
        <Typography variant="body1" align="right">
          Weil Web Development mehr als nur Wordpress ist. <br /> <br /> Seit
          über 5 Jahren entwickle ich moderne Web Applikationen von A bis Z. Von
          der Planung und dem Design von Benutzererlebnissen, API Schnittstellen
          und der Impementierung von Funktionalitäten bis hin zur kompletten
          Single Page Web Application setze ich Ihre Projekte in die Tat um.
          <br />
          <br></br>Kurz gsagt: <b>Full Stack Development.</b>
        </Typography>
      </CardContent>
      <div className={classes.chipContainer}>
        <Typography variant="body2">Technology Stack</Typography>
        <Chip
          label="JavaScript (ES5/ES6/ES7+)"
          color="secondary"
          className={classes.chip}
        />
        <Chip label="Typescript" color="secondary" className={classes.chip} />
        <Chip label="CSS3 (&SCSS)" color="secondary" className={classes.chip} />
        <Chip label="React" color="secondary" className={classes.chip} />
        <Chip label="Redux" color="secondary" className={classes.chip} />
        <Chip label="GraphQL" color="secondary" className={classes.chip} />
        <Chip label="Node.js" color="secondary" className={classes.chip} />
        <Chip label="Express.js" color="secondary" className={classes.chip} />
        <Chip label="MongoDB" color="secondary" className={classes.chip} />
        <Chip label="SQL" color="secondary" className={classes.chip} />
        <Chip label="Docker" color="secondary" className={classes.chip} />
        <Chip label="NPM & Yarn" color="secondary" className={classes.chip} />
        <Chip
          label="Continious Integration"
          color="secondary"
          className={classes.chip}
        />
        <Chip
          label="API Development"
          color="secondary"
          className={classes.chip}
        />
        <Chip
          label="Microservices"
          color="secondary"
          className={classes.chip}
        />
      </div>
    </Card>
  );
  children.push(
    <Card className={classes.card} raised={true}>
      <CardHeader title="AI Development"></CardHeader>
      <CardContent>
        <Typography variant="body1" align="right">
          Maßgeschneiderte AI & Machine Learning Lösungen. <br /> <br />
          Ich habe mir AI nicht selbst beigebracht sondern studiert und in
          forschungsgetriebenen Unternehmen entwickelt und angewandt. Vom
          Konzept bis zur Integration in ihr Livesystem generiere ich einen
          echten Mehrwert aus Ihren Daten.
        </Typography>
      </CardContent>
      <div className={classes.chipContainer}>
        <Typography variant="body2">Technology Stack</Typography>
        <Chip label="Python" color="secondary" className={classes.chip} />
        <Chip label="Numpy" color="secondary" className={classes.chip} />
        <Chip label="Tensorflow" color="secondary" className={classes.chip} />
        <Chip label="PyTorch" color="secondary" className={classes.chip} />
        <Chip label="Scikit-learn" color="secondary" className={classes.chip} />
        <Chip label="Conda" color="secondary" className={classes.chip} />
      </div>
    </Card>
  );
  children.push(
    <Card className={classes.card} raised={true}>
      <CardHeader title="Blockchain Development"></CardHeader>
      <CardContent>
        <Typography variant="body1" align="right">
          Dezentrale Applikationen bilden das neue Internet - das Web 3.0.{" "}
          <br /> <br />
          Als Blockchain Enthusiast und Developer bin ich der perfekte Partner
          um ihre Blockchain Projekte und dApps zu realisieren. Von
          Businessprozessreview über die Proof-of-Concept Erstellung bis hin zur
          vollständigen dApp Entwicklung setze ich Ihre Projekte in die Tat um.
        </Typography>
      </CardContent>
      <div className={classes.chipContainer}>
        <Typography variant="body2">Technology Stack</Typography>
        <Chip label="Solidity" color="secondary" className={classes.chip} />
        <Chip label="Truffle" color="secondary" className={classes.chip} />
        <Chip label="Web3" color="secondary" className={classes.chip} />
        <Chip label="Metamask" color="secondary" className={classes.chip} />
        <Chip
          label="Exchange Connections"
          color="secondary"
          className={classes.chip}
        />
        <Chip
          label="dApp Development"
          color="secondary"
          className={classes.chip}
        />
      </div>
    </Card>
  );
  const childElements: JSX.Element[] = children.map((child, index: number) => {
    const key = "child_" + index;
    return (
      <div className={classes.element} key={key}>
        {child}
      </div>
    );
  });

  return (
    <Grid container justify="center">
      <ScrollContainer
        className={classes.scrollContainer}
        vertical={true}
        horizontal={true}
        onScroll={(...args: any[]) => {
          console.log("onScroll", args);
        }}
        hideScrollbars={false}
      >
        {width < 1300 && (
          <ScrollAnimation
            animateIn="bounceInRight"
            duration={1}
            animateOnce={true}
          >
            <div className={classes.container}>{childElements}</div>
          </ScrollAnimation>
        )}
        {width >= 1300 && (
          <div className={classes.container}>{childElements}</div>
        )}
      </ScrollContainer>
    </Grid>
  );
}
