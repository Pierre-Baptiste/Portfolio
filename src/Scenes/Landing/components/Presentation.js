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
		[theme.breakpoints.down("sm")]: {
			alignItems: "center"
		},
		[theme.breakpoints.up("md")]: {
			alignItems: "flex-start"
		}
	},
	h1classtop: {
		fontFamily: "Roboto",
		display: "flex",
		alignItems: "baseline",
		position: "relative",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "25px",
			marginTop: "25px"
		},
		[theme.breakpoints.up("md")]: {
			marginLeft: "50px",
			marginTop: "200px"
		},
		[theme.breakpoints.up("lg")]: {
			marginLeft: "75px",
			marginTop: "200px"
		}
	},
	h1classbottom: {
		fontFamily: "Roboto",
		display: "flex",
		alignItems: "baseline",
		position: "relative",
		marginTop: "0px",
		[theme.breakpoints.down("sm")]: {
			marginLeft: "25px"
		},
		[theme.breakpoints.up("md")]: {
			marginLeft: "50px"
		},
		[theme.breakpoints.up("lg")]: {
			marginLeft: "75px"
		}
	}
}));

export default function Presentation() {
	const classes = useStyles();

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
}
