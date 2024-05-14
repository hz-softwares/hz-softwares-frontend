import { lightApi, lqsApi } from "../api/light";

export function configureInterceptors() {
	lightApi.interceptors.request.use((config) => {
		config.headers.set("light-app-token", "2814f7a7-359e-424a-b333-fdaf3a4a71e4");
		return config;
	});
	lqsApi.interceptors.request.use((config) => {
		config.headers.set("light-app-token", "2814f7a7-359e-424a-b333-fdaf3a4a71e4");
		return config;
	});
}
