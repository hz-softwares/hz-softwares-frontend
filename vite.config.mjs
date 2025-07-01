import path from "node:path";
import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
	plugins: [devtools(), solidPlugin()],
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "./src"),
		},
	},
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
