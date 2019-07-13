import React, { Component } from "react";

// App
import App from "./App";

// Theme
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

// Layout
import Container from "@material-ui/core/Container";

let theme = createMuiTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: "#fff"
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			// light: "#0066ff",
			main: "#000",
			// dark: will be calculated from palette.secondary.main,
			contrastText: "#001aff"
		},
		error: {
			// light
			main: "#001aff"
			// dark
			// contrastText
		}
	},
	typography: {
		fontFamily: "Roboto Mono",
		fontSize: 10
	},
	spacing: 4,
	shadows: Array(25).fill("none")
});

theme = responsiveFontSizes(theme);

export default class Theming extends Component {
	render() {
		return (
			<Container
				maxWidth="xl"
				style={{
					padding: "0",
					width: "100vw",
					minHeight: "100vh",
					backgroundColor: "#fff"
				}}
			>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</Container>
		);
	}
}
