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
	divider: {
		marginRight: theme.spacing(2),
		marginLeft: theme.spacing(2)
	},
	toolbar: {
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

export default function SimpleAppBar() {
	const classes = useStyles();

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
						className={classes.item}
					>
						04 : Contact
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}
