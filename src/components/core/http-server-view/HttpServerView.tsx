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
	console.log("[LS] -> src/components/core/http-server-view/HttpServerView.tsx:11 -> query: ", query);

	return <div class="http-server">{query.data}</div>;
}
