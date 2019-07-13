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
	}
}));

export default function ListItemElement() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<ListItem alignItems="flex-start" style={{ paddingBottom: 0 }}>
				<ListItemAvatar>
					<Avatar
						alt="Remy Sharp"
						src="/static/images/avatar/1.jpg"
					/>
				</ListItemAvatar>
				<ListItemText
					primary="First Experience"
					secondary={
						<React.Fragment>
							<Typography
								component="span"
								variant="body2"
								className={classes.inline}
								color="textPrimary"
							>
								Indelec
							</Typography>
							{" - Lightning protection industry"}
							<br />
							<Typography component={"span"}>
								<DialogBox />
							</Typography>
						</React.Fragment>
					}
				/>
			</ListItem>
		</React.Fragment>
	);
}
