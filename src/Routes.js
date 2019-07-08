import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// Components
import Landing from "./Scenes/Landing/Landing";

export default class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route
					path="/"
					exact
					render={() => (
						<Landing
							handleLanguageChange={
								this.props.handleLanguageChange
							}
							Language={this.props.Language}
						/>
					)}
				/>
			</Switch>
		);
	}
}
