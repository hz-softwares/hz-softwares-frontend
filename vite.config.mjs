import commonjs from "@rollup/plugin-commonjs";
import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
	plugins: [
		/*
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
		devtools(),
		commonjs({ exclude: ["node_modules/lodash/*"] }), // Add CommonJS plugin
		solidPlugin(),
	],
	server: {
		port: 3000,
		strictPort: true,
		host: true,
		origin: "http://localhost:3000",
	},
	build: {
		target: "esnext",
		rollupOptions: {},
	},
});
