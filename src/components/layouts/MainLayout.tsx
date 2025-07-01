import { A } from "@solidjs/router";
import type { JSX } from "solid-js";
import { MINI_QUEUE_PATHS } from "~/features/mini-queue/paths";
import { NavigationMenu, NavigationMenuTrigger } from "../ui/navigation-menu";

interface Props {
	children?: JSX.Element;
}
export function MainLayout(props: Props) {
	return (
		<div class="flex flex-col h-screen">
			<NavigationMenu orientation={"horizontal"}>
				<NavigationMenuTrigger as="A" href={MINI_QUEUE_PATHS.LIST}>
					<A
						href={MINI_QUEUE_PATHS.LIST}
						title="SQS Like Service But More Customizable"
						activeClass="text-blue-500"
					>
						Mini Queue
					</A>
				</NavigationMenuTrigger>

				<NavigationMenuTrigger
					as="a"
					href="https://github.com/hadyelzayady"
					target="_blank"
				>
					GitHub
				</NavigationMenuTrigger>
			</NavigationMenu>

			<main class="flex-1 p-4">{props.children}</main>
		</div>
	);
}
