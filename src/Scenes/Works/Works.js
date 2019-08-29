import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import WorkCard from "./Components/WorkCard";

import Circle from "@material-ui/icons/Brightness1";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
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
  workCardBox: {
    maxWidth: "950px",
    padding: "0 30px",
    margin: "auto"
  },
  article: {
    color: "secondary",

    padding: "0 20px",
    marginBottom: "10px",
    textAlign: "justify"
  },
  articleTitle: {
    fontFamily: "Roboto",
    fontSize: 20,
    padding: "0 20px",
    marginTop: "40px",
    marginBottom: "10px",
    textAlign: "justify"
  },
  articleEnd: {
    fontFamily: "Roboto",
    fontSize: 20,
    padding: "0 20px",
    marginTop: "60px",
    textAlign: "center",
    color: "#001aff",
    marginBottom: "40px"
  },
  imageElement: {
    maxWidth:"500px",
    width: "100%"
  },
  firstLetter: {
    fontFamily: "unifrakturmaguntia, fantasy",
    fontSize: "50px",
    float: "left",
    lineHeight: "1",
    paddingRight: "7px"
  }
}));

export default function Presentation(props) {
  const classes = useStyles();

  if (props.Language === "English") {
    return (
      <div>
        <Typography align="center" variant="h3" className={classes.title}>
          | 02 : Works |
        </Typography>
        <Box className={classes.subtitleBox}>
          <Typography align="center">
            Here is a showcase of my most relevant projects. They include some
            personal ones as well as some school related ones. You can learn
            more about them by clicking on the "Plus" button, I try to give some
            more details about each one and, in team projects, I focus mainly on
            my input.
          </Typography>
        </Box>
        <Box className={classes.workCardBox} align="center">
          <Grid container className={classes.root} spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={require("./assets/Pb_Bg2.jpg")}
                imageTitle="Picture of myself"
                date="2019"
                title="Personal Website"
                subTitle="Creation of this website"
                description="From the design perspective to the content and purpose of it"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>T</span>
                  his is my personal website. After I started creating it I
                  realized how difficult of a client your self can be. But
                  overall it has been a fun and educational project. I deepened
                  my knowledge of React.js and deployment processes. I also got
                  acquainted with SEO.
                </Typography>
                <Typography className={classes.articleTitle}>
                  #01 - ABOUT THIS PROJECT
                </Typography>
                <Typography className={classes.article}>
                  I assume that in almost every company that I will be applying
                  for a job, there would be a fierce competiton. As it is better
                  to be ready than sorry, I created this website along with my
                  personal branding to showcase my awesome work.
                </Typography>
                <img
                  src={require("./assets/PB_01.jpg")}
                  alt="Landing of website"
                  className={classes.imageElement}
                />
                <Typography className={classes.articleTitle}>
                  #02 - THE PROCESS
                </Typography>
                <Typography className={classes.article}>
                  Conceptualizing and developing started around late June of
                  this year (2019). I started mind-mapping to help break down my
                  brand to it's truest form and from there I started
                  experimenting out ideas. There were a lot of paths for me to
                  chose considering my tastes but day-by-day, I ditched dead end
                  iterations and built off others eventually coming to a
                  conclusion that suited me best.
                  <br />
                  The basis of the wireframe is "Simplicity & Elegance"
                </Typography>
                <img
                  src={require("./assets/Wireframe.png")}
                  alt="Wireframe Landing page"
                  className={classes.imageElement}
                />
                <Typography className={classes.articleTitle}>
                  #03 - FONTS & COLORS
                </Typography>
                <Typography
                  className={classes.article}
                  style={{ fontFamily: "Roboto", textAlign: "right" }}
                >
                  Roboto Bold
                  <br />
                  The quick brown fox jumps over the lazy dog
                  <br />
                  0123456789
                </Typography>
                <Typography className={classes.article}>
                  Monospace
                  <br />
                  The quick brown fox jumps over the lazy dog
                  <br />
                  0123456789
                </Typography>
                <Typography
                  className={classes.article}
                  style={{ textAlign: "right" }}
                >
                  <Circle style={{ color: "#000000" }} /> #000000
                  <br />
                  <Circle style={{ color: "#001aff" }} /> #001aff
                  <br />
                  <Circle style={{ color: "#f0f0f0" }} /> #f0f0f0
                </Typography>
                <Typography className={classes.articleTitle}>
                  #04 - RESPONSIVE DESIGN
                </Typography>
                <img
                  src={require("./assets/Mockup.png")}
                  alt="Mobile responsive"
                  className={classes.imageElement}
                />
                <Typography className={classes.articleEnd}>
                  #THANK YOU FOR READING
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={require("./assets/SKZWork.jpg")}
                imageTitle="SKZ image"
                date="2019"
                title="SKZ"
                subTitle="Annual school ski trip"
                description="In charge of the graphic design and merchandising"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>M</span>
                  ore to come soon...
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={require("./assets/LeafeeWork.png")}
                imageTitle="Leafee Picture"
                date="2018"
                title="Birth of Leafee"
                subTitle="Early days of the startup"
                description="From the Hackathon to the working product and everything in between"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>M</span>
                  ore to come soon...
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={require("./assets/UAIWork.jpg")}
                imageTitle="UAI Team"
                date="2018"
                title="UAI"
                subTitle="Annual school sport competition"
                description="In charge of the graphic design and communication"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>M</span>
                  ore to come soon...
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={require("./assets/DroneWork.jpg")}
                imageTitle="Quadcopter"
                date="2016"
                title="Quadcopter"
                subTitle="Personnal Project"
                description="The math behind an arduino based Flight Controller"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>M</span>
                  ore to come soon...
                </Typography>
              </WorkCard>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  } else {
    return (
      <div>
        <Typography align="center" variant="h3" className={classes.title}>
          | 02 : Travaux |
        </Typography>
        <Box className={classes.subtitleBox}>
          <Typography align="center">
            Voici une vitrine de mes projets les plus pertinents. Il y en a des
            personnels et d'autres liés à l'école. Vous pouvez en apprendre plus
            sur eux en cliquant sur le bouton "Plus", j'essaie de donner plus de
            détails sur chacun d'eux et, dans les projets d'équipe, je me
            concentre principalement sur mon apport.
          </Typography>
        </Box>
        <Box className={classes.workCardBox} align="center">
          <Grid container className={classes.root} spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={require("./assets/Pb_Bg2.jpg")}
                imageTitle="Picture of myself"
                date="2019"
                title="Site personnel"
                subTitle="Réalisation de ce site internet"
                description="Du design à son utilité en passant par son contenu"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>A</span>
                  venir
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={require("./assets/SKZWork.jpg")}
                imageTitle="SKZ image"
                date="2019"
                title="SKZ"
                subTitle="Séjour au ski annuel des A&M"
                description="En charge des créations graphiques et des goodies"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>A</span>
                  venir
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={require("./assets/LeafeeWork.png")}
                imageTitle="Leafee Picture"
                date="2018"
                title="Création de Leafee"
                subTitle="Le commencement de la startup"
                description="Du Hackathon au produit fonctionnel, le périple"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>A</span>
                  venir
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={require("./assets/UAIWork.jpg")}
                imageTitle="UAI Team"
                date="2018"
                title="UAI"
                subTitle="Compétition sportive annuelle des A&M"
                description="En charge des créations graphiques et de la communication"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>A</span>
                  venir
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={require("./assets/DroneWork.jpg")}
                imageTitle="Quadcopter"
                date="2016"
                title="Quadcopter"
                subTitle="Projet personnel"
                description="Les maths derrière un contrôleur de vol basé sur Arduino"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>A</span>
                  venir
                </Typography>
              </WorkCard>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  }
}
