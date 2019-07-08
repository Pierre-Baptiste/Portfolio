import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	item: {
		fontSize: 12,
		opacity: 0.5,
		transition: "opacity 0.2s",
		"&:hover": {
			color: "#001aff",
			opacity: 1
		}
	},
	lastitem: {
		flexGrow: 1,
		fontSize: 12,
		opacity: 0.5,
		transition: "opacity 0.2s",
		"&:hover": {
			color: "#001aff",
			opacity: 1
		}
	},
	langitem: {
		fontSize: 12,
		opacity: 0.5
	},
	divider: {
		marginRight: theme.spacing(2),
		marginLeft: theme.spacing(2)
	},
	toolbar: {
		[theme.breakpoints.down("sm")]: {
			marginLeft: "25px",
			marginRight: "25px"
		},
		[theme.breakpoints.up("md")]: {
			marginLeft: "50px",
			marginRight: "50px"
		},
		[theme.breakpoints.up("lg")]: {
			marginLeft: "75px",
			marginRight: "75px"
		}
	}
}));

export default function SimpleAppBar(props) {
	const classes = useStyles();

	if (props.Language === "English") {
		return (
			<div className={classes.root}>
				<AppBar position="static" color="primary">
					<Toolbar disableGutters={true} className={classes.toolbar}>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.item}
						>
							01 : Home
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.divider}
						>
							|
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.item}
						>
							02 : Works
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.divider}
						>
							|
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.item}
						>
							03 : About me
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.divider}
						>
							|
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.lastitem}
						>
							04 : Contact
						</Typography>
						<Typography
							variant="h6"
							color="error"
							className={classes.langitem}
							style={{ opacity: 1 }}
						>
							<div id="En" onClick={props.handleLanguageChange}>
								En
							</div>
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.divider}
						>
							|
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.langitem}
						>
							<div id="Fr" onClick={props.handleLanguageChange}>
								Fr
							</div>
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	} else {
		return (
			<div className={classes.root}>
				<AppBar position="static" color="primary">
					<Toolbar disableGutters={true} className={classes.toolbar}>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.item}
						>
							01 : Home
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.divider}
						>
							|
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.item}
						>
							02 : Works
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.divider}
						>
							|
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.item}
						>
							03 : About me
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.divider}
						>
							|
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.lastitem}
						>
							04 : Contact
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.langitem}
						>
							<div id="En" onClick={props.handleLanguageChange}>
								En
							</div>
						</Typography>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.divider}
						>
							|
						</Typography>
						<Typography
							variant="h6"
							color="error"
							className={classes.langitem}
							style={{ opacity: 1 }}
						>
							<div id="Fr" onClick={props.handleLanguageChange}>
								Fr
							</div>
						</Typography>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
