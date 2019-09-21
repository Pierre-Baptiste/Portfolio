import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Mail from "@material-ui/icons/AlternateEmailSharp";
import Location from "@material-ui/icons/LocationOnSharp";
import { Facebook, Twitter, GithubCircle, Linkedin } from "mdi-material-ui";

const useStyles = makeStyles(theme => ({
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
	},
	margin: {
		margin: "5px 0px"
	},
	notchedOutline: {
		borderWidth: "1px",
		borderColor: "#000 !important"
	},
	button: {
		margin: "5px 0",
		borderColor: "#000 !important",
		"&:hover": {
			color: "#001aff",
			backgroundColor: "#fff"
		}
	},
	infos: { marginTop: "10px" },
	infosIcons: {},
	socialIcons: {
		marginRight: "10px"
	},
	infosText: {
		marginLeft: "15px"
	},
	socMed: {
		fontFamily: "Roboto",
		margin: "20px 0px"
	},
	link: {
		textDecoration: "none",
		color: "inherit"
	}
}));

export default function Contact(props) {
	const classes = useStyles();

	if (props.Language === "English") {
		return (
			<div>
				<Typography
					align="center"
					variant="h3"
					className={classes.title}
				>
					| 05 : Contact |
				</Typography>
				<Box className={classes.subtitleBox}>
					<Typography align="center">
						Want to get in touch with me ? You can reach me through
						e-mail, on the social media links and by filling out the
						form.
					</Typography>
				</Box>
				<Box className={classes.workCardBox} align="left">
					<Grid container spacing={10}>
						<Grid item xs={12} sm={12} md={8}>
							<form
								action="https://formspree.io/p.b.dupire@gmail.com"
								method="POST"
							>
								<TextField
									className={classes.margin}
									label="E-mail"
									variant="outlined"
									name="_replyto"
									fullWidth={true}
									required
									InputProps={{
										classes: {
											notchedOutline:
												classes.notchedOutline
										}
									}}
								/>
								<TextField
									className={classes.margin}
									label="Subject"
									variant="outlined"
									name="_subject"
									required
									fullWidth={true}
									InputProps={{
										classes: {
											notchedOutline:
												classes.notchedOutline
										}
									}}
								/>
								<TextField
									className={classes.margin}
									label="Message"
									name="message"
									variant="outlined"
									fullWidth={true}
									multiline={true}
									required
									rows="7"
									InputProps={{
										classes: {
											notchedOutline:
												classes.notchedOutline
										}
									}}
								/>
								<Button
									variant="outlined"
									color="secondary"
									type="submit"
									className={classes.button}
								>
									SEND
								</Button>
							</form>
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<Grid
								container
								direction="row"
								alignItems="center"
								className={classes.infos}
							>
								<Grid item>
									<Typography className={classes.infosIcons}>
										<Mail />
									</Typography>
								</Grid>
								<Grid item>
									<Typography className={classes.infosText}>
										<a
											href="mailto:p.b.dupire@gmail.com"
											className={classes.link}
										>
											p.b.dupire@gmail.com
										</a>
									</Typography>
								</Grid>
							</Grid>
							<Grid
								container
								direction="row"
								alignItems="center"
								className={classes.infos}
							>
								<Grid item>
									<Typography className={classes.infosIcons}>
										<Location />
									</Typography>
								</Grid>
								<Grid item>
									<Typography className={classes.infosText}>
										Lille, France
									</Typography>
								</Grid>
							</Grid>
							<Typography variant="h5" className={classes.socMed}>
								Follow me on social media
							</Typography>
							<Grid container direction="row" alignItems="center">
								<Grid item>
									<Typography className={classes.socialIcons}>
										<a
											href="https://www.facebook.com/pierrebaptiste.dupire"
											className={classes.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Facebook />
										</a>
									</Typography>
								</Grid>
								<Grid item>
									<Typography className={classes.socialIcons}>
										<a
											href="https://twitter.com/PierreB58838628"
											className={classes.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Twitter />
										</a>
									</Typography>
								</Grid>
								<Grid item>
									<Typography className={classes.socialIcons}>
										<a
											href="https://github.com/Pierre-Baptiste"
											className={classes.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<GithubCircle />
										</a>
									</Typography>
								</Grid>
								<Grid item>
									<Typography
										className={classes.socialIcons}
										style={{ marginRight: "0px" }}
									>
										<a
											href="https://www.linkedin.com/in/pb-dupire/"
											className={classes.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Linkedin />
										</a>
									</Typography>
								</Grid>
							</Grid>
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
					| 05 : Contact |
				</Typography>
				<Box className={classes.subtitleBox}>
					<Typography align="center">
						Vous souhaitez me contacter ? Vous pouvez le faire sur
						mon e-mail, à travers les différents réseaux sociaux
						présentés ou en passant par le formulaire.
					</Typography>
				</Box>
				<Box className={classes.workCardBox} align="left">
					<Grid container spacing={10}>
						<Grid item xs={12} sm={12} md={8}>
							<form
								action="https://formspree.io/p.b.dupire@gmail.com"
								method="POST"
							>
								<TextField
									className={classes.margin}
									label="E-mail"
									variant="outlined"
									name="_replyto"
									fullWidth={true}
									required
									InputProps={{
										classes: {
											notchedOutline:
												classes.notchedOutline
										}
									}}
								/>
								<TextField
									className={classes.margin}
									label="Objet"
									variant="outlined"
									name="_subject"
									required
									fullWidth={true}
									InputProps={{
										classes: {
											notchedOutline:
												classes.notchedOutline
										}
									}}
								/>
								<TextField
									className={classes.margin}
									label="Message"
									name="message"
									variant="outlined"
									fullWidth={true}
									multiline={true}
									required
									rows="7"
									InputProps={{
										classes: {
											notchedOutline:
												classes.notchedOutline
										}
									}}
								/>
								<Button
									variant="outlined"
									type="submit"
									className={classes.button}
								>
									SEND
								</Button>
							</form>
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<Grid
								container
								direction="row"
								alignItems="center"
								className={classes.infos}
							>
								<Grid item>
									<Typography className={classes.infosIcons}>
										<Mail />
									</Typography>
								</Grid>
								<Grid item>
									<Typography className={classes.infosText}>
										<a
											href="mailto:p.b.dupire@gmail.com"
											className={classes.link}
										>
											p.b.dupire@gmail.com
										</a>
									</Typography>
								</Grid>
							</Grid>
							<Grid
								container
								direction="row"
								alignItems="center"
								className={classes.infos}
							>
								<Grid item>
									<Typography className={classes.infosIcons}>
										<Location />
									</Typography>
								</Grid>
								<Grid item>
									<Typography className={classes.infosText}>
										Lille, France
									</Typography>
								</Grid>
							</Grid>
							<Typography variant="h5" className={classes.socMed}>
								Follow me on social media
							</Typography>
							<Grid container direction="row" alignItems="center">
								<Grid item>
									<Typography className={classes.socialIcons}>
										<a
											href="https://www.facebook.com/pierrebaptiste.dupire"
											className={classes.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Facebook />
										</a>
									</Typography>
								</Grid>
								<Grid item>
									<Typography className={classes.socialIcons}>
										<a
											href="https://twitter.com/PierreB58838628"
											className={classes.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Twitter />
										</a>
									</Typography>
								</Grid>
								<Grid item>
									<Typography className={classes.socialIcons}>
										<a
											href="https://github.com/Pierre-Baptiste"
											className={classes.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<GithubCircle />
										</a>
									</Typography>
								</Grid>
								<Grid item>
									<Typography
										className={classes.socialIcons}
										style={{ marginRight: "0px" }}
									>
										<a
											href="https://www.linkedin.com/in/pb-dupire/"
											className={classes.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Linkedin />
										</a>
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</div>
		);
	}
}
