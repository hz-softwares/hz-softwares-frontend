import { createWorkerPool } from "@solid-primitives/workers";
import { createSignal } from "solid-js";

export function useMergeSort() {
	const [loading, setLoading] = createSignal(false);
	const [result, setResult] = createSignal<number[]>([]);

	const worker = new Worker(new URL("sorter.js", import.meta.url));

	worker.onmessage = (e) => {
		const list = e.data;

		setResult(list);
		setLoading(false);
	};
	function sort(list: number[]) {
		setLoading(true);
		worker.postMessage(list);
	}
	return { mergeSort: sort, loading, result };
}
