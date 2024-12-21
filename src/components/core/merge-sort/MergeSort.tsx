import { createSignal, Show } from "solid-js";
import { Input } from "../../shared/input/Input";
import { createWorker } from "@solid-primitives/workers";
import { Button } from "../../shared/button/Button";
import styles from "./mergeSort.module.css";
import { useMergeSort } from "./hooks/useMergeSort";
interface Props {}
export function MergeSort(props: Props) {
	const [getGenerated, setGenerated] = createSignal<number[]>([]);
	const [getSorted, setSorted] = createSignal<number[]>([]);
	const [worker, start, stop] = createWorker(function generateRandomListOfLength(length: number) {
		function getRandomInt(max: number) {
			return Math.floor(Math.random() * max);
		}
		const list = [];
		for (let index = 0; index < length; index++) {
			list.push(getRandomInt(length));
		}
		return list;
	});
	const { loading, mergeSort } = useMergeSort();

	return (
		<div>
			<div class={styles.inputSortContainer}>
				<Input
					type="number"
					max={1000000}
					onKeyPress={async (e) => {
						if (e.key === "Enter") {
							const length = e.currentTarget.valueAsNumber;
							const list = await worker.generateRandomListOfLength(length);
							setGenerated(list);
							setSorted(await mergeSort(getGenerated()));
						}
					}}
				/>
				<Button onClick={() => setSorted(mergeSort(getGenerated()))}> Sort</Button>
			</div>
			<Show when={getGenerated().length > 0}>
				<div class={`${styles.generatedLine} truncate`}>Generated: [{getGenerated().join(", ")}] </div>
			</Show>
			<Show when={getSorted().length > 0 && !loading()}>
				<div class={`${styles.generatedLine} truncate`}>sorted: [{getSorted().join(", ")}] </div>
			</Show>
		</div>
	);
}
