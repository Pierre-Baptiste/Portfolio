import React, { Component } from "react";

// Routes
import Routes from "./Routes";

// HOC
import AppBar from "./HOC/AppBar";

class App extends Component {
	constructor(props) {
		super(props);
		this.handleLanguageChange = this.handleLanguageChange.bind(this);
		this.state = { Language: "English" };
	}

	handleLanguageChange = e => {
		if (e.target.id === "En") {
			this.setState({
				Language: "English"
			});
		} else if (e.target.id === "Fr") {
			this.setState({
				Language: "French"
			});
		}
	};

	render() {
		return (
			<React.Fragment>
				<AppBar
					handleLanguageChange={this.handleLanguageChange.bind(this)}
					Language={this.state.Language}
				/>
				<Routes />
			</React.Fragment>
		);
	}
}

export default App;
