import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";

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
		filter: "grayscale(100%)",
		transition: "filter 0.2s",
		"&:hover": {
			filter: "none",
			transition: "filter 0.2s"
		}
	}
}));

export default function WorkCard() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<div>
			<Card className={classes.card}>
				<CardMedia
					className={classes.media}
					image={require("./../assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
					title="Contemplative Reptile"
				/>
				<CardContent className={classes.cardContent}>
					<Typography
						className={classes.number}
						color="textSecondary"
						gutterBottom
					>
						001/006
					</Typography>
					<Typography
						variant="h5"
						component="h2"
						className={classes.title}
					>
						be
						{bull}
						nev
						{bull}o{bull}
						lent
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						adjective
					</Typography>
					<Typography variant="body2" component="p">
						well meaning and kindly.
						<br />
						{'"a benevolent smile"'}
					</Typography>
				</CardContent>

				<CardActions>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</div>
	);
}
