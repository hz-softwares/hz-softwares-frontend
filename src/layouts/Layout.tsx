import { useNavigate } from "@solidjs/router";
import { JSX, onMount } from "solid-js";
import { Navbar } from "../components/core/navbar/Navbar";

interface Props {
	children: JSX.Element;
}
export function Layout(props: Props) {
	return (
		<div>
			<Navbar />
			<div class="p-4">{props.children}</div>
		</div>
	);
}
