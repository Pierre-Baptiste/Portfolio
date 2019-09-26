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
    maxWidth: "1200px",
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
          <Typography align="center">To be added</Typography>
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
            To be added
          </Typography>
        </Box>
		</div>
    );
  }
}
