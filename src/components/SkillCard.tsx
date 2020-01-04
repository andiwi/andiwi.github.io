import React, { useState } from "react";

import {
  makeStyles,
  Button,
  Card,
  CardHeader,
  CardContent,
  Chip,
  Typography
} from "@material-ui/core";

import theme from "../theme";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2, 1),
    minWidth: "200px",
    width: "75vw",
    maxWidth: "400px",
    backgroundColor: "#F8FBFE",
    boxShadow: "0px 2px 5px 2px rgba(204, 228, 247, 0.7)",
    borderRadius: "4px",
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

export interface ISkill {
  title: string;
  descriptionShort: JSX.Element;
  descriptionExtension?: JSX.Element;
  tags: string[];
}

interface ISkillCardProps {
  skill: ISkill;
}

export default function SkillCard(props: ISkillCardProps) {
  const classes = useStyles();
  const [isExpanded, setExpanded] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setExpanded(true);
  };

  let description: JSX.Element = props.skill.descriptionShort;

  let showTags: boolean = true; //always show tags if there is no descriptionExtension
  if (props.skill.descriptionExtension) {
    if (isExpanded) {
      //combine short description with extended description
      description = (
        <>
          {props.skill.descriptionShort}
          {props.skill.descriptionExtension}
        </>
      );
      showTags = true;
    } else {
      //show short description
      description = (
        <>
          {props.skill.descriptionShort}...
          <Button onClick={handleClick}>weiterlesen</Button>
        </>
      );
      showTags = false;
    }
  }

  return (
    <Card className={classes.card}>
      <CardHeader title={props.skill.title}></CardHeader>
      <CardContent>
        <Typography variant="body1" align="right">
          {description}
        </Typography>
      </CardContent>
      {showTags && (
        <div className={classes.chipContainer}>
          <Typography variant="body2">Technology Stack</Typography>
          {props.skill.tags.map(tag => {
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
      )}
    </Card>
  );
}
