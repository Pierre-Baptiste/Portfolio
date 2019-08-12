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
	},
	article: {
		color: "secondary",

		padding: "0 20px",
		marginBottom: "10px",
		textAlign: "justify"
	},
	firstLetter: {
		fontFamily: "unifrakturmaguntia, fantasy",
		fontSize: "50px",
		float: "left",
		lineHeight: "1",
		paddingRight: "7px"
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
								imageTitle="Picture of myself"
								date="2019"
								title="Personal Website"
								subTitle="Creation of this website"
								description="From the design perspective to the content and purpose of it"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/SKZWork.png")}
								imageTitle="SKZ image"
								date="2019"
								title="SKZ"
								subTitle="Annual school ski trip"
								description="In charge of the graphic design and merchandising"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="Leafee Picture"
								date="2018"
								title="Birth of Leafee"
								subTitle="Early days of the startup"
								description="From the Hackathon to the working product and everything in between"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/tony-dinh-54T98veBp-c-unsplash.jpg")}
								imageTitle="UAI Team"
								date="2018"
								title="UAI"
								subTitle="Annual school sport competition"
								description="In charge of the graphic design and communication"
							/>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={require("./assets/asoggetti-rSFxBGpnluw-unsplash.jpg")}
								imageTitle="Quadcopter"
								date="2016"
								title="Quadcopter"
								subTitle="Personnal Project"
								description="The math behind an arduino based Flight Controller"
							>
								<Typography className={classes.article}>
									<span className={classes.firstLetter}>
										P
									</span>
									roblem statement This thesis proposes
									quadcopter control theory, inertial
									measurement unit (IMU) orientation fusion,
									and provides a comprehensive
									software/hardware platform. To establish a
									reference frame, this thesis specifies a
									mathematical coordinate system and then uses
									this system to determine control goals. The
									remainder of the thesis focuses on how to
									meet the proposed control goals. An overview
									of existing IMU sensors is presented as well
									as their trade-offs with respect to
									quadcopter flight. An algorithm is then
									proposed to overcome existing sensor
									limitations by fusing IMU data to obtain
									orientation. Once known orientation is
									established, this thesis then focuses on
									specifying multi-rotor kinematics, software,
									and hardware involved in flight control.
									Finally, this thesis explores means of
									autonomous control with a lidar sensor. The
									primary problem this thesis attempts to
									solve is in reducing barriers to entry for
									advance control techniques. When building a
									multi-rotor vehicle (drone), designers are
									faced with the choice of paying for a custom
									designed aerial vehicle, building their own
									vehicle from scratch, or sacrificing
									controllability for a inexpensive
									off-the-shelf system. While numerous
									inexpensive off-the-shelf multi-rotor
									platforms are available, they often consist
									of proprietary modules even when advertised
									as open-source.
								</Typography>

								<Typography className={classes.article}>
									Common examples of these 2 black-box modules
									are sensor-less brushless motor controllers,
									flight controllers, and radios. These
									modules are often proprietary and have
									limited hardware specifications [16],[17].
									Consequently for a researcher, the control
									and the modifiability of these modules is
									limited. 1.2 Objectives A main objective of
									this work is to provide researchers with a
									functional, fully specified, and stabilized
									quadcopter. This system will be specified
									from scratch hardware and software with the
									intent of eliminating as many black box
									components as possible. In addition, this
									flight system will have an emphasis on
									theoretical control as well as IMU data
									collection making it a prime candidate for
									future research. 1.3 Previous Work
									Admittedly, much work has been done in the
									area of advance control of multi-rotor
									systems and these works are too numerous for
									a comprehensive listing. Consequently, key
									examples will be provided that were used as
									a reference for the development of this
									thesis. For example, Robert Mahony presents
									a comprehensive method for modeling,
									orientation, and control of a quadcopter
									with state space methods [18]. Another
									example of advance control is where
									researchers at University of Zurich
									implemented a quadcopter with a model
									predictive control were able to perform
									extreme acrobatic maneuvers [19],[20].
									Numerous other control techniques have been
									applied to quadcopters as 3 well such as
									PID, LQR, LQR-PID, and H∞ [21], [22]. With
									regards to open source multi-rotor systems,
									Open Pilot and Clean Flight are perhaps two
									of the most popular open software flight
									controller systems [16],[17]. These
									frameworks support a broad range of
									multi-rotor vehicles from tri-copters to
									octo-copters. With regards to open source
									software and hardware systems, the Pixhawk
									and Sparky systems feature an open source
									flight controllers [23],[24]. While these
									systems feature some open hardware and
									software, they integrate with systems that
									are proprietary. In regards to indoor
									autonomous control, this is an active area
									of research for all types of remote
									vehicles. Mapping of unknown environments
									has been conducted with mutli-rotor vehicles
									utilizing lidar and employing the iterative
									closest point (ICP) algorithm
									[15],[25],[26]. However, in these cases the
									multi-rotor vehicle was operated by a human.
									A team at MIT achieved autonomous indoor
									control of an aerial vehicle by combining
									lidar data and IMU data with an extended
									Kalman filter as well as a Gaussian particle
									filter [27]. However, in this case the
									environment had been pre-mapped and
									pre-determined trajectories were used.
									Comprehensive simultaneous mapping and
									control is still an ongoing area of
									research. 1.4 Contributions This thesis
									developd a functional quadcopter system with
									a higher level of integration than most
									other open source options. In addition, this
									thesis develops a computationally efficient
									lidar parsing algorithm. The key
									contributions of this 4 flight system are as
									follows: • Provides open source software /
									hardware files for a functional stabilized
									auto-leveling flight controller • Provides
									open source software / hardware files for a
									remote control system • Offers practical
									design insights for other researchers
									attempting to construct their own aerial
									vehicles • Proposes a computationally
									efficient implementation of ICL for lidar
									data translation 1.5 Thesis Organization
									Chapter 2 presents fundamental background
									information and terminology associated with
									multi-rotor systems that will be used
									throughout this thesis. Chapter 3 overviews
									the the mathematical reference frame for the
									multi-rotor system and specifies control
									objectives. Chapter 4 describes sensors used
									for quadcopter orientation estimation as
									well as a fusion algorithm to combine
									various sensors. Chapter 5 proposes a
									control system to achieve auto-leveling
									flight. This chapter also overviews the
									software architecture used in order to
									execute the desired control system. Chapter
									6 overviews the quadcopter’s radio system
									and introduces applicable theory required
									for its design and construction. Chapter 7
									describes other hardware components of the
									quadcopter such as the flight controller and
									electronic speed controllers. Chapter 8
									overviews lidar integration with a
									quadcopters control system. This chapter
									also specifies an 5 algorithm for parsing
									lidar data under significant processing and
									memory constraints. Finally, Chapter 9
									overviews the findings of this thesis,
									presents flight data, and discusses future
									work.
								</Typography>
							</WorkCard>
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
