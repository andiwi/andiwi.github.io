import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import ScrollContainer from "react-indiana-drag-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import "animate.css/animate.min.css";
import TechStackCard from "./TechStackCard";
import theme from "../theme";

const useStyles = makeStyles({
  container: {
    minHeight: "100vh",
    padding: theme.spacing(1)
  },
  scrollAnimationElementWrapper: {
    display: "flex",
    flexWrap: "nowrap"
  }
});

const webTags = [
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
];

const aiTags = [
  "Python",
  "Numpy",
  "Tensorflow",
  "PyTorch",
  "Scikit-learn",
  "Conda"
];

const blockchainTags = [
  "Solidity",
  "Truffle",
  "Web3",
  "Metamask",
  "Exchange Connections",
  "dApp Development"
];

export default function TechstackContainer() {
  const classes = useStyles();
  const width = useWindowWidth();

  const techStackCards = (
    <>
      <TechStackCard title="Web Development" tags={webTags} />
      <TechStackCard title="AI Development" tags={aiTags} />
      <TechStackCard title="Blockchain Development" tags={blockchainTags} />
    </>
  );

  let content;

  if (width < 1300) {
    //render scroll container
    content = (
      <ScrollContainer
        vertical={false}
        horizontal={true}
        hideScrollbars={false}
      >
        <ScrollAnimation
          animateIn="bounceInRight"
          duration={1}
          animateOnce={true}
        >
          <div className={classes.scrollAnimationElementWrapper}>
            {techStackCards}
          </div>
        </ScrollAnimation>
      </ScrollContainer>
    );
  } else {
    //render cards without scroll container
    content = (
      <ScrollAnimation
        animateIn="fadeIn"
        duration={0.5}
        animateOnce={true}
        offset={0}
      >
        <Grid container>{techStackCards}</Grid>
      </ScrollAnimation>
    );
  }

  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      justify="space-between"
    >
      <Grid item xs={11} md={10} lg={8}>
        <ScrollAnimation
          animateIn="fadeIn"
          duration={0.5}
          animateOnce={true}
          offset={0}
        >
          <Typography variant="h2">
            Du bist einer von uns{" "}
            <span role="img" aria-label="nerd">
              🤓
            </span>
            und möchtest meinen Techstack kennenlernen? Voilà:
          </Typography>
        </ScrollAnimation>
      </Grid>
      <Grid container justify="center">
        {content}
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}
