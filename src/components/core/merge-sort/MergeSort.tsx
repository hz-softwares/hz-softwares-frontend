import { createDeferred, createSignal, Show } from "solid-js";
import { Input } from "../../shared/input/Input";
import { createWorker } from "@solid-primitives/workers";
import styles from "./mergeSort.module.css";
import { useMergeSort } from "./hooks/useMergeSort";
import { VirtualList } from "./components/VirtualList";

const MAX_LENGTH = 50_000_0000;
export function MergeSort() {
	const [value, setValue] = createSignal<number>();
	const [getGenerated, setGenerated] = createSignal<number[]>([]);
	const [loading, setLoading] = createSignal(false);
	const [generating, setGenerating] = createSignal(false);

	const [worker, start, stop] = createWorker(function generateRandomListOfLength(length: number) {
		function getRandomInt(max: number) {
			return Math.floor(Math.random() * max);
		}
		const list = new Set();
		for (let index = 0; index < length; index++) {
			list.add(getRandomInt(length));
		}
		return Array.from(list);
	});

	const { mergeSort } = useMergeSort();
	const sortedList = createDeferred(() => {
		console.log("merge");
		setLoading(true);
		const result = mergeSort(getGenerated());
		console.log("finish merge");
		setLoading(false);
		return result;
	});

	return (
		<div>
			<details>
				<summary>Merge Sort (upto {MAX_LENGTH} using web workers to not block ui when generating large list)</summary>
				<p>
					Used for sorting large dataset or data on disk as merge sort works well with sequential access which comply
					with disk access
				</p>
			</details>
			<div class={styles.inputSortContainer}>
				<Input
					type="number"
					max={"10000"}
					value={value()}
					onInput={(e) => {
						const number = e.currentTarget.valueAsNumber;
						if (number > MAX_LENGTH) {
							setValue(MAX_LENGTH);
						} else {
							setValue(number);
						}
					}}
					onKeyPress={async (e) => {
						if (e.key === "Enter") {
							const length = e.currentTarget.valueAsNumber;
							try {
								setGenerating(true);
								const list = await (worker as any).generateRandomListOfLength(length);
								console.log("list");
								setGenerated(list);
							} finally {
								setGenerating(false);
								console.log("hhh");
							}
						}
					}}
				/>
			</div>
			<div class={styles.listsContainer}>
				<div class={styles.list}>
					<span>Generated List (#elements:{getGenerated().length})</span>
					<Show when={!generating()} fallback={"...loading"}>
						<VirtualList items={getGenerated()} />
					</Show>
				</div>
				<div class={styles.list}>
					<span>Sorted List</span>
					<Show when={!loading() && !generating()} fallback={"...loading"}>
						<VirtualList items={sortedList().toReversed()} />
					</Show>
				</div>
			</div>
		</div>
	);
}