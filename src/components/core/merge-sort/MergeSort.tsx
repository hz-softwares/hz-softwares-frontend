import { createDeferred, createSignal, Show } from "solid-js";
import { Input } from "../../shared/input/Input";
import { createWorker } from "@solid-primitives/workers";
import styles from "./mergeSort.module.css";
import { useMergeSort } from "./hooks/useMergeSort";
import { VirtualList } from "./components/VirtualList";
const MAX_LENGTH = 26_499_999;
export function MergeSort() {
	const [value, setValue] = createSignal<number>();
	const [getGenerated, setGenerated] = createSignal<number[]>([]);
	const [generating, setGenerating] = createSignal(false);
	const worker = new Worker(new URL("worker.js", import.meta.url));
	const mergeSortHook = useMergeSort();
	worker.onmessage = (e) => {
		const list = e.data;

		setGenerated(list);
		setGenerating(false);
		mergeSortHook.mergeSort(list);
	};
	worker.onmessageerror = (e) => {
		console.log("error in generaring", e);
	};

	return (
		<div class={styles.container}>
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
						max={MAX_LENGTH}
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
								setGenerating(true);
								worker.postMessage(length);
							}
						}}
					/>

					<span
						class="loading-spinner text-primary"
						classList={{
							loading: generating() || mergeSortHook.loading(),
						}}
					></span>
					<Show when={generating() || mergeSortHook.loading()}>
						<div>render loading (a proof of rendering is not blocked)</div>
					</Show>
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
						<Show when={!mergeSortHook.loading() && !generating()} fallback={"...loading"}>
							<VirtualList items={mergeSortHook.result()} />
						</Show>
					</div>
				</div>
			</div>
		</div>
	);
}
