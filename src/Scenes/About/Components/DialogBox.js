import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	buttonclick: {
		"&:hover": {
			color: "#001aff",
			backgroundColor: "#fff"
		},
		marginTop: "15px",
		marginBottom: "15px"
	},
	root: {
		margin: 0,
		padding: theme.spacing(2)
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	}
}));

function SimpleDialog(props) {
	const classes = useStyles();
	const { onClose, ...other } = props;

	function handleClose() {
		onClose();
	}

	const DialogTitle = (
		<MuiDialogTitle disableTypography className={classes.root}>
			<Typography variant="h6">tesssst</Typography>
			{onClose ? (
				<IconButton
					aria-label="Close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);

	return (
		<Dialog
			onClose={handleClose}
			aria-labelledby="simple-dialog-title"
			{...other}
		>
			{DialogTitle}
			<DialogContent dividers>
				<Typography gutterBottom>
					Cras mattis consectetur purus sit amet fermentum. Cras justo
					odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
					risus, porta ac consectetur ac, vestibulum at eros.
				</Typography>
				<Typography gutterBottom>
					Praesent commodo cursus magna, vel scelerisque nisl
					consectetur et. Vivamus sagittis lacus vel augue laoreet
					rutrum faucibus dolor auctor.
				</Typography>
				<Typography gutterBottom>
					Aenean lacinia bibendum nulla sed consectetur. Praesent
					commodo cursus magna, vel scelerisque nisl consectetur et.
					Donec sed odio dui. Donec ullamcorper nulla non metus auctor
					fringilla.
				</Typography>
			</DialogContent>
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
		<React.Fragment>
			<Button
				variant="outlined"
				color="secondary"
				onClick={handleClickOpen}
				className={classes.buttonclick}
			>
				More
			</Button>
			<SimpleDialog open={open} onClose={handleClose} />
		</React.Fragment>
	);
}
