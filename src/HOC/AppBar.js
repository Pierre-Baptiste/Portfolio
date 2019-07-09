import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	item: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "flex"
		},
		fontSize: 12,
		opacity: 0.5,
		transition: "opacity 0.2s",
		"&:hover": {
			cursor: "pointer",
			color: "#001aff",
			opacity: 1
		}
	},
	lastitem: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "flex"
		},
		flexGrow: 1,
		fontSize: 12,
		opacity: 0.5,
		transition: "opacity 0.2s",
		"&:hover": {
			cursor: "pointer",
			color: "#001aff",
			opacity: 1
		}
	},
	langitem: {
		cursor: "pointer",
		fontSize: 12,
		opacity: 0.5
	},
	divider: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "flex"
		},
		marginRight: theme.spacing(2),
		marginLeft: theme.spacing(2)
	},
	langDivider: {
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
	},
	menuButton: {
		justifyContent: "flex-start",
		[theme.breakpoints.up("sm")]: {
			display: "none"
		}
	},
	placeholder: {
		flexGrow: 1
	}
}));

export default function SimpleAppBar(props) {
	const classes = useStyles();

	const [state, setState] = React.useState({
		top: false
	});

	const toggleDrawer = (side, open) => event => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	const fullListEn = side => (
		<div
			className={classes.fullList}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				{[
					"01 : Home",
					"02 : Works",
					"03 : About me",
					"04 : Contact"
				].map(text => (
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	const fullListFr = side => (
		<div
			className={classes.fullList}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List>
				{[
					"01 : Accueil",
					"02 : Travaux",
					"03 : À propos",
					"04 : Contacter"
				].map(text => (
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	if (props.Language === "English") {
		return (
			<div className={classes.root}>
				<AppBar position="static" color="primary">
					<Toolbar disableGutters={true} className={classes.toolbar}>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="Open drawer"
							onClick={toggleDrawer("top", true)}
						>
							<MenuIcon />
						</IconButton>
						<SwipeableDrawer
							anchor="top"
							open={state.top}
							onClose={toggleDrawer("top", false)}
							onOpen={toggleDrawer("top", true)}
						>
							{fullListEn("top")}
						</SwipeableDrawer>
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
						<Typography className={classes.placeholder} />
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
							className={classes.langDivider}
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
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="Open drawer"
							onClick={toggleDrawer("top", true)}
						>
							<MenuIcon />
						</IconButton>
						<SwipeableDrawer
							anchor="top"
							open={state.top}
							onClose={toggleDrawer("top", false)}
							onOpen={toggleDrawer("top", true)}
						>
							{fullListFr("top")}
						</SwipeableDrawer>
						<Typography
							variant="h6"
							color="secondary"
							className={classes.item}
						>
							01 : Accueil
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
							02 : Travaux
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
							03 : À propos
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
							04 : Contacter
						</Typography>
						<Typography className={classes.placeholder} />
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
							className={classes.langDivider}
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
