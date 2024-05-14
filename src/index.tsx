import { render } from "solid-js/web";

import "./index.css";
import App from "./App";
import { configureInterceptors } from "./config/interceptors";

const root = document.getElementById("root");
if (!root) {
	throw new Error("Root element not found");
}

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
	);
}

configureInterceptors();

render(() => <App />, root);
