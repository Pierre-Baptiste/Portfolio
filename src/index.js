import React from "react";
import ReactDOM from "react-dom";

// import router
import { BrowserRouter } from "react-router-dom";

// Theming
import Theming from "./Theming";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
	<BrowserRouter>
		<CssBaseline />
		<Theming />
	</BrowserRouter>,
	document.getElementById("root")
);
