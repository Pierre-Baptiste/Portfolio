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
    width: "100%",
    display: "block",
    margin: "auto"
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
                subTitle="Individual"
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
                subTitle="Team member"
                description="Annual school ski trip gathering 1400 students"
              >
                <Typography className={classes.article}>
                  <span className={classes.firstLetter}>O</span>
                  ne week at the winter sports for Arts & Métiers engineering
                  students that took place from january the 19th to the 26th of
                  2018. Skiozarts (SKZ) celebrated its 30th edition last year
                  with the aim of perpetuating a major challenge: bringing 1400
                  students together in a major alpine resort in the middle of
                  January, which is the largest student ski event in Europe.
                </Typography>
                <Typography className={classes.article}>
                  Important figures:
                  <ul>
                    <li>Budget of €600k</li>
                    <li>Organizing team of 20 people</li>
                    <li>9 months of planning</li>
                  </ul>
                </Typography>
                <Typography className={classes.article}>
                  I was responsible for all the graphical aspect of the event.
                  From establishing the design guidelines to the design of the
                  merchandizing. My most relevant work will be presented below.
                </Typography>
                <Typography className={classes.articleTitle}>
                  #01 - THE LOGO
                </Typography>
                <img
                  src={require("./assets/LogoLines.png")}
                  alt="Logo with construction lines"
                  className={classes.imageElement}
                  style={{ marginTop: "30px", marginBottom: "30px" }}
                />
                <Typography className={classes.article}>
                  Traditionnaly, the logo contains 3 summits embeded in it. With
                  this constraint in mind, I first started to work on the
                  typography. The straight lines, harsh corners and fat typo
                  remind us of the steepness of the mountains and its
                  grandiosity while the roundness of the "S" sweetens the whole.
                </Typography>
                <Typography className={classes.article}>
                  Another challenge was to integrate the 30th edition milestone
                  sign. I choose the negative technique to make it discret but
                  still noticable.
                </Typography>
                <Typography className={classes.articleTitle}>
                  #02 - COLORS
                </Typography>
                <Typography className={classes.article}>
                  In the past few years, the event wore mostly the blue color as
                  it is often associated with the cold icy mountain. To change
                  that and set the difference for the 30th edition, I went down
                  a riskier path with a red to pink gradient.
                </Typography>
                <Typography className={classes.article}>
                  <Circle style={{ color: "#d32027" }} /> #d32027
                  <br />
                  <Circle style={{ color: "#e33c96" }} /> #e33c96
                  <br />
                  <Circle style={{ color: "#d5d8dc" }} /> #d5d8dc
                </Typography>
                <Typography className={classes.articleTitle}>
                  #03 - TRAILER
                </Typography>
                <Typography className={classes.article}>
                  The making of the trailer was my main challenge as I've only
                  had little experience with video editing before. But it also
                  provided me with a project to learn how to.
                </Typography>
                <Typography className={classes.article}>
                  I jumped into it head first, experimenting a lot. After long
                  hours, I was really proud of the result.
                </Typography>
                <Typography className={classes.article}>
                  The lenght of the video was reduced by 20% from the precedent
                  one to make it more dynamic. It needed to be in 5 parts which
                  are :
                  <ul>
                    <li>Teasing</li>
                    <li>Meet the team</li>
                    <li>Anouncement of the location</li>
                    <li>Day-activities</li>
                    <li>Night-activities</li>
                  </ul>
                </Typography>
                <iframe
                  title="SKZ 2019 Trailer"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/cDr8XHTkZVI"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <Typography className={classes.articleTitle}>
                  #04 - MERCHANDISING
                </Typography>
                <Typography className={classes.article}>
                  Each participant receives a bag full of personalised objects
                  such as:
                  <ul>
                    <li>Sweatshirt</li>
                    <li>Card deck</li>
                    <li>Patch</li>
                    <li>Cup</li>
                    <li>External battery</li>
                  </ul>
                </Typography>
                <Typography className={classes.article}>
                  My job was two sided. Indeed, on one side I negociated the
                  contract with the provider to get what we wanted into the
                  fixed budget of €30k and to design the visuals for each one.
                </Typography>
                <Typography className={classes.article}>
                  Here is an exemple of what the patch looked like:
                </Typography>
                <img
                  src={require("./assets/EcussonSKZ.png")}
                  alt="Ecusson SKZ"
                  className={classes.imageElement}
                  style={{
                    width: "300px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <Typography className={classes.articleTitle}>
                  #05 - VISUALS
                </Typography>
                <img
                  src={require("./assets/MaskSKZ.jpg")}
                  alt="Mask Logo"
                  className={classes.imageElement}
                  style={{
                    width: "300px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={require("./assets/TBKTourSKZ.jpg")}
                  alt="TBK Tour visual"
                  className={classes.imageElement}
                  style={{
                    width: "500px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={require("./assets/PrixSKZ.jpg")}
                  alt="Price Visual SKZ"
                  className={classes.imageElement}
                  style={{
                    width: "500px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={require("./assets/ActivitiesSKZ.jpg")}
                  alt="Activities of SKZ"
                  className={classes.imageElement}
                  style={{
                    width: "500px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <img
                  src={require("./assets/LogoSKZRound.png")}
                  alt="Final logo"
                  className={classes.imageElement}
                  style={{
                    width: "300px",
                    marginTop: "30px",
                    marginBottom: "30px"
                  }}
                />
                <Typography className={classes.articleEnd}>
                  #THANK YOU FOR READING
                </Typography>
              </WorkCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WorkCard
                image={require("./assets/LeafeeWork.png")}
                imageTitle="Leafee Picture"
                date="2018"
                title="Birth of Leafee"
                subTitle="One of 4 Co-founders"
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
                subTitle="team member"
                description="Annual school sport competition gathering 1000 students"
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
