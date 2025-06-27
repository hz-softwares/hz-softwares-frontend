import { JSX } from "solid-js";

interface Props {
	children: JSX.Element;
}
export function MainLayout(props: Props) {
	return (
		<div>
			<div class="p-4">{props.children}</div>
		</div>
	);
}
