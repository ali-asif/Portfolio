import React from "react";

import { makeStyles, Box, Typography, Grid, Paper } from "@material-ui/core";

import dev from "../images/dev.png";

import useWebAnimations, { tada } from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContext: "center",
    height: "90.8vh",
  },
  paper: {
    textAlign: "center",
    padding: theme.spacing(2),
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    border: "none",
    boxShadow: "none",
    color: "inherit",
    background: "inherit",
    "& h2": {
      color: "#fff",
      fontSize: "3.9rem",
      fontFamily: "Georgia,Times New Roman,Times,serif",
      marginBottom: theme.spacing(3),
    },
    "& p": {
      color: "#fff",
      fontSize: "1.1rem",
    },
  },
}));

const Dev = () => {
  const classes = useStyles();

  const { keyframes, timing } = tada;
  const d = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 500,
      duration: 5000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });

  return (
    <Box component="div" className={classes.root}>
      <Grid container>
        <Grid item md>
          <Paper className={classes.paper}>
            <Typography variant="h2">DevOps</Typography>
            <Typography component="p">
            DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.DevOps is complementary with Agile software development; several DevOps aspects came from Agile methodology.
            </Typography>
          </Paper>
        </Grid>
        <Grid item md>
          <Paper className={classes.paper} style={{ marginTop: "110px" }}>
            <img
              src={dev}
              ref={d.ref}
              alt="devOps"
              width="100%"
              height="70%"
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dev;
