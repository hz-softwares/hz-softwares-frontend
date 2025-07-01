async function fetch(url: string): Promise<{ ok: boolean; json: any }> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				ok: true,
				json: () => [
					{ id: 1, name: "queue1" },
					{ id: 2, name: "queue2" },
				],
			});
		}, 1000);
	});
}
export default {
	async fetchQueues(): Promise<QueueDto[]> {
		const response = await fetch("/api/queues");
		if (!response.ok) throw new Error("Failed to fetch queues");
		return response.json();
	},
};
