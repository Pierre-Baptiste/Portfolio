import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
	buttonclick: {
		"&:hover": {
			color: "#001aff"
		}
	},
	dialogtext: {
		color: "#001aff"
	}
}));

function SimpleDialog(props) {
	const classes = useStyles();
	const { onClose, ...other } = props;

	function handleClose() {
		onClose();
	}

	return (
		<Dialog
			onClose={handleClose}
			aria-labelledby="simple-dialog-title"
			{...other}
		>
			<DialogTitle
				id="simple-dialog-title"
				className={classes.dialogtext}
			>
				là je peux y mettre ce que je
				veuxaefknbazsfklhqaezfhcjlkzqohnfeolj
				gohfpiqefpohzhpigiehkqghghvphpfhpoi ghpvh
			</DialogTitle>
		</Dialog>
	);
}

export default function DialogBox(props) {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);

	function handleClickOpen() {
		setOpen(true);
	}

	const handleClose = value => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				variant="outlined"
				color="secondary"
				onClick={handleClickOpen}
				className={classes.buttonclick}
			>
				More
			</Button>
			<SimpleDialog open={open} onClose={handleClose} />
		</div>
	);
}
