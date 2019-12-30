import React, { useEffect } from "react";
import TypeIt from "typeit";
import { Typography } from "@material-ui/core";

export default function TypeItHeader() {
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

  return <Typography variant="h1" id="typeItElement"></Typography>;
}
