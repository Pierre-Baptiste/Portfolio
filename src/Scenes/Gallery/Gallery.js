import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "./components/Grid"

import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper
  },
  title: {
    marginTop: "30px",
    marginBottom: "30px",
    fontWeight: "700",
    fontSize: "27px"
  },
  subtitleBox: {
    maxWidth: "800px",
    padding: "0 30px",
    margin: "auto",
    marginBottom: "60px"
  },
  imagebox: {
    maxWidth: "1000px",
    margin: "auto"
  }
}));

export default function About(props) {
  const classes = useStyles();

  if (props.Language === "English") {
    return (
      <div>
        <Typography align="center" variant="h3" className={classes.title}>
          | 04 : Gallery |
        </Typography>
        <Box className={classes.subtitleBox}>
          <Typography align="center">
            Sometimes I take surprisingly good/cool pictures, other times I have
            a little fun with computer art... Whatever it is, it falls here, for
            the world to see!
          </Typography>
        </Box>
        <Box className={classes.imagebox}>
          <Grid />
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <Typography align="center" variant="h3" className={classes.title}>
          | 04 : Gallerie |
        </Typography>
        <Box className={classes.subtitleBox}>
          <Typography align="center">
            De temps en temps je prends des photos étonnamment bonnes/cool,
            d'autres fois je m'amuse avec l'art digital.... Quoi que ce soit, ça
            tombe ici!
          </Typography>
        </Box>
        <Box className={classes.imagebox}>
          <Grid />
        </Box>
      </div>
    );
  }
}
