import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import WorkCard from './Components/WorkCard';

import Circle from '@material-ui/icons/Brightness1';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	title: {
		marginTop: '30px',
		marginBottom: '30px',
		fontWeight: '700',
		fontSize: '27px'
	},
	subtitleBox: {
		maxWidth: '800px',
		padding: '0 30px',
		margin: 'auto',
		marginBottom: '60px'
	},
	workCardBox: {
		maxWidth: '950px',
		padding: '0 30px',
		margin: 'auto'
	},
	article: {
		color: 'secondary',
		maxWidth: '100%',
		padding: '0 20px',
		marginBottom: '10px',
		textAlign: 'justify'
	},
	articleTitle: {
		fontFamily: 'Roboto',
		fontSize: 20,
		padding: '0 20px',
		marginTop: '40px',
		marginBottom: '10px',
		textAlign: 'justify'
	},
	articleEnd: {
		fontFamily: 'Roboto',
		fontSize: 20,
		padding: '0 20px',
		marginTop: '60px',
		textAlign: 'center',
		color: '#001aff',
		marginBottom: '40px'
	},
	imageElement: {
		maxWidth: '500px',
		width: '100vw',
		display: 'block',
		margin: 'auto'
	},
	eqElement: {
		maxWidth: '100%',

		display: 'block',
		margin: 'auto'
	},
	firstLetter: {
		fontFamily: 'unifrakturmaguntia, fantasy',
		fontSize: '50px',
		float: 'left',
		lineHeight: '1',
		paddingRight: '7px'
	}
}));

