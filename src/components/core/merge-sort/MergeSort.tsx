import { createEffect, createSignal, Show } from "solid-js";
import { Input } from "../../shared/input/Input";
import styles from "./mergeSort.module.css";
import { VirtualList } from "./components/VirtualList";
import { useMergeSort } from "./hooks/useMergeSort";
import { useGenerator } from "./hooks/useGenerator";
import { Button } from "../../shared/button/Button";
const MAX_LENGTH = 30_000_000;

export function MergeSort() {
	const [value, setValue] = createSignal<number>();
	const [useWorker, setUseWorker] = createSignal(false);
	const generatorHook = useGenerator({ useWorker: useWorker });
	const sortedHook = useMergeSort({ useWorker: useWorker });

	return (
		<div class={styles.container}>
			<div>
				<details>
					<summary>
						Merge Sort (upto {MAX_LENGTH.toLocaleString()} using web workers to not block ui when generating large list)
					</summary>
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
								generatorHook.generate(length);
							}
						}}
					/>
					<div class="form-control">
						<label class="label cursor-pointer">
							<input
								type="checkbox"
								checked={useWorker()}
								onchange={(e) => setUseWorker(e.target.checked)}
								class={`checkbox ${styles.checkbox}`}
							/>
							<span class="label-text">With Web Workers</span>
						</label>
					</div>

					<span
						class="loading-spinner text-primary"
						classList={{
							loading: generatorHook.loading() || sortedHook.loading(),
						}}
					></span>
					<Show when={generatorHook.loading() || sortedHook.loading()}>
						<div>render loading (a proof of rendering is not blocked)</div>
					</Show>
				</div>
				<div class={styles.listsContainer}>
					<div class={styles.list}>
						<span>Generated List (#elements:{generatorHook.list().length})</span>
						<Show when={!generatorHook.loading()} fallback={"...loading"}>
							<VirtualList items={generatorHook.list()} />
						</Show>
					</div>
					<Button onClick={() => sortedHook.mergeSort(generatorHook.list())}>Sort</Button>
					<div class={styles.list}>
						<span>Sorted List</span>
						<Show when={!sortedHook.loading() && !generatorHook.loading()} fallback={"...loading"}>
							<VirtualList items={sortedHook.result()} />
						</Show>
					</div>
				</div>
			</div>
		</div>
	);
}
