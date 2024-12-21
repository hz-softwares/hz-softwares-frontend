import { A } from "@solidjs/router";
import { navbarItems } from "./navbarItems";
import { For, Show } from "solid-js";
import { isNil } from "lodash";

export function Navbar() {
	const availableNavItems = navbarItems.filter((item) => {
		return item.available || isNil(item.available);
	});
	return (
		<div class="navbar bg-base-300 rounded-box">
			<div class="flex-1 px-2 lg:flex-none">
				<img class="mr-1" width="50" height="50" src="/images/hz-softwares.png" />
				<a class="text-lg font-bold">HZ Software</a>
			</div>
			<div class="flex justify-end flex-1 px-2">
				<div class="flex items-stretch">
					<For each={availableNavItems}>
						{(item) => (
							<div class="dropdown dropdown-end">
								<label tabIndex={0} class="btn btn-ghost rounded-btn">
									{item.label}
								</label>
								<ul tabIndex={0} class="menu bg-base-200 dropdown-content z-[1] p-2 shadow rounded-box w-52 mt-4">
									<For
										each={item.items?.filter((item) => {
											console.log("filter in", item.label);
											return item.available || isNil(item.available);
										})}
									>
										{(child) => (
											<li id={child.label}>
												{child.href?.startsWith("http") ? (
													<a href={child.href} target="_blank">
														{child.label}
													</a>
												) : (
													<A href={child.href ?? ""}>{child.label}</A>
												)}
											</li>
										)}
									</For>
								</ul>
							</div>
						)}
					</For>
				</div>
			</div>
		</div>
	);
}
