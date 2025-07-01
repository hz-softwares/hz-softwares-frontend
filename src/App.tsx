import { ColorModeProvider } from "@kobalte/core";
import { Router } from "@solidjs/router";
import type { Component } from "solid-js";
import { routes } from "./routes";

const App: Component = () => {
	return (
		<ColorModeProvider initialColorMode="dark">
			<Router>{routes}</Router>
		</ColorModeProvider>
	);
};

export default App;