export default function Presentation(props) {
	const classes = useStyles();

	if (props.Language === 'English') {
		return (
			<div>
				<Typography
					align='center'
					variant='h3'
					className={classes.title}>
					| 02 : Works |
				</Typography>
				<Box className={classes.subtitleBox}>
					<Typography align='center'>
						Here is a showcase of my most relevant projects. They
						include some personal ones as well as some school
						related ones. You can learn more about them by clicking
						on the "Plus" button, I try to give some more details
						about each one and, in team projects, I focus mainly on
						my input.
					</Typography>
				</Box>
				<Box className={classes.workCardBox} align='center'>
					<Grid container className={classes.root} spacing={4}>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={'https://i.imgur.com/m1SDG4L.png'}
								imageTitle='HackerNewsReader'
								date='2020'
								title='HackerNews Reader'
								subTitle='Personal Project'
								description="Newest articles feed from Hacker News's API">
								<Typography className={classes.article}>
									<span className={classes.firstLetter}>
										H
									</span>
									acker News reader is a project that I
									pursued in order to work on my API skills.
								</Typography>
								<Typography className={classes.article}>
									You can check it out{' '}
									<a
										href='https://hackernews.pbdupire.com/'
										target='_blank'
										rel='noopener noreferrer'>
										here
									</a>
								</Typography>
								<Typography className={classes.articleTitle}>
									#01 - API
								</Typography>
								<Typography className={classes.article}>
									To reach the HackerNews API, I used the
									package "Axios". It gave me some experience
									with asynchronous calls and promises.
								</Typography>
								<Typography className={classes.articleTitle}>
									#02 - TESTS
								</Typography>
								<Typography className={classes.article}>
									To reach the HackerNews API, I used the
									package "Axios".
								</Typography>
								<Typography className={classes.articleEnd}>
									#THANK YOU FOR READING
								</Typography>
							</WorkCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={'https://i.imgur.com/hQqM2cl.png'}
								imageTitle='Picture of myself'
								date='2019'
								title='Portfolio'
								subTitle='Personal Project'
								description='From the design perspective to the content and purpose of it'>
								<Typography className={classes.article}>
									<span className={classes.firstLetter}>
										T
									</span>
									his is my portfolio website. After I started
									creating it I realized how difficult of a
									client your self can be. But overall it has
									been a fun and educational project. I
									deepened my knowledge of React.js and
									deployment processes. I also got acquainted
									with SEO.
								</Typography>
								<Typography className={classes.articleTitle}>
									#01 - ABOUT THIS PROJECT
								</Typography>
								<Typography className={classes.article}>
									I assume that in almost every company that I
									will be applying for a job, there would be
									fierce competition. As it is better to be
									ready than sorry, I created this website
									along with my personal branding to showcase
									my "awesome" work.
								</Typography>
								<img
									src={'https://i.imgur.com/QN1PR58.jpg'}
									alt='Landing of website'
									className={classes.imageElement}
								/>
								<Typography className={classes.articleTitle}>
									#02 - THE PROCESS
								</Typography>
								<Typography className={classes.article}>
									Conceptualizing and developing started
									around late June of this year (2019). I
									started mind-mapping to help break down my
									brand to its truest form and from there I
									started experimenting out ideas. There were
									a lot of paths for me to chose considering
									my tastes but day-by-day, I ditched dead-end
									iterations and built off others eventually
									coming to a conclusion that suited me best.
									<br />
									The basis of the wireframe is "Simplicity &
									Elegance"
								</Typography>
								<img
									src={'https://i.imgur.com/tHx8Rk1.png'}
									alt='Wireframe Landing page'
									className={classes.imageElement}
								/>
								<Typography className={classes.articleTitle}>
									#03 - FONTS & COLORS
								</Typography>
								<Typography
									className={classes.article}
									style={{
										fontFamily: 'Roboto',
										textAlign: 'right'
									}}>
									Roboto Bold
									<br />
									The quick brown fox jumps over the lazy dog
									<br />
									0123456789
								</Typography>
								<Typography className={classes.article}>
									Monospace
									<br />
									The quick brown fox jumps over the lazy dog
									<br />
									0123456789
								</Typography>
								<Typography
									className={classes.article}
									style={{ textAlign: 'right' }}>
									<Circle style={{ color: '#000000' }} />{' '}
									#000000
									<br />
									<Circle style={{ color: '#001aff' }} />{' '}
									#001aff
									<br />
									<Circle style={{ color: '#f0f0f0' }} />{' '}
									#f0f0f0
								</Typography>
								<Typography className={classes.articleTitle}>
									#04 - RESPONSIVE DESIGN
								</Typography>
								<img
									src={'https://i.imgur.com/gtiteyg.png'}
									alt='Mobile responsive'
									className={classes.imageElement}
								/>
								<Typography className={classes.articleEnd}>
									#THANK YOU FOR READING
								</Typography>
							</WorkCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={'https://i.imgur.com/Rwv5CdE.jpg'}
								imageTitle='SKZ image'
								date='2019'
								title='SKZ'
								subTitle='Team member'
								description='Annual school ski trip gathering 1400 students'>
								<Typography className={classes.article}>
									<span className={classes.firstLetter}>
										O
									</span>
									ne week at the winter sports for Arts &
									Métiers engineering students that took place
									from January the 19th to the 26th of 2018.
									Skiozarts (SKZ) celebrated its 30th edition
									last year intending to perpetuate a major
									challenge: bringing 1400 students together
									in a major alpine resort in the middle of
									January, which is the largest student ski
									event in Europe.
								</Typography>
								<Typography className={classes.article}>
									Important figures:
									<ul>
										<li>A budget of €600k</li>
										<li>Organizing team of 20 people</li>
										<li>9 months of planning</li>
									</ul>
								</Typography>
								<Typography className={classes.article}>
									I was responsible for all the graphical
									aspect of the event. From establishing the
									design guidelines to the design of the
									merchandising. My most relevant work will be
									presented below.
								</Typography>
								<Typography className={classes.articleTitle}>
									#01 - THE LOGO
								</Typography>
								<img
									src={'https://i.imgur.com/2lRgZZL.png'}
									alt='Logo with construction lines'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.article}>
									Traditionally, the logo contains 3 summits
									embedded in it. With this constraint in
									mind, I first started to work on the
									typography. The straight lines, harsh
									corners and fat typo remind us of the
									steepness of the mountains and its
									grandiosity while the roundness of the "S"
									sweetens the whole.
								</Typography>
								<Typography className={classes.article}>
									Another challenge was to integrate the 30th
									edition milestone sign. I choose the
									negative technique to make it discreet but
									still noticeable.
								</Typography>
								<Typography className={classes.articleTitle}>
									#02 - COLORS
								</Typography>
								<Typography className={classes.article}>
									In the past few years, the event wore mostly
									the blue color as it is often associated
									with the cold icy mountain. To change that
									and set the difference for the 30th edition,
									I went down a riskier path with a red to
									pink gradient.
								</Typography>
								<Typography className={classes.article}>
									<Circle style={{ color: '#d32027' }} />{' '}
									#d32027
									<br />
									<Circle style={{ color: '#e33c96' }} />{' '}
									#e33c96
									<br />
									<Circle style={{ color: '#d5d8dc' }} />{' '}
									#d5d8dc
								</Typography>
								<Typography className={classes.articleTitle}>
									#03 - TRAILER
								</Typography>
								<Typography className={classes.article}>
									The making of the trailer was my main
									challenge as I've only had little experience
									with video editing before. But it also
									provided me with a project to learn how to.
								</Typography>
								<Typography className={classes.article}>
									I jumped into it headfirst, experimenting a
									lot. After long hours, I was proud of the
									result.
								</Typography>
								<Typography className={classes.article}>
									The length of the video was reduced by 20%
									from the precedent one to make it more
									dynamic. It needed to be in 5 parts which
									are :
									<ul>
										<li>Teasing</li>
										<li>Meet the team</li>
										<li>Announcement of the location</li>
										<li>Day-activities</li>
										<li>Night-activities</li>
									</ul>
								</Typography>
								<iframe
									title='SKZ 2019 Trailer'
									maxWidth='500px'
									width='100%'
									height='340px'
									src='https://www.youtube.com/embed/cDr8XHTkZVI'
									frameBorder='0'
									allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen'
									allowfullscreen></iframe>
								<Typography className={classes.articleTitle}>
									#04 - MERCHANDISING
								</Typography>
								<Typography className={classes.article}>
									Each participant receives a bag full of
									personalized objects such as:
									<ul>
										<li>Sweatshirt</li>
										<li>Card deck</li>
										<li>Patch</li>
										<li>Cup</li>
										<li>External battery</li>
									</ul>
								</Typography>
								<Typography className={classes.article}>
									My job was two-sided. Indeed, on one side I
									negotiated the contract with the provider to
									get what we wanted into the fixed budget of
									€30k and to design the visuals for each one.
								</Typography>
								<Typography className={classes.article}>
									Here is an example of what the patch looked
									like:
								</Typography>
								<img
									src={'https://i.imgur.com/sYuzPVq.png'}
									alt='Ecusson SKZ'
									className={classes.imageElement}
									style={{
										maxWidth: '300px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.articleTitle}>
									#05 - VISUALS
								</Typography>
								<img
									src={'https://i.imgur.com/69plYOo.jpg'}
									alt='Mask Logo'
									className={classes.imageElement}
									style={{
										maxWidth: '300px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/Bpd9Bms.jpg'}
									alt='TBK Tour visual'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/2KVwFSZ.jpg'}
									alt='Price Visual SKZ'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/Z6nPeIh.jpg'}
									alt='Activities of SKZ'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/AXaCCUe.png'}
									alt='Final logo'
									className={classes.imageElement}
									style={{
										maxWidth: '300px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.articleEnd}>
									#THANK YOU FOR READING
								</Typography>
							</WorkCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={'https://i.imgur.com/cGXWZJ1.png'}
								imageTitle='Leafee Picture'
								date='2018'
								title='Birth of Leafee'
								subTitle='One of 4 Co-founders'
								description='From the Hackathon to the working product and everything in between'>
								<Typography className={classes.article}>
									<span className={classes.firstLetter}>
										W
									</span>
									hile completing my double degree in
									Budapest, 3 classmates and I participated in
									the 2018 edition of the MKB FintechLab
									Hackathon. Considered as the outsiders (no
									developer in the team, no existing product
									nor idea), we still managed to win in the
									category "Smart-Eco Home, an open banking
									concept" and occupy a proud second place for
									the whole event.
								</Typography>
								<Typography className={classes.article}>
									Here's how we did it.
								</Typography>
								<Typography className={classes.articleTitle}>
									#01 - THE CHALLENGE
								</Typography>
								<Typography className={classes.article}>
									"BOŚ Bank from Poland is interested in smart
									solutions that can reduce people's
									ecological footprint with the help of open
									banking standards. At the Fintechlab
									Hackathon taking place from the 30th of
									November until the 2nd of December 2018,
									teams will have 30 hours to develop the most
									effective prototypes which support
									environmental awareness and effectively
									reduce the negative impact on the
									environment. The special challenge is that
									the teams should use the MKB’s tools of open
									banking and/or smart home products to
									complete the task."
								</Typography>
								<img
									src={'https://i.imgur.com/Wt68Vz4.jpg'}
									alt='Winners of the Hackathon'
									className={classes.imageElement}
								/>
								<Typography className={classes.articleTitle}>
									#02 - THE IDEA
								</Typography>
								<Typography className={classes.article}>
									We assumed that many people want to be part
									of the ecological transition but lack an
									easy and intuitive tool to do so. We believe
									that such a tool could effectively raise
									awareness and change users’ consumption
									habits. We thought about using the digital
									transition of banks as a lever, making the
									best out of open banking, to link management
									of ﬁnances and ecological impact.
								</Typography>
								<Typography className={classes.article}>
									From this point on, a PFM-like (Personal
									Finance Management) solution came quite
									naturally. One that would be convenient to
									use regularly but filled with the right data
									to guide the user toward a greener
									lifestyle.
								</Typography>
								<Typography className={classes.article}>
									The Minimum Viable Product would have the
									following features:
									<ul>
										<li>
											All accounts available in one place
										</li>
										<li>Budgeting capabilities</li>
										<li>Privacy & Security</li>
										<li>
											Ecological footprint calculated from
											transactions
										</li>
										<li>
											Guidance toward the reduction of it
										</li>
									</ul>
								</Typography>
								<img
									src={'https://i.imgur.com/jTziNiN.jpg'}
									alt='presentation asset'
									className={classes.imageElement}
								/>
								<Typography className={classes.articleTitle}>
									#03 - THE PRODUCT
								</Typography>
								<Typography className={classes.article}>
									At the end of the hackathon, we already had
									a precise idea of what the product would
									look like, and the jury liked it. We
									produced the design of the main screens of
									the app, wrote a business plan, got
									acquainted with the regulation and did a lot
									of research on the maths behind the
									calculations.
								</Typography>
								<img
									src={'https://i.imgur.com/9jRaDrA.png'}
									alt='presentation of the app'
									className={classes.imageElement}
								/>
								<Typography className={classes.articleTitle}>
									#04 - WHAT AFTER ?
								</Typography>
								<Typography className={classes.article}>
									We could not just leave it there so we kept
									working on the idea to see where this would
									go. Our goal was mainly to learn as much as
									we could about the process of creating a
									business and run one. More personally, I saw
									an opportunity to learn to code and seized
									it.
								</Typography>
								<Typography className={classes.article}>
									We had our MVP about 3 months after and kept
									making iterations on its design and
									functionalities. You can visit the website{' '}
									<a
										href='http://www.leafeeapp.com'
										target='_blank'
										rel='noopener noreferrer'
										style={{
											textDecoration: 'none',
											color: '#001aff'
										}}>
										here
									</a>
									.
								</Typography>

								<Typography className={classes.articleEnd}>
									#THANK YOU FOR READING
								</Typography>
							</WorkCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={'https://i.imgur.com/km2UrRb.jpg'}
								imageTitle='UAI Team'
								date='2018'
								title='UAI'
								subTitle='team member'
								description='Annual school sports competition gathering 1000 students'>
								<Typography className={classes.article}>
									<span className={classes.firstLetter}>
										E
									</span>
									ach year, all of the students from Arts &
									Métiers can gather to a 3 days long sports
									competition. In 2018, it took place from the
									10th of May to the 13th. This edition
									attracted more than 1000 competitors.
								</Typography>
								<Typography className={classes.article}>
									Important figures:
									<ul>
										<li>A budget of €250k</li>
										<li>Organizing team of 20 people</li>
										<li>50 weeks of planning</li>
										<li>More than 20 sports</li>
									</ul>
								</Typography>
								<Typography className={classes.article}>
									I was in charge of the communication and the
									graphic designer for this event. I learned
									how to create a communication plan and
									design guidelines. This event taught me a
									lot in terms of event organization, project
									management and dealing with unexpected
									issues. My most relevant work will be
									presented below.
								</Typography>
								<Typography className={classes.articleTitle}>
									#01 - THE LOGO
								</Typography>
								<img
									src={'https://i.imgur.com/YSdHvIb.png'}
									alt='Logo with background'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.article}>
									For this edition, I wanted to give a
									prestigious look to the logo. Hence the
									Cinzel font was used. To bring the sport
									attribute to the logo, I chose to use the
									same palette as the Olympics and
									additionally, to bring the flame symbol into
									the mix. I was quite satisfied with the
									result but if I had to do it again, I would
									not opt for a thin font as it brought
									problems later.
								</Typography>
								<Typography className={classes.articleTitle}>
									#02 - COLORS
								</Typography>
								<Typography className={classes.article}>
									As stated above, the colors were extracted
									from the traditional Olympics colors.
								</Typography>
								<Typography className={classes.article}>
									<Circle style={{ color: '#f4c300' }} />{' '}
									#f4c300
									<br />
									<Circle style={{ color: '#0da447' }} />{' '}
									#0da447
									<br />
									<Circle style={{ color: '#df0024' }} />{' '}
									#df0024
									<br />
									<Circle style={{ color: '#0085c7' }} />{' '}
									#0085c7
									<br />
									<Circle style={{ color: '#666666' }} />{' '}
									#666666
								</Typography>
								<Typography className={classes.articleTitle}>
									#03 - ONLINE COMMUNICATION
								</Typography>
								<Typography className={classes.article}>
									The online communication was the crucial
									part of our communication plan as it was
									driving the sales rate of the tickets. As I
									was the graphic designer at the same time,
									it was easier to create a coherent look for
									the event. "Did you know ?" was our most
									successful campaign as we shared fun facts
									about each campus, raising the engagement
									level as well as the competitiveness between
									campuses. It also served as an important
									canal to share practical information.
								</Typography>
								<img
									src={'https://i.imgur.com/KZG6K9z.png'}
									alt='Poster of the even '
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px',
										maxWidth: '400px'
									}}
								/>
								<img
									src={'https://i.imgur.com/dpA3Vs9.png'}
									alt='Booklet for participants'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px',
										maxWidth: '400px'
									}}
								/>
								<Typography className={classes.articleTitle}>
									#04 - PRINTED COMMUNICATION
								</Typography>
								<Typography className={classes.article}>
									Once on-site, we printed visuals to stay in
									the atmosphere of the event. The
									participants were also given a booklet
									containing all of the practical information
									they might need.
								</Typography>
								<img
									src={'https://i.imgur.com/G7X0aYd.jpg'}
									alt='Poster of the even '
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px',
										maxWidth: '300px'
									}}
								/>
								<img
									src={'https://i.imgur.com/JZBXZbN.jpg'}
									alt='Booklet for participants'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.articleTitle}>
									#04 - MERCHANDISING
								</Typography>
								<Typography className={classes.article}>
									Each participant receives a bag full of
									personalized objects such as:
									<ul>
										<li>T-Shirt</li>
										<li>Totebag</li>
										<li>Cup</li>
										<li>Bracelet</li>
									</ul>
								</Typography>
								<Typography className={classes.article}>
									Here is an example of what the T-shirt logos
									looked like for each campus:
								</Typography>
								<img
									src={'https://i.imgur.com/uIgyUww.png'}
									alt='Tshirt UAI'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.articleTitle}>
									#05 - PHOTOS
								</Typography>
								<img
									src={'https://i.imgur.com/QmwHBmz.png'}
									alt='President of the vent'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/uZpO5KG.jpg'}
									alt='campus of Aix en Provence celebrating'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/0wkOiWD.jpg'}
									alt='campus of Metz celebrating'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/7J4VzXw.jpg'}
									alt='Band playing'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/An0dxQl.jpg'}
									alt='UAI Team'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.articleEnd}>
									#THANK YOU FOR READING
								</Typography>
							</WorkCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={'https://i.imgur.com/S3mdXEO.jpg'}
								imageTitle='Quadcopter'
								date='2016'
								title='Quadcopter'
								subTitle='Personnal Project'
								description='The math behind a stabilization algorithm'>
								<Typography className={classes.article}>
									<span className={classes.firstLetter}>
										F
									</span>
									lying objects have always fascinated me.
									Drones have become so popular that I could
									not stay away from them for too long. As I
									am soon going to be a mechanical engineer, I
									took on the challenge to understand the
									mechanic of the flight and to build my
									solution for it.
								</Typography>
								<Typography className={classes.article}>
									This article's purpose is not to be a
									tutorial, but rather is an overview of the
									project. This is why the explanations will
									be kept to the minimum for the sake of
									length.
								</Typography>
								<Typography className={classes.articleTitle}>
									#01 - Modelling
								</Typography>
								<Typography className={classes.article}>
									Before starting to dig into the math, it is
									important to make some assumptions as to
									simplify and define our problem. They are as
									follows:
								</Typography>
								<Typography className={classes.article}>
									<ul>
										<li>The structure is a rigid body</li>
										<li>
											The structure is perfectly
											symmetrical
										</li>
										<li>Motors are perfectly identical</li>
									</ul>
								</Typography>
								<Typography className={classes.article}>
									We'll start by writing the movement equation
									that comes from Newton's laws of motion.
								</Typography>
								<Typography className={classes.article}>
									<img
										src='https://latex.codecogs.com/svg.latex?\large&space;m\overrightarrow{a}=\overrightarrow{P}&plus;R\overrightarrow{T_{total}}&plus;\overrightarrow{T_{f}}'
										title='m\overrightarrow{a}=\overrightarrow{P}+R\overrightarrow{T_{total}}+\overrightarrow{T_{f}}'
										alt='Equation 2'
										className={classes.eqElement}
										style={{
											marginTop: '30px',
											marginBottom: '30px'
										}}
									/>
								</Typography>
								<Typography className={classes.article}>
									where{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;m'
										title='m'
										alt='value explanation 12'
									/>{' '}
									is the mass,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{a}'
										title='\overrightarrow{a}'
										alt='value explanation 13'
									/>{' '}
									the acceleration,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{P}'
										title='\overrightarrow{P}'
										alt='value explanation 8'
									/>{' '}
									the weight,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;R'
										title='R'
										alt='value explanation 9'
									/>{' '}
									the rotational matrix from the frame of the
									quadcopter to the inertial frame of
									reference,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{T_{total}}'
										title='\overrightarrow{T_{total}}'
										alt='value explanation 10'
									/>{' '}
									the thrust generated by the motors and{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{T_{f}}'
										title='\small \overrightarrow{T_{f}}'
										alt='value explanation 11'
									/>{' '}
									represents the frictional forces.
								</Typography>
								<Typography className={classes.article}>
									Now that we have the movement equation,
									let's find the rotational equation. We first
									need to express the torque in each axis of
									rotation. We obtain the following equation:
								</Typography>
								<Typography className={classes.article}>
									<img
										src='https://latex.codecogs.com/svg.latex?\large&space;\overrightarrow{\tau&space;_{total}}=&space;\begin{bmatrix}&space;\tau_{\psi}\\&space;\tau_{\theta&space;}\\&space;\tau_{\varphi&space;}&space;\end{bmatrix}&space;=\begin{bmatrix}&space;Lk(\omega&space;_{2}^{2}-\omega&space;_{4}^{2})\\&space;Lk(\omega&space;_{1}^{2}-\omega&space;_{3}^{2})\\&space;b(\omega&space;_{1}^{2}-\omega&space;_{2}^{2}&plus;\omega&space;_{3}^{2}-\omega&space;_{4}^{2})&space;\end{bmatrix}'
										title='\overrightarrow{\tau _{total}}=\begin{bmatrix} Lk(\omega _{2}^{2}-\omega _{4}^{2})\\ Lk(\omega _{1}^{2}-\omega _{3}^{2})\\ b((\omega _{1}^{2}-\omega _{2}^{2}+\omega _{3}^{2}-\omega _{4}^{2}))) \end{bmatrix}'
										alt='Equation 1'
										className={classes.eqElement}
										style={{
											marginTop: '30px',
											marginBottom: '30px'
										}}
									/>
								</Typography>
								<Typography className={classes.article}>
									where{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{\tau_{total}}'
										title='\small \overrightarrow{\tau_{total}}'
										alt='value explanation 1'
									/>{' '}
									is the vector of the corresponding torque in
									each axis of rotation,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;L'
										title='\small L'
										alt='value explanation 2'
									/>{' '}
									the length from the center of the quadcopter
									to the center of a propeller,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;k'
										title='\small k'
										alt='value explanation 3'
									/>{' '}
									a constant that links the motor rotational
									speed to the force it produced (varies with
									the shape and size of the propeller and the
									density of the air),{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\omega_{i}'
										title='\small \omega_{i}'
										alt='value explanation 4'
									/>{' '}
									the rotational speed of the motor i and{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;b'
										title='\small b'
										alt='value explanation 5'
									/>
									, a constant that links the the motor
									rotational speed to the torque it generates.
								</Typography>
								<Typography className={classes.article}>
									Finally, to obtain the variation of the
									rotational speed of the whole quadcopter, we
									use the previously calculated torque to
									obtain this equation:
								</Typography>
								<Typography className={classes.article}>
									<img
										src='https://latex.codecogs.com/svg.latex?\large&space;\overrightarrow{\dot{\omega&space;}}=\begin{bmatrix}&space;\dot{\omega&space;_{x}}\\&space;\dot{\omega&space;_{y}}\\&space;\dot{\omega&space;_{z}}&space;\end{bmatrix}&space;=&space;\begin{bmatrix}&space;\tau_{\psi}I_{xx}^{-1}\\&space;\tau_{\theta&space;}I_{yy}^{-1}\\&space;\tau_{\varphi&space;}I_{zz}^{-1}&space;\end{bmatrix}&space;-&space;\begin{bmatrix}&space;\frac{I_{yy}-I_{zz}}{I_{xx}}\omega&space;_{y}\omega&space;_{z}\\&space;\frac{I_{zz}-I_{xx}}{I_{yy}}\omega&space;_{x}\omega&space;_{z}\\&space;\frac{I_{xx}-I_{yy}}{I_{zz}}\omega&space;_{x}\omega&space;_{y}&space;\end{bmatrix}'
										title='\large \overrightarrow{\dot{\omega }}=\begin{bmatrix} \dot{\omega _{x}}\\ \dot{\omega _{y}}\\ \dot{\omega _{z}} \end{bmatrix} = \begin{bmatrix} \tau_{\psi}I_{xx}^{-1}\\ \tau_{\theta }I_{yy}^{-1}\\ \tau_{\varphi }I_{zz}^{-1} \end{bmatrix} - \begin{bmatrix} \frac{I_{yy}-I_{zz}}{I_{xx}}\omega _{y}\omega _{z}\\ \frac{I_{zz}-I_{xx}}{I_{yy}}\omega _{x}\omega _{z}\\ \frac{I_{xx}-I_{yy}}{I_{zz}}\omega _{x}\omega _{y} \end{bmatrix}'
										alt='Equation 3'
										className={classes.eqElement}
										style={{
											marginTop: '30px',
											marginBottom: '30px'
										}}
									/>
								</Typography>
								<Typography className={classes.article}>
									where{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\dot{\omega_{i}}'
										title='\small \dot{\omega_{i}}'
										alt='value explanation 6'
									/>{' '}
									is the variation of the rotational speed of
									the quadcopter and{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;I_{kk}'
										title='\small I_{kk}'
										alt='value explanation 7'
									/>{' '}
									are the diagonal values from the inertia
									matrix of our system.
								</Typography>
								<Typography className={classes.articleTitle}>
									#02 - PID CONTROLLER
								</Typography>
								<Typography className={classes.article}>
									We want our drone to automatically update
									the speed of the motors to stay stabilized.
									To do so, I implemented a PID controller
									that looks like this:
								</Typography>
								<img
									src={'https://i.imgur.com/JH0o1td.png'}
									alt='PID controller diagram'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.article}>
									with:
								</Typography>
								<img
									src='https://latex.codecogs.com/svg.latex?\large&space;e(t)=x_{d}(t)-x(t)'
									title='\large e(t)=x_{d}(t)-x(t)'
									alt='Equation 4'
									className={classes.eqElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src='https://latex.codecogs.com/svg.latex?\large&space;u(t)=K_{p}e(t)&plus;K_{I}\int_{0}^{t}e(\tau&space;)d\tau&plus;K_{D}\frac{\mathrm{d}&space;e(t)}{\mathrm{d}&space;t}'
									title='\large u(t)=K_{p}e(t)+K_{I}\int_{0}^{t}e(\tau )d\tau+K_{D}\frac{\mathrm{d} e(t)}{\mathrm{d} t}'
									alt='Equation 5'
									className={classes.eqElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.article}>
									where{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;u(t)'
										title='\small u(t)'
										alt='PID 1'
									/>{' '}
									is the corrected input,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;e(t)'
										title='\small e(t)'
										alt='PID 2'
									/>{' '}
									the error, ie the difference between the
									desired output and the corrected input and{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;K_{p},K_{I},K_{D}'
										title='\small K_{p},K_{I},K_{D}'
										alt='PID 3'
									/>{' '}
									the coefficient for our controller that need
									to be adjusted to obtain the best results.
								</Typography>
								<Typography className={classes.article}>
									The goal of our controller is to control the
									speed of each motor to keep the roll, pitch
									and yaw stabilized. After working out the
									equations, we arrive at our final model:
								</Typography>
								<img
									src='https://latex.codecogs.com/svg.latex?\LARGE&space;\left\{\begin{matrix}&space;\omega{_{1}}^{2}=\frac{mg}{cos\theta\,&space;cos\psi\,&space;4k}-\frac{2bu_{\psi&space;}I_{xx}&plus;u_{\varphi&space;}I_{zz}kL}{4bkL}\\&space;\omega{_{2}}^{2}=\frac{mg}{cos\theta\,&space;cos\psi\,&space;4k}&plus;\frac{u_{\varphi&space;}I_{zz}}{4b}-\frac{u_{\theta&space;}I_{yy}}{2kL}\\&space;\omega{_{3}}^{2}=\frac{mg}{cos\theta\,&space;cos\psi\,&space;4k}-\frac{-2bu_{\psi&space;}I_{xx}&plus;u_{\varphi&space;}I_{zz}kL}{4bkL}\\&space;\omega{_{4}}^{2}=\frac{mg}{cos\theta\,&space;cos\psi\,&space;4k}&plus;\frac{u_{\varphi&space;}I_{zz}}{4b}&plus;\frac{u_{\theta&space;}I_{yy}}{2kL}&space;\end{matrix}\right.'
									title='\LARGE \left\{\begin{matrix} \omega{_{1}}^{2}=\frac{mg}{cos\theta\, cos\psi\, 4k}-\frac{2bu_{\psi }I_{xx}+u_{\varphi }I_{zz}kL}{4bkL}\\ \omega{_{2}}^{2}=\frac{mg}{cos\theta\, cos\psi\, 4k}+\frac{u_{\varphi }I_{zz}}{4b}-\frac{u_{\theta }I_{yy}}{2kL}\\ \omega{_{3}}^{2}=\frac{mg}{cos\theta\, cos\psi\, 4k}-\frac{-2bu_{\psi }I_{xx}+u_{\varphi }I_{zz}kL}{4bkL}\\ \omega{_{4}}^{2}=\frac{mg}{cos\theta\, cos\psi\, 4k}+\frac{u_{\varphi }I_{zz}}{4b}+\frac{u_{\theta }I_{yy}}{2kL} \end{matrix}\right.'
									alt='Control model equation'
									className={classes.eqElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.article}>
									with{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;u_{\psi&space;},u_{\varphi&space;},u_{\theta&space;}'
										title='\small u_{\psi },u_{\varphi },u_{\theta }'
										alt='PID 2'
									/>{' '}
									the corresponding corrected input for the
									pitch, roll and yaw.
								</Typography>
								<Typography className={classes.articleTitle}>
									#03 - SIMULATIONS
								</Typography>
								<Typography className={classes.article}>
									From here on, I implemented these equations
									into a python script to simulate the
									response of the system.
								</Typography>
								<Typography className={classes.article}>
									I imagined a scenario where the drone would
									be 10m high with a 10° offset in each of the
									rotational axes. Here are the results I got
									first for the position and then for the
									angular position:
								</Typography>
								<img
									src={'https://i.imgur.com/NaLaIkR.png'}
									alt='corrected position graph'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/bJVTCGN.png'}
									alt='Angular position corrected'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.article}>
									As we can see from the graphs, the
									quadcopter can stay at a set altitude while
									converging towards a stabilized position.
								</Typography>
								<Typography className={classes.article}>
									The equations seem to be working properly,
									but the real challenge comes when we
									implement this model into a real system,
									where our assumptions don't necessarily
									apply.
								</Typography>
								<Typography className={classes.article}>
									You can find the code for this simulation{' '}
									<a
										href='https://github.com/Pierre-Baptiste/Quadcopter-simulation'
										target='_blank'
										rel='noopener noreferrer'
										style={{
											textDecoration: 'none',
											color: '#001aff'
										}}>
										here
									</a>
									.
								</Typography>
								<Typography className={classes.articleEnd}>
									#THANK YOU FOR READING
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
					align='center'
					variant='h3'
					className={classes.title}>
					| 02 : Travaux |
				</Typography>
				<Box className={classes.subtitleBox}>
					<Typography align='center'>
						Voici une vitrine de mes projets les plus pertinents. Il
						y en a des personnels et d'autres liés à l'école. Vous
						pouvez en apprendre plus sur eux en cliquant sur le
						bouton "Plus", j'essaie de donner plus de détails sur
						chacun d'eux et, dans les projets d'équipe, je me
						concentre principalement sur mon apport.
					</Typography>
				</Box>
				<Box className={classes.workCardBox} align='center'>
					<Grid container className={classes.root} spacing={4}>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={'https://i.imgur.com/hQqM2cl.png'}
								imageTitle='Picture of myself'
								date='2019'
								title='Portfolio'
								subTitle='Réalisation de ce site internet'
								description='Du design à son utilité en passant par son contenu'>
								<Typography className={classes.article}>
									<span className={classes.firstLetter}>
										C
									</span>
									e site web à une vocation de portfolio.
									C'est-à-dire qu'il recense mes projets et
									mes expériences. Très vite après avoir
									commencé sa création, j'ai réalisé à quel
									point il peut être difficile d'être son
									propre client. Dans l'ensemble, ce fut un
									projet intéressant et éducatif. J'ai
									approfondi ma connaissance de React.js et
									des processus de déploiement. J'ai aussi
									fait connaissance avec le référencement.
								</Typography>
								<Typography className={classes.articleTitle}>
									#01 - À PROPOS DE CE PROJET
								</Typography>
								<Typography className={classes.article}>
									Je suppose que dans presque toutes les
									entreprises où je postulerai pour un emploi,
									il y aura une concurrence rude. Comme il
									vaut mieux prévenir que guérir, j'ai créé ce
									site web pour montrer ma "marque" et
									partager mes projets.
								</Typography>
								<img
									src={'https://i.imgur.com/QN1PR58.jpg'}
									alt='Landing of website'
									className={classes.imageElement}
								/>
								<Typography className={classes.articleTitle}>
									#02 - LE PROCESSUS
								</Typography>
								<Typography className={classes.article}>
									La conceptualisation et le développement ont
									commencé vers fin juin de cette année
									(2019). J'ai d'abord commencé loin de
									l'ordinateur, sur du papier, à décomposer ce
									qui me définit et me ressemble et à partir
									de là, j'ai commencé à expérimenter. Jour
									après jour le résultat prenait forme jusqu'à
									arriver à ce que vous avez sous les yeux.
									<br />
									Le fil rouge que je voulais concerver est
									"Simplicité & Élégance".
								</Typography>
								<img
									src={'https://i.imgur.com/tHx8Rk1.png'}
									alt='Wireframe Landing page'
									className={classes.imageElement}
								/>
								<Typography className={classes.articleTitle}>
									#03 - POLICES & COULEURS
								</Typography>
								<Typography
									className={classes.article}
									style={{
										fontFamily: 'Roboto',
										textAlign: 'right'
									}}>
									Roboto Bold
									<br />
									The quick brown fox jumps over the lazy dog
									<br />
									0123456789
								</Typography>
								<Typography className={classes.article}>
									Monospace
									<br />
									The quick brown fox jumps over the lazy dog
									<br />
									0123456789
								</Typography>
								<Typography
									className={classes.article}
									style={{ textAlign: 'right' }}>
									<Circle style={{ color: '#000000' }} />{' '}
									#000000
									<br />
									<Circle style={{ color: '#001aff' }} />{' '}
									#001aff
									<br />
									<Circle style={{ color: '#f0f0f0' }} />{' '}
									#f0f0f0
								</Typography>
								<Typography className={classes.articleTitle}>
									#04 - VERSION RESPONSIVE
								</Typography>
								<img
									src={'https://i.imgur.com/gtiteyg.png'}
									alt='Mobile responsive'
									className={classes.imageElement}
								/>
								<Typography className={classes.articleEnd}>
									#MERCI D'AVOIR LU JUSQUE LÀ
								</Typography>
							</WorkCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={'https://i.imgur.com/Rwv5CdE.jpg'}
								imageTitle='SKZ image'
								date='2019'
								title='SKZ'
								subTitle='Séjour au ski annuel des A&M'
								description='En charge des créations graphiques et des goodies'>
								<Typography className={classes.article}>
									<span className={classes.firstLetter}>
										U
									</span>
									ne semaine aux sports d'hiver pour les
									élèves ingénieurs Arts & Métiers qui s'est
									déroulée du 19 au 26 janvier 2018. Skiozarts
									(SKZ) a fêté cette année-là sa 30ème édition
									avec l'intention de perpétuer la tradition:
									réunir 1400 étudiants dans une grande
									station de ski alpine mi-janvier, et rester
									le plus grand événement étudiant de ski en
									Europe.
								</Typography>
								<Typography className={classes.article}>
									Chiffres importants :
									<ul>
										<li>Un budget de 600.000€</li>
										<li>
											Équipe organisatrice de 20 personnes
										</li>
										<li>9 mois de préparation</li>
									</ul>
								</Typography>
								<Typography className={classes.article}>
									J'étais en charge de tout l'aspect graphique
									de l'événement. De l'établissement de la
									charte graphique à la conception des
									"goodies".
								</Typography>
								<Typography className={classes.articleTitle}>
									#01 - LE LOGO
								</Typography>
								<img
									src={'https://i.imgur.com/2lRgZZL.png'}
									alt='Logo with construction lines'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.article}>
									Traditionnellement, le logo contient 3
									sommets. C'est gardant cette contrainte à
									l'esprit que j'ai commencé à travailler sur
									la typographie. Les lignes droites, les
									angles marqués et la typo grasse nous
									rappellent la raideur des montagnes et son
									caractère imposant tandis que la rondeur du
									"S" adoucit l'ensemble.
								</Typography>
								<Typography className={classes.article}>
									Un autre défi consistait à intégrer
									l'indication de l'édition, la 30ème quand
									même. J'ai choisi de l'implanter en négatif
									pour la rendre discrète mais quand même
									perceptible.
								</Typography>
								<Typography className={classes.articleTitle}>
									#02 - COULEURS
								</Typography>
								<Typography className={classes.article}>
									Au cours des dernières années, l'événement
									se vêtait surtout de la couleur bleue, étant
									souvent associée à la montagne glacée et
									froide. Pour changer cela et marquer la
									différence pour la 30ème édition, j'ai
									emprunté un chemin plus risqué avec un
									dégradé de rouge à rose.
								</Typography>
								<Typography className={classes.article}>
									<Circle style={{ color: '#d32027' }} />{' '}
									#d32027
									<br />
									<Circle style={{ color: '#e33c96' }} />{' '}
									#e33c96
									<br />
									<Circle style={{ color: '#d5d8dc' }} />{' '}
									#d5d8dc
								</Typography>
								<Typography className={classes.articleTitle}>
									#03 - TRAILER
								</Typography>
								<Typography className={classes.article}>
									La réalisation de la bande-annonce a été mon
									principal défi car je n'avais que peu
									d'expérience dans le montage vidéo
									auparavant. Mais cela m'a aussi fourni un
									projet pour justifier d'apprendre à le
									faire.
								</Typography>
								<Typography className={classes.article}>
									J'y suis allé la tête la première, en
									expérimentant beaucoup. Après de longues
									heures, je suis, je pense, arrivé à un
									résultat convaincant.
								</Typography>
								<Typography className={classes.article}>
									La longueur de la vidéo a été réduite de 20%
									par rapport à celle de l'édition précédente
									pour la rendre plus dynamique. Il devait y
									figurer 5 "chapitres" :
									<ul>
										<li>Teasing</li>
										<li>Présentation de l'équipe</li>
										<li>Annoncer le lieu du séjour</li>
										<li>
											Présenter les activités de jour et
											de nuit
										</li>
									</ul>
								</Typography>
								<iframe
									title='SKZ 2019 Trailer'
									maxWidth='500px'
									width='100%'
									height='340px'
									src='https://www.youtube.com/embed/cDr8XHTkZVI'
									frameBorder='0'
									allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen'
									allowfullscreen></iframe>
								<Typography className={classes.articleTitle}>
									#04 - GOODIES
								</Typography>
								<Typography className={classes.article}>
									Chaque participant reçoit un sac rempli
									d'objets personnalisés tels que :
									<ul>
										<li>Pull</li>
										<li>Jeu de cartes</li>
										<li>Écusson</li>
										<li>Gobelet</li>
										<li>Batterie externe</li>
									</ul>
								</Typography>
								<Typography className={classes.article}>
									Mon travail était à double facette. En
									effet, d'un côté, j'ai négocié le contrat
									avec le fournisseur pour obtenir ce que nous
									voulions dans le budget fixe de 30k€ et de
									l'autre j'ai conçu les visuels pour chacun
									d'eux.
								</Typography>
								<Typography className={classes.article}>
									Voici un exemple de ce à quoi ressemblait
									l'écusson :
								</Typography>
								<img
									src={'https://i.imgur.com/sYuzPVq.png'}
									alt='Ecusson SKZ'
									className={classes.imageElement}
									style={{
										maxWidth: '300px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.articleTitle}>
									#05 - VISUELS
								</Typography>
								<img
									src={'https://i.imgur.com/69plYOo.jpg'}
									alt='Mask Logo'
									className={classes.imageElement}
									style={{
										maxWidth: '300px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/Bpd9Bms.jpg'}
									alt='TBK Tour visual'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/2KVwFSZ.jpg'}
									alt='Price Visual SKZ'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/Z6nPeIh.jpg'}
									alt='Activities of SKZ'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/AXaCCUe.png'}
									alt='Final logo'
									className={classes.imageElement}
									style={{
										maxWidth: '300px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.articleEnd}>
									#MERCI D'AVOIR LU JUSQUE LÀ
								</Typography>
							</WorkCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={'https://i.imgur.com/cGXWZJ1.png'}
								imageTitle='Leafee Picture'
								date='2018'
								title='Création de Leafee'
								subTitle='Le commencement de la startup'
								description='Du Hackathon au produit fonctionnel, le périple'>
								<Typography className={classes.article}>
									<span className={classes.firstLetter}>
										T
									</span>
									out en complétant mon double diplôme à
									Budapest, 3 camarades de classe et moi avons
									participé à l'édition 2018 du MKB FintechLab
									Hackathon. Considérés comme les outsiders
									(pas de développeur dans l'équipe, pas de
									produit existant ni d'idée au début), nous
									avons quand même réussi à gagner dans la
									catégorie "Smart-Eco Home, an open banking
									concept" et à décrocher une seconde place
									pour l'ensemble de l'événement.
								</Typography>
								<Typography className={classes.article}>
									Mais comment avons nous fait?
								</Typography>
								<Typography className={classes.articleTitle}>
									#01 - LE CHALLENGE
								</Typography>
								<Typography className={classes.article}>
									"BOŚ Bank, de Pologne, s'intéresse aux
									solutions intelligentes qui permettent de
									réduire l'empreinte écologique à l'aide de
									standards d'open banking. Lors du Fintechlab
									Hackathon qui se déroulera du 30 novembre au
									2 décembre 2018, les équipes disposeront de
									36 heures pour développer les solutions les
									plus efficaces en matière de sensibilisation
									à l'environnement et de réduction des
									impacts négatifs sur l'environnement. La
									contrainte est que les équipes devront
									utiliser les outils open banking de MKB et /
									ou des produits de maison connectées"
								</Typography>
								<img
									src={'https://i.imgur.com/Wt68Vz4.jpg'}
									alt='Winners of the Hackathon'
									className={classes.imageElement}
								/>
								<Typography className={classes.articleTitle}>
									#02 - L'IDÉE
								</Typography>
								<Typography className={classes.article}>
									Nous avons supposé d'abord que beaucoup de
									gens ont la volonté de participer à la
									transition écologique, mais qu'il leur
									manque un outil facile et intuitif pour le
									faire. Nous croyons qu'un tel outil pourrait
									efficacement sensibiliser et changer les
									habitudes de consommation des utilisateurs.
									Nous avons pensé à utiliser la transition
									numérique des banques comme levier, en
									tirant le meilleur parti de l'open banking
									pour lier la gestion de ﬁnances et l'impact
									écologique.
								</Typography>
								<Typography className={classes.article}>
									A partir de ce moment, une solution de type
									PFM (Personal Finance Management) est
									apparue tout naturellement. Un outil qui
									serait pratique à utiliser régulièrement,
									mais rempli de données pertinentes pour
									guider l'utilisateur vers un mode de vie
									plus écologique.
								</Typography>
								<Typography className={classes.article}>
									Le MVP (Minimum Viable Product) aurait donc
									pour fonctionnalité de base:
									<ul>
										<li>
											Tous les comptes accessibles dans un
											même endroit
										</li>
										<li>Possibilité de gérer son budget</li>
										<li>Sécurité et confidentialité</li>
										<li>
											Impact écologique calculé à partir
											des transactions
										</li>
										<li>
											Assistance dans la réduction de cet
											impact
										</li>
									</ul>
								</Typography>
								<img
									src={'https://i.imgur.com/jTziNiN.jpg'}
									alt='presentation asset'
									className={classes.imageElement}
								/>
								<Typography className={classes.articleTitle}>
									#03 - LE PRODUIT
								</Typography>
								<Typography className={classes.article}>
									A la fin du hackathon, nous avions déjà une
									idée précise de ce à quoi ressemblerait le
									produit et, vu le résultat, le jury a
									apprécié l'idée. Nous avons réalisé la
									conception graphique des écrans principaux
									de l'application, rédigé un business plan,
									pris connaissance de la réglementation et
									fait beaucoup de recherches sur les méthodes
									calculatoires pour arriver à nos fins.
								</Typography>
								<img
									src={'https://i.imgur.com/9jRaDrA.png'}
									alt='presentation of the app'
									className={classes.imageElement}
								/>
								<Typography className={classes.articleTitle}>
									#04 - ET ENSUITE ?
								</Typography>
								<Typography className={classes.article}>
									Nous ne pouvions pas en rester là, nous
									avons alors continué à travailler sur l'idée
									pour voir où cela nous mènerait. Notre but
									était principalement d'en apprendre le plus
									possible sur le processus de création et
									d'exploitation d'une entreprise. Plus
									personnellement, j'ai vu une opportunité
									d'apprendre à coder et j'en ai profité.
								</Typography>
								<Typography className={classes.article}>
									Nous avons produit notre MVP environ 3 mois
									après et nous avons continué à faire des
									itérations sur sa conception et ses
									fonctionnalités. Vous pouvez visiter le site
									Web{' '}
									<a
										href='http://www.leafeeapp.com'
										target='_blank'
										rel='noopener noreferrer'
										style={{
											textDecoration: 'none',
											color: '#001aff'
										}}>
										ici
									</a>
									.
								</Typography>

								<Typography className={classes.articleEnd}>
									#MERCI D'AVOIR LU JUSQUE LÀ
								</Typography>
							</WorkCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={'https://i.imgur.com/km2UrRb.jpg'}
								imageTitle='UAI Team'
								date='2018'
								title='UAI'
								subTitle='Compétition sportive annuelle des A&M'
								description='En charge des créations graphiques et de la communication'>
								<Typography className={classes.article}>
									<span className={classes.firstLetter}>
										C
									</span>
									haque année, tous les étudiants des Arts &
									Métiers ont la possibilité de se réunir pour
									une compétition sportive de 3 jours. En
									2018, elle s'est déroulée du 10 au 13 mai.
									Cette édition a attiré plus de 1000
									participants.
								</Typography>
								<Typography className={classes.article}>
									Chiffres importants :
									<ul>
										<li>Un budget de 250.000€</li>
										<li>
											Équipe organisatrice de 20 personnes
										</li>
										<li>50 semaines de préparation</li>
										<li>Plus de 20 sports</li>
									</ul>
								</Typography>
								<Typography className={classes.article}>
									J'étais en charge de la communication et du
									graphisme de l'événement. J'ai appris à
									créer un plan de communication et à
									concevoir une charte graphique. Cet
									événement m'a beaucoup apporté en termes
									d'organisation d'événements, de gestion de
									projets et de gestion des imprévus.
								</Typography>
								<Typography className={classes.articleTitle}>
									#01 - LE LOGO
								</Typography>
								<img
									src={'https://i.imgur.com/YSdHvIb.png'}
									alt='Logo with background'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.article}>
									Pour cette édition, j'ai voulu donner un
									aspect prestigieux au logo. C'est pourquoi
									la police "Cinzel" a été utilisée. Pour
									apporter l'attribut sportif à celui-ci, j'ai
									choisi d'utiliser la même palette que pour
									les Jeux Olympiques et d'ajouter le symbole
									de la flamme au mélange. J'étais satisfait
									du résultat, mais si je devais le refaire,
									je n'opterais pas pour une police mince car
									cela a posé des problèmes plus tard.
								</Typography>
								<Typography className={classes.articleTitle}>
									#02 - COULEURS
								</Typography>
								<Typography className={classes.article}>
									Comme indiqué ci-dessus, les couleurs ont
									été extraites des couleurs traditionnelles
									des Jeux Olympiques.
								</Typography>
								<Typography className={classes.article}>
									<Circle style={{ color: '#f4c300' }} />{' '}
									#f4c300
									<br />
									<Circle style={{ color: '#0da447' }} />{' '}
									#0da447
									<br />
									<Circle style={{ color: '#df0024' }} />{' '}
									#df0024
									<br />
									<Circle style={{ color: '#0085c7' }} />{' '}
									#0085c7
									<br />
									<Circle style={{ color: '#666666' }} />{' '}
									#666666
								</Typography>
								<Typography className={classes.articleTitle}>
									#03 - COMMUNICATION EN LIGNE
								</Typography>
								<Typography className={classes.article}>
									La communication en ligne était l'élément
									crucial de notre plan de communication, car
									c'est elle qui influençait le taux de vente
									des billets. Comme j'étais en même temps le
									graphiste, il était plus facile de créer un
									look cohérent pour l'événement. Notre
									campagne "Le saviez-vous?" fut la plus
									réussie, nous avons partagé des anecdotes
									amusantes sur chaque campus, augmentant
									ainsi le niveau d'engagement ainsi que la
									compétitivité entre les participants. Il a
									également servi de canal important pour le
									partage d'informations pratiques.
								</Typography>
								<img
									src={'https://i.imgur.com/KZG6K9z.png'}
									alt='Poster of the even '
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px',
										maxWidth: '400px'
									}}
								/>
								<img
									src={'https://i.imgur.com/dpA3Vs9.png'}
									alt='Booklet for participants'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px',
										maxWidth: '400px'
									}}
								/>
								<Typography className={classes.articleTitle}>
									#04 - COMMUNICATION IMPRIMÉE
								</Typography>
								<Typography className={classes.article}>
									Une fois sur place, nous avons imprimé des
									visuels pour préserver l'ambiance de
									l'événement. Les participants ont également
									reçu un livret contenant toutes les
									informations pratiques dont ils pourraient
									avoir besoin.
								</Typography>
								<img
									src={'https://i.imgur.com/G7X0aYd.jpg'}
									alt='Poster of the even '
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px',
										maxWidth: '300px'
									}}
								/>
								<img
									src={'https://i.imgur.com/JZBXZbN.jpg'}
									alt='Booklet for participants'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.articleTitle}>
									#04 - GOODIES
								</Typography>
								<Typography className={classes.article}>
									Chaque participant reçoit un sac rempli
									d'objets personnalisés tels que :
									<ul>
										<li>T-Shirt</li>
										<li>Totebag</li>
										<li>Gobelet</li>
										<li>Bracelet</li>
									</ul>
								</Typography>
								<Typography className={classes.article}>
									Voici un exemple de ce à quoi ressemblaient
									les logos des t-shirts pour chaque campus :
								</Typography>
								<img
									src={'https://i.imgur.com/uIgyUww.png'}
									alt='Tshirt UAI'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.articleTitle}>
									#05 - PHOTOS
								</Typography>
								<img
									src={'https://i.imgur.com/QmwHBmz.png'}
									alt='President of the vent'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/uZpO5KG.jpg'}
									alt='campus of Aix en Provence celebrating'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/0wkOiWD.jpg'}
									alt='campus of Metz celebrating'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/7J4VzXw.jpg'}
									alt='Band playing'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/An0dxQl.jpg'}
									alt='UAI Team'
									className={classes.imageElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.articleEnd}>
									#MERCI D'AVOIR LU JUSQUE LÀ
								</Typography>
							</WorkCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<WorkCard
								image={'https://i.imgur.com/S3mdXEO.jpg'}
								imageTitle='Quadcopter'
								date='2016'
								title='Quadcopter'
								subTitle='Projet personnel'
								description='Les maths derrière un contrôleur de vol basé sur Arduino'>
								<Typography className={classes.article}>
									<span className={classes.firstLetter}>
										L
									</span>
									es objets volants m'ont toujours fasciné.
									Les drones sont devenus si populaires que je
									ne pouvais pas en rester éloigné trop
									longtemps. Comme je vais bientôt devenir
									ingénieur, j'ai relevé le défi de comprendre
									la mécanique du vol et de la simuler.
								</Typography>
								<Typography className={classes.article}>
									Le but de ce site n'est pas de proposer un
									tutoriel, mais plutôt de vous présenter mon
									projets. C'est pourquoi les explications
									seront réduites au minimum pour des raisons
									de longueur.
								</Typography>
								<Typography className={classes.articleTitle}>
									#01 - MODÉLISATION
								</Typography>
								<Typography className={classes.article}>
									Avant de commencer à creuser dans les maths,
									il est important de faire quelques
									suppositions afin de simplifier et de
									définir notre problème. Elles sont les
									suivantes:
								</Typography>
								<Typography className={classes.article}>
									<ul>
										<li>La structure est indéformable</li>
										<li>
											La structure est parfaitement
											symétrique
										</li>
										<li>
											Les quatres moteurs sont strictement
											identiques
										</li>
									</ul>
								</Typography>
								<Typography className={classes.article}>
									Nous allons donc commencer avec le principe
									fondamental de la dynamique.
								</Typography>
								<Typography className={classes.article}>
									<img
										src='https://latex.codecogs.com/svg.latex?\large&space;m\overrightarrow{a}=\overrightarrow{P}&plus;R\overrightarrow{T_{total}}&plus;\overrightarrow{T_{f}}'
										title='m\overrightarrow{a}=\overrightarrow{P}+R\overrightarrow{T_{total}}+\overrightarrow{T_{f}}'
										alt='Equation 2'
										className={classes.eqElement}
										style={{
											marginTop: '30px',
											marginBottom: '30px'
										}}
									/>
								</Typography>
								<Typography className={classes.article}>
									où{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;m'
										title='m'
										alt='value explanation 12'
									/>{' '}
									est la masse,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{a}'
										title='\overrightarrow{a}'
										alt='value explanation 13'
									/>{' '}
									l'accélération,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{P}'
										title='\overrightarrow{P}'
										alt='value explanation 8'
									/>{' '}
									le poids,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;R'
										title='R'
										alt='value explanation 9'
									/>{' '}
									la matrice de rotation du repère du
									quadricoptère au repère inertiel de
									référence,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{T_{total}}'
										title='\overrightarrow{T_{total}}'
										alt='value explanation 10'
									/>{' '}
									la poussée générée par les moteurs{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{T_{f}}'
										title='\small \overrightarrow{T_{f}}'
										alt='value explanation 11'
									/>{' '}
									représente les forces de frottement.
								</Typography>
								<Typography className={classes.article}>
									Maintenant que nous avons l'équation du
									mouvement linéaire, trouvons l'équation en
									rotation. Il faut d'abord exprimer le couple
									pour chaque axe de rotation. On obtient
									l'équation suivante :
								</Typography>
								<Typography className={classes.article}>
									<img
										src='https://latex.codecogs.com/svg.latex?\large&space;\overrightarrow{\tau&space;_{total}}=&space;\begin{bmatrix}&space;\tau_{\psi}\\&space;\tau_{\theta&space;}\\&space;\tau_{\varphi&space;}&space;\end{bmatrix}&space;=\begin{bmatrix}&space;Lk(\omega&space;_{2}^{2}-\omega&space;_{4}^{2})\\&space;Lk(\omega&space;_{1}^{2}-\omega&space;_{3}^{2})\\&space;b(\omega&space;_{1}^{2}-\omega&space;_{2}^{2}&plus;\omega&space;_{3}^{2}-\omega&space;_{4}^{2})&space;\end{bmatrix}'
										title='\overrightarrow{\tau _{total}}=\begin{bmatrix} Lk(\omega _{2}^{2}-\omega _{4}^{2})\\ Lk(\omega _{1}^{2}-\omega _{3}^{2})\\ b((\omega _{1}^{2}-\omega _{2}^{2}+\omega _{3}^{2}-\omega _{4}^{2}))) \end{bmatrix}'
										alt='Equation 1'
										className={classes.eqElement}
										style={{
											marginTop: '30px',
											marginBottom: '30px'
										}}
									/>
								</Typography>
								<Typography className={classes.article}>
									où{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\overrightarrow{\tau_{total}}'
										title='\small \overrightarrow{\tau_{total}}'
										alt='value explanation 1'
									/>{' '}
									est un vecteur représentant le couple
									correspondant dans chaque axe de rotation,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;L'
										title='\small L'
										alt='value explanation 2'
									/>{' '}
									la longueur du centre du quadricoptère au
									centre d'une hélice,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;k'
										title='\small k'
										alt='value explanation 3'
									/>{' '}
									une constante qui lie la vitesse de rotation
									du moteur à la poussée qu'il produit (qui
									varie avec la forme et taille de l'hélice et
									la densité de l'air),{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\omega_{i}'
										title='\small \omega_{i}'
										alt='value explanation 4'
									/>{' '}
									la vitesse de rotation du moteur i{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;b'
										title='\small b'
										alt='value explanation 5'
									/>
									, une constante qui lie la vitesse de
									rotation du moteur au couple qu'il génère.
								</Typography>
								<Typography className={classes.article}>
									Enfin, pour obtenir la variation de la
									vitesse de rotation de l'ensemble du
									quadricoptère, nous utilisons le couple
									précédemment calculé pour obtenir cette
									équation :
								</Typography>
								<Typography className={classes.article}>
									<img
										src='https://latex.codecogs.com/svg.latex?\large&space;\overrightarrow{\dot{\omega&space;}}=\begin{bmatrix}&space;\dot{\omega&space;_{x}}\\&space;\dot{\omega&space;_{y}}\\&space;\dot{\omega&space;_{z}}&space;\end{bmatrix}&space;=&space;\begin{bmatrix}&space;\tau_{\psi}I_{xx}^{-1}\\&space;\tau_{\theta&space;}I_{yy}^{-1}\\&space;\tau_{\varphi&space;}I_{zz}^{-1}&space;\end{bmatrix}&space;-&space;\begin{bmatrix}&space;\frac{I_{yy}-I_{zz}}{I_{xx}}\omega&space;_{y}\omega&space;_{z}\\&space;\frac{I_{zz}-I_{xx}}{I_{yy}}\omega&space;_{x}\omega&space;_{z}\\&space;\frac{I_{xx}-I_{yy}}{I_{zz}}\omega&space;_{x}\omega&space;_{y}&space;\end{bmatrix}'
										title='\large \overrightarrow{\dot{\omega }}=\begin{bmatrix} \dot{\omega _{x}}\\ \dot{\omega _{y}}\\ \dot{\omega _{z}} \end{bmatrix} = \begin{bmatrix} \tau_{\psi}I_{xx}^{-1}\\ \tau_{\theta }I_{yy}^{-1}\\ \tau_{\varphi }I_{zz}^{-1} \end{bmatrix} - \begin{bmatrix} \frac{I_{yy}-I_{zz}}{I_{xx}}\omega _{y}\omega _{z}\\ \frac{I_{zz}-I_{xx}}{I_{yy}}\omega _{x}\omega _{z}\\ \frac{I_{xx}-I_{yy}}{I_{zz}}\omega _{x}\omega _{y} \end{bmatrix}'
										alt='Equation 3'
										className={classes.eqElement}
										style={{
											marginTop: '30px',
											marginBottom: '30px'
										}}
									/>
								</Typography>
								<Typography className={classes.article}>
									où{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;\dot{\omega_{i}}'
										title='\small \dot{\omega_{i}}'
										alt='value explanation 6'
									/>{' '}
									est la variation de la vitesse de rotation
									du quadricoptère et{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;I_{kk}'
										title='\small I_{kk}'
										alt='value explanation 7'
									/>{' '}
									sont les valeurs diagonales de la matrice
									d'inertie de notre système.
								</Typography>
								<Typography className={classes.articleTitle}>
									#02 - CORRECTEUR PID
								</Typography>
								<Typography className={classes.article}>
									Nous voulons que notre drone mette
									automatiquement à jour la vitesse des
									moteurs pour qu'il reste stabilisé. Pour ce
									faire, j'ai implémenté un contrôleur PID qui
									ressemble à ceci :
								</Typography>
								<img
									src={'https://i.imgur.com/JH0o1td.png'}
									alt='PID controller diagram'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.article}>
									with:
								</Typography>
								<img
									src='https://latex.codecogs.com/svg.latex?\large&space;e(t)=x_{d}(t)-x(t)'
									title='\large e(t)=x_{d}(t)-x(t)'
									alt='Equation 4'
									className={classes.eqElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src='https://latex.codecogs.com/svg.latex?\large&space;u(t)=K_{p}e(t)&plus;K_{I}\int_{0}^{t}e(\tau&space;)d\tau&plus;K_{D}\frac{\mathrm{d}&space;e(t)}{\mathrm{d}&space;t}'
									title='\large u(t)=K_{p}e(t)+K_{I}\int_{0}^{t}e(\tau )d\tau+K_{D}\frac{\mathrm{d} e(t)}{\mathrm{d} t}'
									alt='Equation 5'
									className={classes.eqElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.article}>
									où{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;u(t)'
										title='\small u(t)'
										alt='PID 1'
									/>{' '}
									est l'entrée corrigée,{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;e(t)'
										title='\small e(t)'
										alt='PID 2'
									/>{' '}
									l'erreur, ie la différence entre la sortie
									désirée et l'entrée corrigée et{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;K_{p},K_{I},K_{D}'
										title='\small K_{p},K_{I},K_{D}'
										alt='PID 3'
									/>{' '}
									les coefficients pour notre correcteur qui
									nécessitent d'être ajusté pour obtenir les
									meilleures performances.
								</Typography>
								<Typography className={classes.article}>
									Le but de notre correcteur est de contrôler
									la vitesse de chaque moteur pour stabiliser
									le roulis, le tangage et le lacet. Après
									avoir établi l'équation, nous arrivons à
									notre modèle final :
								</Typography>
								<img
									src='https://latex.codecogs.com/svg.latex?\LARGE&space;\left\{\begin{matrix}&space;\omega{_{1}}^{2}=\frac{mg}{cos\theta\,&space;cos\psi\,&space;4k}-\frac{2bu_{\psi&space;}I_{xx}&plus;u_{\varphi&space;}I_{zz}kL}{4bkL}\\&space;\omega{_{2}}^{2}=\frac{mg}{cos\theta\,&space;cos\psi\,&space;4k}&plus;\frac{u_{\varphi&space;}I_{zz}}{4b}-\frac{u_{\theta&space;}I_{yy}}{2kL}\\&space;\omega{_{3}}^{2}=\frac{mg}{cos\theta\,&space;cos\psi\,&space;4k}-\frac{-2bu_{\psi&space;}I_{xx}&plus;u_{\varphi&space;}I_{zz}kL}{4bkL}\\&space;\omega{_{4}}^{2}=\frac{mg}{cos\theta\,&space;cos\psi\,&space;4k}&plus;\frac{u_{\varphi&space;}I_{zz}}{4b}&plus;\frac{u_{\theta&space;}I_{yy}}{2kL}&space;\end{matrix}\right.'
									title='\LARGE \left\{\begin{matrix} \omega{_{1}}^{2}=\frac{mg}{cos\theta\, cos\psi\, 4k}-\frac{2bu_{\psi }I_{xx}+u_{\varphi }I_{zz}kL}{4bkL}\\ \omega{_{2}}^{2}=\frac{mg}{cos\theta\, cos\psi\, 4k}+\frac{u_{\varphi }I_{zz}}{4b}-\frac{u_{\theta }I_{yy}}{2kL}\\ \omega{_{3}}^{2}=\frac{mg}{cos\theta\, cos\psi\, 4k}-\frac{-2bu_{\psi }I_{xx}+u_{\varphi }I_{zz}kL}{4bkL}\\ \omega{_{4}}^{2}=\frac{mg}{cos\theta\, cos\psi\, 4k}+\frac{u_{\varphi }I_{zz}}{4b}+\frac{u_{\theta }I_{yy}}{2kL} \end{matrix}\right.'
									alt='Control model equation'
									className={classes.eqElement}
									style={{
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.article}>
									où{' '}
									<img
										src='https://latex.codecogs.com/svg.latex?\inline&space;\small&space;u_{\psi&space;},u_{\varphi&space;},u_{\theta&space;}'
										title='\small u_{\psi },u_{\varphi },u_{\theta }'
										alt='PID 2'
									/>{' '}
									l'entrée corrigée correspondante pour le
									tangage, le roulis et le lacet.
								</Typography>
								<Typography className={classes.articleTitle}>
									#03 - SIMULATIONS
								</Typography>
								<Typography className={classes.article}>
									A partir de là, j'ai implémenté ces
									équations dans un script python pour simuler
									la réponse du système.
								</Typography>
								<Typography className={classes.article}>
									J'ai imaginé un scénario où le drone aurait
									une hauteur de 10m avec un décalage de 10°
									dans chacun des axes de rotation. Voici les
									résultats que j'ai obtenus d'abord pour la
									position et ensuite pour la position
									angulaire :
								</Typography>
								<img
									src={'https://i.imgur.com/NaLaIkR.png'}
									alt='corrected position graph'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<img
									src={'https://i.imgur.com/bJVTCGN.png'}
									alt='Angular position corrected'
									className={classes.imageElement}
									style={{
										maxWidth: '500px',
										marginTop: '30px',
										marginBottom: '30px'
									}}
								/>
								<Typography className={classes.article}>
									Comme on peut le voir sur les graphiques, le
									quadricoptère peut rester à une altitude
									donnée tout en convergeant vers une position
									stabilisée.
								</Typography>
								<Typography className={classes.article}>
									Les équations semblent fonctionner
									correctement, mais le vrai défi vient
									lorsque nous mettons en œuvre ce modèle dans
									un système réel, où nos hypothèses ne
									s'appliquent pas nécessairement.
								</Typography>
								<Typography className={classes.article}>
									Vous pouvez trouver le code de cette
									simulation{' '}
									<a
										href='https://github.com/Pierre-Baptiste/Quadcopter-simulation'
										target='_blank'
										rel='noopener noreferrer'
										style={{
											textDecoration: 'none',
											color: '#001aff'
										}}>
										ici
									</a>
									.
								</Typography>
								<Typography className={classes.articleEnd}>
									#MERCI D'AVOIR LU JUSQUE LÀ
								</Typography>
							</WorkCard>
						</Grid>
					</Grid>
				</Box>
			</div>
		);
	}
}
