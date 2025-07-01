import type { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";
import { MainLayout } from "~/components/layouts/MainLayout";

const Home = lazy(() => import("./components/Home"));

export const homeRoutes: RouteDefinition[] = [
	{
		path: "/",
		component: MainLayout,
		children: [
			{
				path: "/",
				component: Home,
			},
		],
	},
];
