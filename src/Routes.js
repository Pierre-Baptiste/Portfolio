import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Scenes
import Landing from "./Scenes/Landing/Landing";
import About from "./Scenes/About/About";
import Works from "./Scenes/Works/Works";
import Contact from "./Scenes/Contact/Contact";
import Gallery from "./Scenes/Gallery/Gallery";
export default class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route
					path="/(|home)/"
					exact
					component={() => <Landing Language={this.props.Language} />}
				/>
				<Route
					path="/works"
					exact
					component={() => <Works Language={this.props.Language} />}
				/>
				<Route
					path="/about"
					exact
					component={() => <About Language={this.props.Language} />}
				/>
				<Route
					path="/gallery"
					exact
					component={() => <Gallery Language={this.props.Language} />}
				/>
				<Route
					path="/contact"
					exact
					component={() => <Contact Language={this.props.Language} />}
				/>
			</Switch>
		);
	}
}
