import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import DialogBox from "./DialogBox";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
	inline: {
		display: "inline"
	},
	avatar: {
		filter: "grayscale(100%)",
		transition: "filter 0.2s",
		"&:hover": {
			filter: "none",
			transition: "filter 0.2s"
		}
	},
	link: {
		textDecoration: "none",
		color: "inherit"
	}
}));

export default function ListItemElement(props) {
	const classes = useStyles();

	return (
		<React.Fragment>
			<ListItem alignItems="flex-start" style={{ paddingBottom: 0 }}>
				<ListItemAvatar>
					<a
						href={props.avatarLink}
						className={classes.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Avatar
							alt={props.imageTitle}
							src={props.image}
							className={classes.avatar}
						/>
					</a>
				</ListItemAvatar>
				<ListItemText
					primary={props.title}
					secondary={
						<React.Fragment>
							<Typography
								component="span"
								variant="body2"
								className={classes.inline}
								color="textPrimary"
							>
								{props.company}
							</Typography>
							{" - " + props.date}
							<br />
							<Typography component={"span"}>
								<DialogBox {...props} />
							</Typography>
						</React.Fragment>
					}
				/>
			</ListItem>
		</React.Fragment>
	);
}
