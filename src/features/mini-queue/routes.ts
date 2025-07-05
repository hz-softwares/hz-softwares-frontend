import type { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MINI_QUEUE_PATHS } from "./paths";

const ListPage = lazy(() => import("./pages/list-page/ListPage"));

export const miniQueueRoutes: RouteDefinition[] = [
	{
		path: MINI_QUEUE_PATHS.BASE,
		component: MainLayout,
		children: [
			{
				path: MINI_QUEUE_PATHS.LIST,
				component: ListPage,
			},
			{
				path: MINI_QUEUE_PATHS.PROFILE.PATH,
				component: ListPage,
			},
		],
	},
];
