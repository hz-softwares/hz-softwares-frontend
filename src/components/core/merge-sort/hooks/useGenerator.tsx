import { Accessor, createSignal } from "solid-js";
interface Props {
	useWorker: Accessor<boolean>;
}
export function useGenerator(props: Props) {
	const [loading, setLoading] = createSignal(false);
	const [list, setList] = createSignal<number[]>([]);
	const worker = new Worker(new URL("listGenerator.js", import.meta.url));
	worker.onmessage = (e) => {
		const list = e.data;

		setList(list);
		setLoading(false);
	};

	function getRandomInt(max: number) {
		return Math.floor(Math.random() * max);
	}
	function generate(length: number) {
		setLoading(true);
		if (props.useWorker()) {
			worker.postMessage({ start: 0, end: length });
		} else {
			const set = new Set<number>();
			for (let index = 0; index < length; index++) {
				set.add(getRandomInt(length));
			}
			setList(Array.from(set));
			setLoading(false);
		}
	}
	return { loading, list, generate };
}
