import React from "react";

import { makeStyles, Card, CardHeader, Chip } from "@material-ui/core";

import theme from "../theme";

const useStyles = makeStyles({
  card: {
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2, 1),
    minWidth: "200px",
    width: "75vw",
    maxWidth: "400px",
    //backgroundColor: "#F8FBFE",
    boxShadow: "0px 2px 5px 2px rgba(204, 228, 247, 0.7)",
    borderRadius: "4px",
    [theme.breakpoints.up("xl")]: {
      maxWidth: "500px"
    }
  },
  cardHeader: {
    padding: theme.spacing(2, 3)
  },
  chipContainer: {
    padding: theme.spacing(3)
  },
  chip: {
    margin: "1px"
  }
});

interface ITechStackCardProps {
  title: string;
  tags: string[];
}

export default function TechStackCard(props: ITechStackCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.title}
        className={classes.cardHeader}
      ></CardHeader>
      <div className={classes.chipContainer}>
        {props.tags.map(tag => {
          return (
            <Chip
              label={tag}
              key={tag}
              color="secondary"
              className={classes.chip}
            />
          );
        })}
      </div>
    </Card>
  );
}
