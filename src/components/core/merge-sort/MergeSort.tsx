import { createDeferred, createSignal, Show } from "solid-js";
import { Input } from "../../shared/input/Input";
import { createWorker } from "@solid-primitives/workers";
import styles from "./mergeSort.module.css";
import { useMergeSort } from "./hooks/useMergeSort";
interface Props {}
export function MergeSort() {
	const [getGenerated, setGenerated] = createSignal<number[]>([]);
	const [getListString, setListString] = createSignal("");
	const [getGenerateLoading, setGenerateLoading] = createSignal(false);
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
	const { mergeSort } = useMergeSort();
	const defer = createDeferred(() => `[${mergeSort(getGenerated()).slice(0, 100).join(", ")}]`);

	return (
		<div>
			<details>
				<summary>Merge Sort</summary>
				<p>
					Used for sorting large dataset or data on disk as merge sort works well with sequential access which comply
					with disk access
				</p>
			</details>
			<div class={styles.inputSortContainer}>
				<Input
					type="number"
					max={"10000"}
					onKeyPress={async (e) => {
						if (e.key === "Enter") {
							const length = e.currentTarget.valueAsNumber;
							setGenerateLoading(true);
							const list = await worker.generateRandomListOfLength(length);
							setGenerateLoading(false);
							setListString(`[${list.slice(0, 100).join(",")}]`);
							setGenerated(list);
						}
					}}
				/>
			</div>
			<Show when={!getGenerateLoading()} fallback={"...generating"}>
				<div class={`${styles.generatedLine} truncate`}>Generated: {getListString()} </div>
				<div class={`${styles.generatedLine} truncate`}>Sorted: {defer()} </div>
			</Show>
		</div>
	);
}
