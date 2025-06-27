import { Router } from "@solidjs/router";

import { routes } from "./index";

const AppRouter = () => {
	return <Router>{routes}</Router>;
};

export default AppRouter;
