import { lazy, type Component } from "solid-js";

import { Router, Routes, Route } from "@solidjs/router";
import { Layout } from "./layouts/Layout";
import { HomePage } from "./pages/home/HomePage";
import { TopSortPage } from "./pages/top-sort/TopSortPage";
import { FibCalcPage } from "./pages/fib-calc/FibCalcPage";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { LightQSPage } from "./pages/light-qs/LightQSPage";
import { LightQsPlaygroundPage } from "./pages/lqs-playground/LightQsPlaygroundPage";
import { BStar } from "./components/core/b-start/BStar";
import { HttpPage } from "./pages/http/HttpPage";
import { AboutPage } from "./pages/about/AboutPage";

const ECommercePage = lazy(() =>
	import("./pages/e-commerce/ECommercePage").then(({ ECommercePage }) => ({ default: ECommercePage })),
);
const queryClient = new QueryClient();
const App: Component = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" component={HomePage} />
						<Route path="/about" component={AboutPage} />
						<Route path="/algorithms/top-sort" component={TopSortPage} />
						<Route path="/algorithms/fib-calc" component={FibCalcPage} />
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
