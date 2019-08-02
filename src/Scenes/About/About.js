import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import ListItemElement from "./Components/ListItemElement";
import ImageBox from "./Components/ImageBox";

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
				<Typography
					align="center"
					variant="h3"
					className={classes.title}
				>
					| 03 : About me |
				</Typography>
				<Box className={classes.subtitleBox}>
					<Typography align="center">
						Nulla facilisi. Vivamus vestibulum, elit in scelerisque
						ultricies, nisl nunc pulvinar ligula, id sodales arcu
						sapien in nisi. Quisque libero enim, mattis non augue
						posuere, venenatis dapibus urna.
					</Typography>
				</Box>
				<Box className={classes.workCardBox} align="left">
					<Typography className={classes.categoryTitle} variant="h4">
						Work Experience
					</Typography>
					<List className={classes.root}>
						<ListItemElement
							image={require("./Assets/V3Artboard_6.png")}
							imagetitle="Leafee Logo"
							title="Co-Founder"
							company="Leafee"
							date="2018 : Now"
							avatarlink={"http://www.leafeeapp.com/"}
						>
							<ImageBox
								imageBox={require("./Assets/SloganIllustration.png")}
							/>
							<Typography paragraph={true}>
								Leafee is a Personal Finance Management
								application that gathers all your banking data
								in one place and estimates your ecological
								footprint from it. The goal is to educate people
								on how their finances play a role in today's
								climate crisis and create incentives to reduce
								their impact.
							</Typography>
							<Typography gutterBottom>
								I am responsible for the fullstack development
								and the design of the UI/UX (server side API
								with Node.js, Database with MongoDB, and Front
								with React.js)
							</Typography>
							<Typography gutterBottom>
								• Won the first prize in the category "Smart
								Eco-Homes" and was 2nd in the overall ranking
								(19 teams) at the MKB FinTechlab Hackathon
							</Typography>
							<Typography gutterBottom>
								• Gained understanding of business models,
								business strategies, market research and
								personas
							</Typography>
						</ListItemElement>
						<Divider variant="inset" component="li" />
						<ListItemElement
							image={require("./Assets/a909ElMa_400x400.jpg")}
							imagetitle="Indelec Logo"
							title="Set up of two Lightning tests sites in Rwanda"
							company="Indelec"
							date="June : August 2018"
							avatarlink={"https://indelec.com/"}
						>
							<ImageBox
								imageBox={require("./Assets/3267_468x260_ruches-indelec.jpg")}
							/>
							<Typography gutterBottom>
								Verify and maintain the equipment that was
								already there (lightning rod, surge protector
								and communication system) and set up new gear
								(storm detector). Writing a scientific paper
								presented in an international conference about
								my study on-field.
							</Typography>
							<Typography gutterBottom>
								Negotiating with local authorities (minister)
								for a larger project.
							</Typography>
							<Typography gutterBottom>
								Communicating with the local population to
								inform about the products.
							</Typography>
							<Typography gutterBottom>
								Writing a scientific paper presented in an
								international conference about my study
								on-field.
							</Typography>
						</ListItemElement>
						<Divider variant="inset" component="li" />
						<ListItemElement
							image={require("./Assets/Colas_logo_vector.png")}
							imagetitle="Colas Logo"
							title="Intern at the equipment department"
							company="Colas"
							date="June : August 2017"
							avatarlink={"https://www.colas.com/"}
						>
							<ImageBox
								imageBox={require("./Assets/push_categorie_profil.jpg")}
							/>
							<Typography gutterBottom>
								Deployed (installed and trained users) a
								software to help managers of 30 asphalt plants
								track maintenances requests and repairs.
							</Typography>
						</ListItemElement>
						<Divider variant="inset" component="li" />
						<ListItemElement
							image={require("./Assets/lovelacelogo.jpeg")}
							imagetitle="Lovelace Logo"
							title="Maintenance and Administration Intern "
							company="Lovelace Health System"
							date="February 2017"
							avatarlink={"http://lovelace.com/"}
						>
							<ImageBox
								imageBox={require("./Assets/Lovelace.jpg")}
							/>
							<Typography gutterBottom>
								Maintenance intern 4 days out of five working on
								the current projects and as an administrative
								intern the last day assisting and learning from
								the COO.
							</Typography>
						</ListItemElement>
					</List>
					<Typography
						className={`${classes.categoryTitle} ${
							classes.lastcategoryTitle
						}`}
						variant="h4"
					>
						Education
					</Typography>
					<List className={classes.root}>
						<ListItemElement
							image={require("./Assets/bmelogo.png")}
							imagetitle="BME Logo"
							title="Double Degree - Budapest University of Technology and Economics"
							company="Master's Degree in Engineering"
							date="2018 : Now"
							avatarlink={"https://www.bme.hu/?language=en"}
						>
							<ImageBox
								imageBox={require("./Assets//bmeimage.jpeg")}
							/>
							<Typography gutterBottom>
								Double diploma, major in "Design & Technology",
								minor in "Thermal engineering". Certification in
								environmental economics and management.
							</Typography>
						</ListItemElement>
						<Divider variant="inset" component="li" />
						<ListItemElement
							image={require("./Assets/ensamlogo.png")}
							imagetitle="Ensam Logo"
							title="Double Degree - École Nationale Supérieure d'Arts et Métiers Paristech"
							company="Master's Degree in Engineering"
							date="2016 : Now"
							avatarlink={"https://artsetmetiers.fr/en"}
						>
							<ImageBox
								imageBox={require("./Assets/ensamimage.jpg")}
							/>
							<Typography gutterBottom>
								President of the music band, I organized 7 gigs
								in two years.
							</Typography>
							<Typography gutterBottom>
								Communication manager for "Grandes UAI", a sport
								competition where 1000 students get together for
								3 days to compete in different sports. Achieved
								a communication strategy that took place on
								social medias, written and online press.
								Negotiated with 8 sponsors and implemented tools
								for the team's communication
							</Typography>
							<Typography gutterBottom>
								Co-manager of the school's ski trip. 1400
								students for 8 days, 500.000€ of budget
							</Typography>
						</ListItemElement>
					</List>
				</Box>
			</div>
		);
	} else {
		return (
			<div>
				<Typography
					align="center"
					variant="h3"
					className={classes.title}
				>
					| 03 : About me |
				</Typography>
				<Box className={classes.subtitleBox}>
					<Typography align="center">
						Nulla facilisi. Vivamus vestibulum, elit in scelerisque
						ultricies, nisl nunc pulvinar ligula, id sodales arcu
						sapien in nisi. Quisque libero enim, mattis non augue
						posuere, venenatis dapibus urna.
					</Typography>
				</Box>
				<Box className={classes.workCardBox} align="left">
					<Typography className={classes.categoryTitle} variant="h4">
						Work Experience
					</Typography>
					<List className={classes.root}>
						<ListItemElement
							image={require("./Assets/V3Artboard_6.png")}
							imagetitle="Leafee Logo"
							title="Co-Fondateur"
							company="Leafee"
							date="2018 : Aujourd'hui"
							avatarlink={"http://www.leafeeapp.com/"}
						>
							<ImageBox
								imageBox={require("./Assets/avatar2.png")}
							/>
							<Typography gutterBottom>
								Cras mattis consectetur purus sit amet
								fermentum. Cras justo odio, dapibus ac facilisis
								in, egestas eget quam. Morbi leo risus, porta ac
								consectetur ac, vestibulum at eros.
							</Typography>
							<Typography gutterBottom>
								Praesent commodo cursus magna, vel scelerisque
								nisl consectetur et. Vivamus sagittis lacus vel
								augue laoreet rutrum faucibus dolor auctor.
							</Typography>
							<Typography gutterBottom>
								Aenean lacinia bibendum nulla sed consectetur.
								Praesent commodo cursus magna, vel scelerisque
								nisl consectetur et. Donec sed odio dui. Donec
								ullamcorper nulla non metus auctor fringilla.
							</Typography>
						</ListItemElement>
						<Divider variant="inset" component="li" />
						<ListItemElement
							image={require("./Assets/avatar2.png")}
							imagetitle="This is a test"
							title="My First Experience"
							company="TestComp"
							date="2018"
							avatarlink={"https://indelec.com/"}
						>
							<ImageBox
								imageBox={require("./Assets/avatar2.png")}
							/>
							<Typography gutterBottom>
								Cras mattis consectetur purus sit amet
								fermentum. Cras justo odio, dapibus ac facilisis
								in, egestas eget quam. Morbi leo risus, porta ac
								consectetur ac, vestibulum at eros.
							</Typography>
							<Typography gutterBottom>
								Praesent commodo cursus magna, vel scelerisque
								nisl consectetur et. Vivamus sagittis lacus vel
								augue laoreet rutrum faucibus dolor auctor.
							</Typography>
							<Typography gutterBottom>
								Aenean lacinia bibendum nulla sed consectetur.
								Praesent commodo cursus magna, vel scelerisque
								nisl consectetur et. Donec sed odio dui. Donec
								ullamcorper nulla non metus auctor fringilla.
							</Typography>
						</ListItemElement>
					</List>
					<Typography
						className={`${classes.categoryTitle} ${
							classes.lastcategoryTitle
						}`}
						variant="h4"
					>
						Education
					</Typography>
					<List className={classes.root}>
						<ListItemElement
							image={require("./Assets/avatar2.png")}
							imagetitle="This is a test"
							title="My First Experience"
							company="TestComp"
							date="2018"
							avatarlink={"https://indelec.com/"}
						>
							<ImageBox
								imageBox={require("./Assets/avatar2.png")}
							/>
							<Typography gutterBottom>
								Cras mattis consectetur purus sit amet
								fermentum. Cras justo odio, dapibus ac facilisis
								in, egestas eget quam. Morbi leo risus, porta ac
								consectetur ac, vestibulum at eros.
							</Typography>
							<Typography gutterBottom>
								Praesent commodo cursus magna, vel scelerisque
								nisl consectetur et. Vivamus sagittis lacus vel
								augue laoreet rutrum faucibus dolor auctor.
							</Typography>
							<Typography gutterBottom>
								Aenean lacinia bibendum nulla sed consectetur.
								Praesent commodo cursus magna, vel scelerisque
								nisl consectetur et. Donec sed odio dui. Donec
								ullamcorper nulla non metus auctor fringilla.
							</Typography>
						</ListItemElement>
						<Divider variant="inset" component="li" />
						<ListItemElement
							image={require("./Assets/avatar2.png")}
							imagetitle="This is a test"
							title="My First Experience"
							company="TestComp"
							date="2018"
							avatarlink={"https://indelec.com/"}
						>
							<ImageBox
								imageBox={require("./Assets/avatar2.png")}
							/>
							<Typography gutterBottom>
								Cras mattis consectetur purus sit amet
								fermentum. Cras justo odio, dapibus ac facilisis
								in, egestas eget quam. Morbi leo risus, porta ac
								consectetur ac, vestibulum at eros.
							</Typography>
							<Typography gutterBottom>
								Praesent commodo cursus magna, vel scelerisque
								nisl consectetur et. Vivamus sagittis lacus vel
								augue laoreet rutrum faucibus dolor auctor.
							</Typography>
							<Typography gutterBottom>
								Aenean lacinia bibendum nulla sed consectetur.
								Praesent commodo cursus magna, vel scelerisque
								nisl consectetur et. Donec sed odio dui. Donec
								ullamcorper nulla non metus auctor fringilla.
							</Typography>
						</ListItemElement>
					</List>
				</Box>
			</div>
		);
	}
}
