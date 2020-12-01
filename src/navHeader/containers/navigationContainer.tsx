import React, { Component } from "react";
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    h1: {
      fontFamily: "Vollkorn SC",
      fontSize: 48,
    },
    h2: {
      fontFamily: "Vollkorn SC",
      fontSize: '24 !important',
    },
    titleGrid: {
      padding: "0 5%",
    },
  })
);

export default function NavPage() {
  const classes = useStyles();
  return (
    <Grid container xs={12}>
      <Grid
        item
        container
        xs={6}
        justify={"flex-start"}
        className={classes.titleGrid}
      >
        <Typography className={classes.h2}>Software Developer</Typography>
      </Grid>
      <Grid
        item
        container
        xs={6}
        justify={"flex-end"}
        className={classes.titleGrid}
      >
        <Grid item>
          <Link to="/">
            <Button className={classes.h2}>Home</Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/about">
            <Button className={classes.h2}>About</Button>
          </Link>
        </Grid>
      </Grid>
      <Grid item container xs={12} justify={"center"}>
        <Typography className={classes.h1}>Paolo Majerano</Typography>
      </Grid>
    </Grid>
  );
}
