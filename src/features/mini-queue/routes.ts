import type { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";
import { MainLayout } from "~/components/layouts/MainLayout";

const ListPage = lazy(() => import("./pages/mini-queue/ListPage"));

export const miniQueueRoutes: RouteDefinition[] = [
	{
		path: "/mini-queue",
		component: MainLayout,
		children: [
			{
				path: "/",
				component: ListPage,
			},
		],
	},
];
