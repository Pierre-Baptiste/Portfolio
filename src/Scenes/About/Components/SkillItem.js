import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "#654321",
    "&:hover": {
      color: "#001aff"
    },
    height: 140
  },
  imageSkill: {
	maxHeight: 80, 
	maxWidth: 100
  },
  textPaper: {
	marginTop: 12,
	
  },
  containerGrid: {
    marginTop: 5
  }
}));

export default function SkillItem() {
const classes = useStyles();

return (
  <div className={classes.root}>
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={6}
      className={classes.containerGrid}
    >
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://i.imgur.com/A3dDw5U.png"
            title="reactJS"
            alt="reactJS"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>React.JS</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://i.imgur.com/SjyOMQj.png"
            title="JS"
            alt="JavaScript"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>JavaScript</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://i.imgur.com/4duwHvh.png"
            title="HTML/CSS"
            alt="HTML/CSS"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>HTML / CSS</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://i.imgur.com/MBExJ5d.png"
            title="node.js"
            alt="node.js"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>node.js</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://i.imgur.com/0GPJn2L.png"
            title="MongoDb"
            alt="MongoDb"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>Mongo DB</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://i.imgur.com/lrB1pmV.png"
            title="Adobe Photoshop"
            alt="Adobe Photoshop"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>Adobe Photoshop</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://i.imgur.com/D8DU3AH.png"
            title="Adobe Illustrator"
            alt="Adobe Illustrator"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>
            Adobe Illustrator
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://i.imgur.com/ae0gsOa.png"
            title="CatiaV5"
            alt="CatiaV5"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>Catia V5</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://i.imgur.com/xVDKLvr.png"
            title="Python"
            alt="Python"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>Python</Typography>
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper className={classes.paper}>
          <img
            src="https://i.imgur.com/VPCGLdG.png"
            title="Office Suite"
            alt="Office Suite"
            className={classes.imageSkill}
          />
          <Typography className={classes.textPaper}>Office Suite</Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>
);
									 }
									 
									 