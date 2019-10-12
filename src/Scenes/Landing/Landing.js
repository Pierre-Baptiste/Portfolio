import React, { Component } from "react";

// Components
import Presentation from "./components/Presentation";

class Landing extends Component {
	render() {
		return (
			<div
				style={{
					backgroundImage: "url(https://i.imgur.com/NqEMWSm.jpg)",
					height: "100vh",
					width: "100vw",
					maxWidth: "1920px",
					backgroundSize: "cover",
					position: "fixed",
					backgroundPosition: "85% top",
				}}
			>
				<Presentation Language={this.props.Language} />
			</div>
		);
	}
}

export default Landing;