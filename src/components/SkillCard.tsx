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

export interface ISkill {
  title: String;
  descriptionShort: JSX.Element;
  descriptionExtension?: JSX.Element;
  tags: String[];
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

  if (props.skill.descriptionExtension) {
    if (isExpanded) {
      //combine short description with extended description
      description = (
        <>
          {props.skill.descriptionShort}
          {props.skill.descriptionExtension}
        </>
      );
    } else {
      //show short description
      description = (
        <>
          {props.skill.descriptionShort}...
          <Button onClick={handleClick}>weiterlesen</Button>
        </>
      );
    }
  }

  return (
    <Card className={classes.card} raised={true}>
      <CardHeader title={props.skill.title}></CardHeader>
      <CardContent>
        <Typography variant="body1" align="right">
          {description}
        </Typography>
      </CardContent>
      <div className={classes.chipContainer}>
        <Typography variant="body2">Technology Stack</Typography>
        {props.skill.tags.map(tag => {
          return (
            <Chip label={tag} color="secondary" className={classes.chip} />
          );
        })}
      </div>
    </Card>
  );
}
