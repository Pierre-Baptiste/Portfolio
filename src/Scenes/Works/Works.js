import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import WorkCard from "./Components/WorkCard";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
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
	}
}));

export default function Presentation(props) {
	const classes = useStyles();

	if (props.Language === "English") {
		return (
			<div>
				<Typography
					align="center"
					variant="h3"
					className={classes.title}
				>
					| 02 : Works |
				</Typography>
				<Box className={classes.subtitleBox}>
					<Typography align="center">
						Nulla facilisi. Vivamus vestibulum, elit in scelerisque
						ultricies, nisl nunc pulvinar ligula, id sodales arcu
						sapien in nisi. Quisque libero enim, mattis non augue
						posuere, venenatis dapibus urna.
					</Typography>
				</Box>
				<Box className={classes.workCardBox} align="center">
					<Grid container className={classes.root} spacing={4}>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="This is a test"
								date="2018"
								title="Test"
								subTitle="This is a subtitle"
								description="This is a description which usually is on two lines for design"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="This is a test"
								date="2018"
								title="Test"
								subTitle="This is a subtitle"
								description="This is a description which usually is on two lines for design"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="This is a test"
								date="2018"
								title="Test"
								subTitle="This is a subtitle"
								description="This is a description which usually is on two lines for design"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="This is a test"
								date="2018"
								title="Test"
								subTitle="This is a subtitle"
								description="This is a description which usually is on two lines for design"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="This is a test"
								date="2018"
								title="Test"
								subTitle="This is a subtitle"
								description="This is a description which usually is on two lines for design"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="This is a test"
								date="2018"
								title="Test"
								subTitle="This is a subtitle"
								description="This is a description which usually is on two lines for design"
							/>
						</Grid>
					</Grid>
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
					| 02 : Works |
				</Typography>
				<Box className={classes.subtitleBox}>
					<Typography align="center">
						Nulla facilisi. Vivamus vestibulum, elit in scelerisque
						ultricies, nisl nunc pulvinar ligula, id sodales arcu
						sapien in nisi. Quisque libero enim, mattis non augue
						posuere, venenatis dapibus urna.
					</Typography>
				</Box>
				<Box className={classes.workCardBox} align="center">
					<Grid container className={classes.root} spacing={4}>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="This is a test"
								date="2018"
								title="Test"
								subTitle="This is a subtitle"
								description="This is a description which usually is on two lines for design"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="This is a test"
								date="2018"
								title="Test"
								subTitle="This is a subtitle"
								description="This is a description which usually is on two lines for design"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="This is a test"
								date="2018"
								title="Test"
								subTitle="This is a subtitle"
								description="This is a description which usually is on two lines for design"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="This is a test"
								date="2018"
								title="Test"
								subTitle="This is a subtitle"
								description="This is a description which usually is on two lines for design"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="This is a test"
								date="2018"
								title="Test"
								subTitle="This is a subtitle"
								description="This is a description which usually is on two lines for design"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="This is a test"
								date="2018"
								title="Test"
								subTitle="This is a subtitle"
								description="This is a description which usually is on two lines for design"
							/>
						</Grid>
					</Grid>
				</Box>
			</div>
		);
	}
}
