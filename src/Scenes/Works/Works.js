import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import WorkCard from "./Components/WorkCard";

const useStyles = makeStyles(theme => ({
	title: {
		marginTop: "30px",
		marginBottom: "30px",
		fontWeight: "700",
		fontSize: "27px"
	}
}));

export default function Presentation(props) {
	const classes = useStyles();

	if (props.Language === "English") {
		return (
			<div className={classes.bg}>
				<Typography
					align="center"
					variant="h3"
					className={classes.title}
				>
					| 02 : Works |
				</Typography>
				<WorkCard />
			</div>
		);
	} else {
		return <div>test</div>;
	}
}
