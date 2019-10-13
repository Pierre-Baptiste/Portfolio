import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import ListItemElement from "./Components/ListItemElement";
import ImageBox from "./Components/ImageBox";
import SkillItem from "./Components/SkillItem";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

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
	workCardBox: {
		maxWidth: "950px",
		padding: "0 30px",
		margin: "auto"
	},
	categoryTitle: {
		fontFamily: "Roboto"
	},
	lastcategoryTitle: {
		marginTop: "30px"
	}
}));

export default function About(props) {
	const classes = useStyles();

	if (props.Language === "English") {
		return (
      <div>
        <Typography align="center" variant="h3" className={classes.title}>
          | 03 : About me |
        </Typography>
        <Box className={classes.subtitleBox}>
          <Typography align="center">
            Want to learn more about my career path and education? Here you will
            find everything you would want to know about it.
          </Typography>
        </Box>
        <Box className={classes.workCardBox} align="left">
          <Typography className={classes.categoryTitle} variant="h4">
            Work Experience
          </Typography>
          <List className={classes.root}>
            <ListItemElement
              image={"https://i.imgur.com/hY0BcdK.png"}
              imagetitle="DT Logo"
              title="Business Developer Intern"
              company="Design Terminal"
              date="September 2019 : Now"
              avatarlink={"http://designterminal.org/"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/D6aBgj9.jpg"}
              />
              <Typography paragraph={true}>
                Design Terminal is an innovation agency that builds bridges
                between startups and corporations.
              </Typography>
              <Typography gutterBottom>
                I assist in the business development division, and more
                specifically in the international expansion program.
              </Typography>
              <Typography gutterBottom>
                I am able to apply my skills transversally, from the knowledge
                of the startup ecosystem I gained through my current startup
                experience, to my technical capacities. I have done:
              </Typography>
              <Typography gutterBottom>
                • Created a tool to automate the generation of business
                proposals
              </Typography>
              <Typography gutterBottom>• Market research</Typography>
              <Typography gutterBottom>
                • Identification of potential business partners
              </Typography>
              <Typography gutterBottom>• Social media benchmarking</Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={"https://i.imgur.com/OiaD4IU.png"}
              imagetitle="Leafee Logo"
              title="Co-Founder"
              company="Leafee"
              date="2018 : Now"
              avatarlink={"http://www.leafeeapp.com/"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/2PIsAfl.jpg"}
              />
              <Typography paragraph={true}>
                Leafee is a Personal Finance Management application that gathers
                all your banking data in one place and estimates your ecological
                footprint from it. The goal is to educate people on how their
                finances play a role in today's climate crisis and create
                incentives to reduce their impact.
              </Typography>
              <Typography gutterBottom>
                I am responsible for the full-stack development and the design
                of the UI/UX (server-side API with Node.js, Database with
                MongoDB, and Front with React.js)
              </Typography>
              <Typography gutterBottom>
                • Won the first prize in the category "Smart Eco-Homes" and was
                2nd in the overall ranking (19 teams) at the MKB FinTechlab
                Hackathon
              </Typography>
              <Typography gutterBottom>
                • Gained an understanding of business models, business
                strategies, market research and personas
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={"https://i.imgur.com/bWjcSDB.jpg"}
              imagetitle="Indelec Logo"
              title="Set up of two Lightning tests sites in Rwanda"
              company="Indelec"
              date="June : August 2018"
              avatarlink={"https://indelec.com/"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/5qFmWMf.jpg"}
              />
              <Typography gutterBottom>
                Verify and maintain the equipment that was already there
                (lightning rod, surge protector and communication system) and
                set up new gear (storm detector). Writing a scientific paper
                presented in an international conference about my study
                on-field.
              </Typography>
              <Typography gutterBottom>
                Negotiating with local authorities (minister) for a larger
                project.
              </Typography>
              <Typography gutterBottom>
                Communicating with the local population to inform about the
                products.
              </Typography>
              <Typography gutterBottom>
                Writing a scientific paper presented in an international
                conference about my study on-field, look <a
                    href="https://twitter.com/IndelecFrance/status/1055309483713458177"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#001aff" }}
                  >
                    here
                  </a>.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={"https://i.imgur.com/kuTb09D.png"}
              imagetitle="Colas Logo"
              title="Intern at the equipment department"
              company="Colas"
              date="June : August 2017"
              avatarlink={"https://www.colas.com/"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/UgIidzE.jpg"}
              />
              <Typography gutterBottom>
                Deployed (installed and trained users) a software to help
                managers of 30 asphalt plants track maintenances requests and
                repairs.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={"https://i.imgur.com/QpkmRKQ.jpg"}
              imagetitle="Lovelace Logo"
              title="Maintenance and Administration Intern "
              company="Lovelace Health System"
              date="February 2017"
              avatarlink={"http://lovelace.com/"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/OAiKKLT.jpg"}
              />
              <Typography gutterBottom>
                Maintenance intern 4 days out of five working on the current
                projects and as an administrative intern the last day assisting
                and learning from the COO.
              </Typography>
            </ListItemElement>
          </List>
          <Typography
            className={`${classes.categoryTitle} ${classes.lastcategoryTitle}`}
            variant="h4"
          >
            Education
          </Typography>
          <List className={classes.root}>
            <ListItemElement
              image={"https://i.imgur.com/wkePpuN.png"}
              imagetitle="BME Logo"
              title="Double Degree - Budapest University of Technology and Economics"
              company="Master's Degree in Engineering"
              date="2018 : Now"
              avatarlink={"https://www.bme.hu/?language=en"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/IzuNA4S.jpg"}
              />
              <Typography gutterBottom>
                Double diploma, major in "Design & Technology", minor in
                "Thermal engineering". Certification in environmental economics
                and management.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={"https://i.imgur.com/5APEJjm.jpg"}
              imagetitle="Ensam Logo"
              title="Double Degree - École Nationale Supérieure d'Arts et Métiers Paristech"
              company="Master's Degree in Engineering"
              date="2016 : Now"
              avatarlink={"https://artsetmetiers.fr/en"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/Cr5dztz.jpg"}
              />
              <Typography gutterBottom>
                President of the music band, I organized 7 gigs in two years.
              </Typography>
              <Typography gutterBottom>
                Communication manager for "Grandes UAI", a sports competition
                where 1000 students get together for 3 days to compete in
                different sports. Achieved a communication strategy that took
                place on social media, written and online press. Negotiated with
                8 sponsors and implemented tools for the team's communication
              </Typography>
              <Typography gutterBottom>
                Co-manager of the school's ski trip. 1400 students for 8 days,
                500.000€ of budget
              </Typography>
            </ListItemElement>
          </List>
          <Typography
            className={`${classes.categoryTitle} ${classes.lastcategoryTitle}`}
            variant="h4"
          >
            Skills
          </Typography>
          <List className={classes.root}>
            <SkillItem/>
          </List>
        </Box>
      </div>
    );
	} else {
		return (
      <div>
        <Typography align="center" variant="h3" className={classes.title}>
          | 03 : À propos |
        </Typography>
        <Box className={classes.subtitleBox}>
          <Typography align="center">
            Vous voulez en savoir plus sur mon parcours et mes études ? Vous
            trouverez ici tout ce que vous voudrez savoir à ce sujet.
          </Typography>
        </Box>
        <Box className={classes.workCardBox} align="left">
          <Typography className={classes.categoryTitle} variant="h4">
            Expériences Professionnelles
          </Typography>
          <List className={classes.root}>
            <ListItemElement
              image={"https://i.imgur.com/hY0BcdK.png"}
              imagetitle="DT Logo"
              title="Stagiaire développement commercial"
              company="Design Terminal"
              date="Septembre 2019 : Maintenant"
              avatarlink={"http://designterminal.org/"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/D6aBgj9.jpg"}
              />
              <Typography paragraph={true}>
                Design Terminal est la première agence d'innovation d'Europe
                centrale, qui forme des "champions de l'innovation" grâce à des
                partenariats avec des entreprises et à l'accélération de
                talents.
              </Typography>
              <Typography gutterBottom>
                Je travaille dans le département du développement commercial, et
                plus particulièrement sur l'expansion internationale.
              </Typography>
              <Typography gutterBottom>
                De par mes expériences passées, je suis en mesure d'appliquer
                beaucoup de mes compétences transversales, que ce soit mes
                connaissances du monde des startups ou mes capacités techniques,
                elles s'avèrent très utiles. À ce jour, j'ai:
              </Typography>
              <Typography gutterBottom>
                • Créé un outil pour automatiser la génération de propositions
                commerciales
              </Typography>
              <Typography gutterBottom>
                • Effectué des analyses de marchés
              </Typography>
              <Typography gutterBottom>
                • Identifié des partenaires commerciaux potentiels
              </Typography>
              <Typography gutterBottom>
                • Analyse marketing sur les réseaux sociaux
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={"https://i.imgur.com/OiaD4IU.png"}
              imagetitle="Leafee Logo"
              title="Co-Fondateur"
              company="Leafee"
              date="2018 : Maintenant"
              avatarlink={"http://www.leafeeapp.com/"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/2PIsAfl.jpg"}
              />
              <Typography paragraph={true}>
                Leafee est une application de gestion des finances personnelles
                qui rassemble toutes vos données bancaires en un seul endroit et
                estime votre empreinte écologique. L'objectif est d'éduquer les
                gens sur la façon dont leurs finances jouent un rôle dans la
                crise climatique actuelle et de créer des incitations pour
                réduire leur impact.
              </Typography>
              <Typography gutterBottom>
                Je suis responsable du développement complet et de la conception
                de l'UI/UX (API côté serveur avec Node.js, Base de données avec
                MongoDB, et Front avec React.js)
              </Typography>
              <Typography gutterBottom>
                - A remporté le premier prix dans la catégorie "Smart Eco-Homes"
                et s'est classé 2e au classement général (19 équipes) au MKB
                FinTechlab Hackathon.
              </Typography>
              <Typography gutterBottom>
                - Compréhension accrue des business models, des stratégies et
                des études de marché.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={"https://i.imgur.com/bWjcSDB.jpg"}
              imagetitle="Indelec Logo"
              title="Mise en place de deux sites d'essais contre la foudre au Rwanda"
              company="Indelec"
              date="Juin : Août 2018"
              avatarlink={"https://indelec.com/"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/eBYQ9OS.jpg"}
              />
              <Typography gutterBottom>
                Pour une durée de 11 semaines, ma mission est d'installer et
                maintenir deux sites d'essais contre la foudre au Rwanda. Cela
                implique la vérification et la maintenance d'équipement présents
                (paratonnerres, parafoudres et systèmes de communication) et
                d'installer de nouveaux équipements tels qu'un détecteur
                d'orage.
              </Typography>
              <Typography gutterBottom>
                Pour ce faire, la mission se scinde en 3 parties, la première
                dite de formation théorique (niveau N1 de la certification
                Qualifoudre) mais aussi pratique en rapport avec les
                technologies INDELEC d'un mois environ. Une deuxième partie qui
                correspond au voyage lui-même d'une quinzaine de jours, il a une
                dimension technique certaine mais aussi sociale, en effet, des
                rendez-vous avec les autorités locales aux sites d'essais et
                avec le ministère sont organisées. Enfin la dernière partie,
                d'un mois également, sera consacrée au traitement des données
                relevées, à l'élaboration de statistique et à la rédaction d'un
                rapport de la mission en français et en anglais.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={"https://i.imgur.com/kuTb09D.png"}
              imagetitle="Colas Logo"
              title="Déploiement d'un outil de GMAO dans 30 centrales d'enrobé"
              company="Colas"
              date="Juin : Août 2017"
              avatarlink={"https://www.colas.com/"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/UgIidzE.jpg"}
              />
              <Typography gutterBottom>
                Pour une durée de 10 semaines, ma mission était de déployer un
                logiciel d’aide et de suivi de maintenance dans 30 postes
                d’enrobage de la région Nord-Est. En totale autonomie, j’ai
                moi-même organisé mon emploi du temps pour pouvoir accomplir la
                totalité de ma mission dans les temps impartis.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={"https://i.imgur.com/QpkmRKQ.jpg"}
              imagetitle="Lovelace Logo"
              title="Stagiaire au service maintenance et administratif"
              company="Lovelace Health System"
              date="Février 2017"
              avatarlink={"http://lovelace.com/"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/OAiKKLT.jpg"}
              />
              <Typography gutterBottom>
                Stagiaire en maintenance 4 jours sur 5, travaillant sur les
                projets en cours et en tant que stagiaire administratif le
                dernier jour, assistant et apprenant du COO.
              </Typography>
            </ListItemElement>
          </List>
          <Typography
            className={`${classes.categoryTitle} ${classes.lastcategoryTitle}`}
            variant="h4"
          >
            Éducation
          </Typography>
          <List className={classes.root}>
            <ListItemElement
              image={"https://i.imgur.com/wkePpuN.png"}
              imagetitle="BME Logo"
              title="Double Diplôme - Budapest University of Technology and Economics"
              company="Master en ingénierie"
              date="2018 : Févreier 2020"
              avatarlink={"https://www.bme.hu/?language=en"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/IzuNA4S.jpg"}
              />
              <Typography gutterBottom>
                Double diplôme, majeur en "Design & Technology", mineur en
                "Thermal engineering". Certification en management et économie
                environnementale.
              </Typography>
              <Typography gutterBottom>
                Je réalise actuellement un mémoire de fin d'études sur le
                développement d'un produit permettant de mesurer la respiration
                du sol (le rejet en CO2 du sol) dans le but de comparer les
                différentes techniques de cultivation en regard de cet
                indicateur et de potentiellement développer de nouvelles
                techniques qui permettront de transformer le sol en "puis à CO2"
                et ainsi réduire considérablement le taux de CO2 dans
                l'atmosphère.
              </Typography>
            </ListItemElement>
            <Divider variant="inset" component="li" />
            <ListItemElement
              image={"https://i.imgur.com/5APEJjm.jpg"}
              imagetitle="Ensam Logo"
              title="Double Diplôme - École Nationale Supérieure d'Arts et Métiers Paristech"
              company="Diplôme d'ingénieur généraliste"
              date="2016 : Février 2020"
              avatarlink={"https://artsetmetiers.fr/en"}
            >
              <ImageBox
                imageBox={"https://i.imgur.com/Cr5dztz.jpg"}
              />
              <Typography gutterBottom>
                Président du club de musique, j'ai organisé 7 concerts et géré
                l'organisation du club toute l'année.
              </Typography>
              <Typography gutterBottom>
                Responsable de la communication pour les "Grandes UAI", une
                compétition sportive où 1000 étudiants se réunissent pendant 3
                jours pour concourir dans différents sports. Réalisation d'une
                stratégie de communication sur les médias sociaux, la presse
                écrite et la presse en ligne. Négociation avec 8 sponsors et
                mise en place d'outils pour la communication de l'équipe
              </Typography>
              <Typography gutterBottom>
                Organisateur du séjour au ski de l'école, SKZ, qui réunit 1400
                étudiants pour un budget de 500,000€. En charge du graphisme et
                des goodies.
              </Typography>
            </ListItemElement>
          </List>
          <Typography
            className={`${classes.categoryTitle} ${classes.lastcategoryTitle}`}
            variant="h4"
          >
            Compétences
          </Typography>
          <List className={classes.root}>
            <SkillItem/>
          </List>
        </Box>
      </div>
    );
	}
}
