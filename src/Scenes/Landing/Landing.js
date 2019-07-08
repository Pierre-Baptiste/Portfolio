import React, { Component } from "react";

// HOC Components
import AppBar from "./../HOC/AppBar";

// Components
import Presentation from "./components/Presentation";

// Assets
import Background from "./assets/jake-davies-lEL5auXYrU0-unsplash.jpg";

class Landing extends Component {
	render() {
		return (
			<div>
				<div
					style={{
						backgroundImage: "url(" + Background + ")",
						height: "100vh",
						backgroundSize: "cover"
					}}
				>
					<AppBar />
					<Presentation />
				</div>
			</div>
		);
	}
}

export default Landing;
