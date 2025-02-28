import { type Component, lazy } from "solid-js";

import { Route, Router, Routes } from "@solidjs/router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { BStar } from "./components/core/b-start/BStar";
import { IS_DEVELOPMENT } from "./constants/env";
import { Layout } from "./layouts/Layout";
import { AboutHzSoftwarePage } from "./pages/about/hz-software/AboutHzSoftware";
import { AboutMePage } from "./pages/about/me/AboutMePage";
import { FibCalcPage } from "./pages/fib-calc/FibCalcPage";
import { HomePage } from "./pages/home/HomePage";
import { HttpPage } from "./pages/http/HttpPage";
import { LightQSPage } from "./pages/light-qs/LightQSPage";
import { LightQsPlaygroundPage } from "./pages/lqs-playground/LightQsPlaygroundPage";
import { SortPage } from "./pages/sort/SortPage";
import { TopSortPage } from "./pages/top-sort/TopSortPage";

const ECommercePage = lazy(() =>
	import("./pages/e-commerce/ECommercePage").then(({ ECommercePage }) => ({ default: ECommercePage })),
);
const queryClient = new QueryClient();
const App: Component = () => {
	if (IS_DEVELOPMENT) {
		document.title = `${document.title} (development)`;
	}
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" component={HomePage} />
						<Route path="/about/me" component={AboutMePage} />
						<Route path="/about/hz-software" component={AboutHzSoftwarePage} />
						<Route path="/algorithms/top-sort" component={TopSortPage} />
						<Route path="/algorithms/fib-calc" component={FibCalcPage} />
						<Route path="/algorithms/merge-sort" component={SortPage} />
						<Route path="/cloud/lqs" component={LightQSPage} />
						<Route path="/algorithms/b-star" component={BStar} />
						<Route path="/cloud/lqs-playground" component={LightQsPlaygroundPage} />
						<Route path="/communication/http" component={HttpPage} />
						<Route path="/applications/e-commerce" component={ECommercePage} />
					</Routes>
				</Layout>
			</Router>
		</QueryClientProvider>
	);
};

export default App;
