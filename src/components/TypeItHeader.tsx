import React, { useEffect } from "react";
import TypeIt from "typeit";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  text: {
    wordBreak: "break-all"
  }
});

export default function TypeItHeader() {
  const classes = useStyles();

  useEffect(() => {
    new TypeIt("#typeItElement", {
      strings: [
        "Web </br> Developer",
        "AI </br> Engineer",
        "Blockchain </br> Expert",
        "Entrepreneur",
        "Andreas </br> Wittmann"
      ],
      speed: 70,
      lifeLike: true,
      cursor: true,
      breakLines: false,
      loop: false,
      waitUntilVisible: false,
      nextStringDelay: 1100
    }).go();
  }, []);

  return (
    <Typography
      variant="h1"
      id="typeItElement"
      className={classes.text}
    ></Typography>
  );
}
