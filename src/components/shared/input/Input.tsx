import { JSX, Show } from "solid-js";

interface Props extends JSX.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}
export function Input(props: Props) {
	return (
		<label class="form-control w-full max-w-xs">
			<Show when={props.label}>
				<div class="label">
					<span class="label-text">{props.label}</span>
				</div>
			</Show>
			<input
				type="text"
				placeholder={`Enter ${props.label ?? "Value"}`}
				class="input input-bordered w-full max-w-xs"
        value={props.value}
				{...props}
			/>
		</label>
	);
}
