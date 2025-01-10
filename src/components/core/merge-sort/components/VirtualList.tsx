import { createVirtualizer } from "@tanstack/solid-virtual";
import { For, createEffect } from "solid-js";

interface Props {
	items: any[];
}
export function VirtualList(props: Props) {
	let parentRef: HTMLDivElement | undefined = undefined;

	const rowVirtualizer = createVirtualizer({
		count: props.items.length,
		getScrollElement: () => parentRef ?? null,
		estimateSize: () => 20,
		enabled: false,
	});
	createEffect(() => {
		rowVirtualizer.setOptions({ ...rowVirtualizer.options, enabled: false });
		rowVirtualizer._willUpdate();
		rowVirtualizer.setOptions({ ...rowVirtualizer.options, count: props.items.length, enabled: true });
		rowVirtualizer._willUpdate();
	});

	return (
		<div
			ref={parentRef}
			style={{
				height: `400px`,
				overflow: "auto", // Make it scroll!
				border: "1px solid white",
				width: "100px",
			}}
		>
			<div
				style={{
					height: `${rowVirtualizer.getTotalSize()}px`,
					width: "100%",
					position: "relative",
				}}
			>
				<For each={rowVirtualizer.getVirtualItems()}>
					{(virtualItem) => (
						<div
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: `${virtualItem.size}px`,
								transform: `translateY(${virtualItem.start}px)`,
							}}
						>
							{props.items[virtualItem.index]}
						</div>
					)}
				</For>
			</div>
		</div>
	);
}
