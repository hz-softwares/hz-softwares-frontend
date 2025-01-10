import { Accessor, createSignal } from "solid-js";
import mergeSort from "./mergeSort";

interface Props {
	useWorker: Accessor<boolean>;
}
export function useMergeSort(props: Props) {
	const [loading, setLoading] = createSignal(false);
	const [result, setResult] = createSignal<number[]>([]);

	const worker = new Worker(new URL("sorter.js", import.meta.url));

	worker.onmessage = (e) => {
		const list: number[] = e.data;

		setLoading(false);
		setResult(list);
	};

	function sort(list: number[]) {
		setLoading(true);
		if (props.useWorker()) {
			worker.postMessage(list);
		} else {
			const sorted = mergeSort(list);
			setResult(sorted.toReversed());
			setLoading(false);
		}
	}
	return { mergeSort: sort, loading, result };
}
