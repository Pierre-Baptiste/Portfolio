import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";

import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	card: {
		[theme.breakpoints.between("xs", "xs")]: {
			maxWidth: "100%"
		},
		[theme.breakpoints.between("sm", "sm")]: {
			maxWidth: 350
		},
		[theme.breakpoints.between("md", "xl")]: {
			maxWidth: 275
		},
		border: "solid",
		height: 300,
		textAlign: "left"
	},
	cardContent: {
		padding: "0 20px"
	},
	cardContentButton: {
		"&:hover": {
			color: "#001aff",
			backgroundColor: "#fff"
		},
		fontWeight: "700"
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)"
	},
	number: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	},
	title: {
		fontWeight: "700"
	},
	media: {
		height: 140,
		[theme.breakpoints.up("md")]: {
			filter: "grayscale(100%)",
			transition: "filter 0.2s",
			"&:hover": {
				filter: "none",
				transition: "filter 0.2s"
			}
		}
	}
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function WorkCard(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	function handleClickOpen() {
		setOpen(true);
	}

	function handleClose() {
		setOpen(false);
	}

	const bull = <span className={classes.bullet}>•</span>;

	return (
		<div>
			<Card className={classes.card}>
				<CardMedia
					className={classes.media}
					style={{ height: 140 }}
					image={props.image}
					title={props.imageTitle}
				/>
				<CardContent className={classes.cardContent}>
					<Typography
						className={classes.number}
						color="textSecondary"
						gutterBottom
					>
						{props.date}
					</Typography>
					<Typography
						variant="h5"
						component="h2"
						className={classes.title}
					>
						{bull}
						{props.title}
						{bull}
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						{props.subTitle}
					</Typography>
					<Typography variant="body2" component="p">
						{props.description}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size="small"
						className={classes.cardContentButton}
						onClick={handleClickOpen}
					>
						Learn More
					</Button>
					<Dialog
						fullScreen
						open={open}
						onClose={handleClose}
						TransitionComponent={Transition}
					>
						{props.children}
					</Dialog>
				</CardActions>
			</Card>
		</div>
	);
}
