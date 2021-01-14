import React from "react";

import { makeStyles, Box, Typography, Grid, Paper } from "@material-ui/core";

import logo1 from "../images/logo1.png";

import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";

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

const Web = () => {
  const classes = useStyles();

  const { keyframes, timing } = heartBeat;
  const logo = useWebAnimations({
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
          <Paper className={classes.paper} style={{ marginTop: "150px" }}>
            <img
              src={logo1}
              ref={logo.ref}
              alt="logo"
              height="140%"
              width="70%"
            />
          </Paper>
        </Grid>
        <Grid item md>
          <Paper className={classes.paper}>
            <Typography variant="h2">Website Developement</Typography>
            <Typography component="p">
              We Provide web development services to our clients and working on latest languages Like react and typescript.
            </Typography>
             <p></p>
                <a href="."  >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                My Work
                </a>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Web
