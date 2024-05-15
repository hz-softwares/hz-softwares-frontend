import { createQuery } from "@tanstack/solid-query";
import { HTTP_SERVER_URL } from "../../../constants/urls";

export function HttpServerView() {
	const query = createQuery(() => ({
		queryKey: ["httpserver"],
		queryFn: async () => {
			const resp = await fetch(`${HTTP_SERVER_URL}`);
			return resp.text();
		},
	}));

	return <div>{query.data}</div>;
}
