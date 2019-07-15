import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";

import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";

import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/ClearSharp";

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
	},
	articleImage: {
		width: "100%",
		position: "absolute",
		top: "50%",
		transform: "translateY(-50%) translateX(-50%)",
		left: "50%"
	},
	imageContainer: {
		alignItems: "center",
		minHeight: "200px",
		width: "100vw",
		maxWidth: "700px",
		overflow: "hidden",
		marginBottom: "10px",
		display: "block",
		position: "relative",
		margin: "30px auto"
	},
	titleContainer: {
		maxWidth: "550px",
		width: "100vw",
		margin: "50px auto 0px auto",
		[theme.breakpoints.down("xs")]: {
			marginLeft: "15px"
		}
	},
	titleArticle: {
		fontFamily: "Roboto",
		marginLeft: 0,
		[theme.breakpoints.down("xs")]: {
			marginLeft: "15px"
		}
	},
	subTitleArticle: {
		[theme.breakpoints.down("xs")]: {
			marginLeft: "15px"
		}
	},
	dateArticle: {
		[theme.breakpoints.down("xs")]: {
			marginLeft: "15px"
		}
	},
	iconContainer: {
		right: 10,
		position: "fixed",
		backgroundColor: "fff",
		zIndex: 1100
	},
	clearButton: {
		margin: "5px",
		backgroundColor: "#fff"
	},
	articleContainer: {
		position: "relative",
		margin: "20px auto",
		maxWidth: 500
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
				<CardActions style={{ marginLeft: "4px" }}>
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
						<div className={classes.iconContainer}>
							<IconButton
								className={classes.clearButton}
								aria-label="Clear"
								onClick={handleClose}
							>
								<ClearIcon color="error" />
							</IconButton>
						</div>
						<div className={classes.titleContainer}>
							<Typography
								className={classes.titleArticle}
								variant="h2"
							>
								{props.title}
							</Typography>
							<Typography
								className={classes.subTitleArticle}
								variant="h6"
							>
								{props.subTitle}
							</Typography>
							<Typography
								className={classes.dateArticle}
								variant="h6"
							>
								{props.date}
							</Typography>
						</div>
						<div className={classes.imageContainer}>
							<img
								src={props.image}
								alt={props.imageTitle}
								className={classes.articleImage}
							/>
						</div>
						<div className={classes.articleContainer}>
							{props.children}
						</div>
					</Dialog>
				</CardActions>
			</Card>
		</div>
	);
}
