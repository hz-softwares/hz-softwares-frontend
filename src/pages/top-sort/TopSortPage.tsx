import { DependencyTopSort } from "../../components/core/dependency-topsort/dependencyTopSort";
import { Header } from "../../components/shared/headers/Header";

export function TopSortPage() {
	return (
		<div>
			<Header.h2>
				Arch Package Dependencies Topological Sort{" "}
				<a class="link link-primary" target="_blank" href="https://archlinux.org/packages">
					arch packages
				</a>
			</Header.h2>
			<DependencyTopSort />
		</div>
	);
}
