import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

import { makeStyles, Grid } from "@material-ui/core";
import { useWindowWidth } from "@react-hook/window-size/throttled";

import theme from "../theme";
import SkillCard, { ISkill } from "./SkillCard";

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

const skillWeb: ISkill = {
  title: "Web Development",
  descriptionShort: (
    <>
      Weil Web Development mehr als nur Wordpress ist.
      <br /> <br /> Seit über 5 Jahren entwickle ich
    </>
  ),
  descriptionExtension: (
    <>
      {" "}
      moderne Web Applikationen von A bis Z. Von der Planung und dem Design von
      Benutzererlebnissen, API Schnittstellen und der Impementierung von
      Funktionalitäten bis hin zur kompletten Single Page Web Application setze
      ich Ihre Projekte in die Tat um.
      <br />
      <br></br>Kurz gsagt: <b>Full Stack Development.</b>
    </>
  ),
  tags: [
    "Typescript",
    "CSS3",
    "React",
    "Redux",
    "GraphQL",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "Docker",
    "NPM & Yarn",
    "Continious Integration",
    "API Development",
    "Microservices"
  ]
};

const skillAI: ISkill = {
  title: "AI Development",
  descriptionShort: (
    <>
      Maßgeschneiderte AI & Machine Learning Lösungen. <br /> <br />
      Ich habe mir AI nicht selbst beigebracht sondern
    </>
  ),
  descriptionExtension: (
    <>
      {" "}
      Machine Learning und AI studiert und in forschungsgetriebenen Unternehmen
      entwickelt und angewandt. Vom Konzept bis zur Integration in ihr
      Livesystem generiere ich einen echten Mehrwert aus Ihren Daten.
    </>
  ),
  tags: ["Python", "Numpy", "Tensorflow", "PyTorch", "Scikit-learn", "Conda"]
};

const skillBlockchain: ISkill = {
  title: "Blockchain Development",
  descriptionShort: (
    <>
      Dezentrale Applikationen bilden das neue Internet - das Web 3.0. <br />{" "}
      <br />
      Als Blockchain Enthusiast und
    </>
  ),
  descriptionExtension: (
    <>
      {" "}
      Developer bin ich der perfekte Partner um ihre Blockchain Projekte und
      dApps zu realisieren. Von Businessprozessreview über die Proof-of-Concept
      Erstellung bis hin zur vollständigen dApp Entwicklung setze ich Ihre
      Projekte in die Tat um.
    </>
  ),
  tags: [
    "Solidity",
    "Truffle",
    "Web3",
    "Metamask",
    "Exchange Connections",
    "dApp Development"
  ]
};

const skills: Array<ISkill> = [skillWeb, skillAI, skillBlockchain];

export default function HorizontalScroll() {
  const classes = useStyles();
  const width = useWindowWidth();

  const skillCards: JSX.Element[] = skills.map((skill, index) => {
    return <SkillCard skill={skill} key={index} />;
  });

  return (
    <Grid container justify="center">
      <ScrollContainer
        className={classes.scrollContainer}
        vertical={true}
        horizontal={true}
        hideScrollbars={false}
      >
        {width < 1300 && (
          <ScrollAnimation
            animateIn="bounceInRight"
            duration={1}
            animateOnce={true}
          >
            <div className={classes.container}>
              <div className={classes.element}>{skillCards}</div>
            </div>
          </ScrollAnimation>
        )}
        {width >= 1300 && (
          <div className={classes.container}>
            <div className={classes.element}>{skillCards}</div>
          </div>
        )}
      </ScrollContainer>
    </Grid>
  );
}
