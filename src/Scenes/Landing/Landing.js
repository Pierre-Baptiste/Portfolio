import React, { Component } from "react";

// Components
import Presentation from "./components/Presentation";

// Assets
import Background from "./assets/jake-davies-lEL5auXYrU0-unsplash.jpg";

class Landing extends Component {
	render() {
		return (
			<div
				style={{
					backgroundImage: "url(" + Background + ")",
					height: "100vh",
					width: "100vw",
					backgroundSize: "cover",
					position: "fixed",
					backgroundPosition: "right bottom"
				}}
			>
				<Presentation />
			</div>
		);
	}
}

export default Landing;
