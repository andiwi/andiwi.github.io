import React from "react";
import { makeStyles, Grid, Hidden } from "@material-ui/core";
import ScrollContainer from "react-indiana-drag-scroll";
import ScrollAnimation from "react-animate-on-scroll";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import "animate.css/animate.min.css";
import TechStackCard from "./TechStackCard";
import SectionHeader from "./SectionHeader";
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
  "Javascript (ES5/ES6/ES7)",
  "CSS3",
  "HTML5",
  "React",
  "JSS",
  "SCSS",
  "Redux",
  "GraphQL",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "NPM & Yarn",
  "NGINX",
  "Continious Integration",
  "Jenkins",
  "API Development",
  "RESTful",
  "Microservices"
];

const aiTags = [
  "Python",
  "NumPy",
  "Matplotlib",
  "Keras",
  "Tensorflow",
  "PyTorch",
  "Scikit-learn",
  "Deep Learning",
  "Neural Networks",
  "Random Forests",
  "Support Vector Machines (SVM)",
  "Gradient Boosting",
  "Principal Component Analysis (PCA)",
  "Image Processing",
  "Semantic Segmentation",
  "Conda"
];

const blockchainTags = [
  "Solidity",
  "Truffle",
  "Web3",
  "Metamask",
  "Exchange Connections",
  "dApp Development",
  "Smart Contracts",
  "Ethereum"
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
      alignItems="center"
    >
      <SectionHeader>
        <>
          Du bist einer von uns{" "}
          <span role="img" aria-label="nerd">
            🤓
          </span>{" "}
          und möchtest meinen Techstack kennenlernen? Voilà:
        </>
      </SectionHeader>
      <Grid container justify="center">
        {content}
      </Grid>
      <Hidden smDown>
        <Grid item></Grid>
      </Hidden>
    </Grid>
  );
}
