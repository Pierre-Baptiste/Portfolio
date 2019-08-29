import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	container: {
		width: "100%",
		height: "100vh",
		display: "flex",
		justifyContent: "flex-start",
		flexDirection: "column",

	},
	h1classtop: {
		fontFamily: "Roboto",
		display: "flex",
		alignItems: "baseline",
		position: "relative",
		[theme.breakpoints.up("xl")]: {
			marginLeft: "75px",
			marginTop: "200px",
			fontSize: 80
		},
		[theme.breakpoints.between("lg", "lg")]: {
			marginLeft: "75px",
			marginTop: "200px",
			fontSize: 60
		},
		[theme.breakpoints.between("md", "md")]: {

			fontSize: 50,
			marginTop: "50px",
			marginLeft: "50px"
		},
		[theme.breakpoints.between("sm", "sm")]: {

			fontSize: 40,
			marginTop: "30px",
			marginLeft: "30px"
		},
		[theme.breakpoints.between("xs", "xs")]: {

			fontSize: 25,
			marginTop: "20px",
			marginLeft: "20px"
		}
	},
	h1classbottom: {
		fontFamily: "Roboto",
		display: "flex",
		alignItems: "baseline",
		position: "relative",
		marginTop: "0px",
		[theme.breakpoints.up("xl")]: {
			marginLeft: "75px",
			fontSize: 80
		},
		[theme.breakpoints.between("lg", "lg")]: {
			marginLeft: "75px",
			fontSize: 60
		},
		[theme.breakpoints.between("md", "md")]: {
			
			fontSize: 50,
			marginLeft: "50px"
		},
		[theme.breakpoints.between("sm", "sm")]: {
			
			fontSize: 40,
			marginLeft: "30px"
		},
		[theme.breakpoints.between("xs", "xs")]: {
			
			fontSize: 25,

			marginLeft: "20px"
		}
	}
}));

export default function Presentation(props) {
	const classes = useStyles();

	if (props.Language === "English") {
		return (
			<div className={classes.container}>
				<Typography variant="h1" className={classes.h1classtop}>
					Hello,
				</Typography>
				<Typography variant="h1" className={classes.h1classbottom}>
					I'm Pierre-Baptiste<div style={{ color: "#001aff" }}>.</div>
				</Typography>
			</div>
		);
	} else {
		return (
			<div className={classes.container}>
				<Typography variant="h1" className={classes.h1classtop}>
					Bonjour,
				</Typography>
				<Typography variant="h1" className={classes.h1classbottom}>
					Je m'appelle <br/>Pierre-Baptiste
					<div style={{ color: "#001aff" }}><br/>.</div>
				</Typography>
			</div>
		);
	}
}
