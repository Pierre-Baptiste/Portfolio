import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import ListItemElement from "./Components/ListItemElement";

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
							image={require("./Assets/avatar2.png")}
							imageTitle="This is a test"
							title="My First Experience"
							company="TestComp"
							date="2018"
							avatarLink={"https://indelec.com/"}
						>
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
							imageTitle="This is a test"
							title="My First Experience"
							company="TestComp"
							date="2018"
							avatarLink={"https://indelec.com/"}
						>
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
							imageTitle="This is a test"
							title="My First Experience"
							company="TestComp"
							date="2018"
							avatarLink={"https://indelec.com/"}
						>
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
							imageTitle="This is a test"
							title="My First Experience"
							company="TestComp"
							date="2018"
							avatarLink={"https://indelec.com/"}
						>
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
							image={require("./Assets/avatar2.png")}
							imageTitle="This is a test"
							title="My First Experience"
							company="TestComp"
							date="2018"
							avatarLink={"https://indelec.com/"}
						>
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
							imageTitle="This is a test"
							title="My First Experience"
							company="TestComp"
							date="2018"
							avatarLink={"https://indelec.com/"}
						>
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
							imageTitle="This is a test"
							title="My First Experience"
							company="TestComp"
							date="2018"
							avatarLink={"https://indelec.com/"}
						>
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
							imageTitle="This is a test"
							title="My First Experience"
							company="TestComp"
							date="2018"
							avatarLink={"https://indelec.com/"}
						>
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
