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
						<ListItemElement />
						<Divider variant="inset" component="li" />
						<ListItemElement />
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
						<ListItemElement />
						<Divider variant="inset" component="li" />
						<ListItemElement />
					</List>
				</Box>
			</div>
		);
	} else {
		return <div>test</div>;
	}
}
