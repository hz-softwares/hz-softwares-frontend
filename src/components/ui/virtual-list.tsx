import { createVirtualList } from "@solid-primitives/virtual";
import { type Accessor, For, type JSX } from "solid-js";

interface Props<T extends readonly any[], U extends JSX.Element> {
	fallback?: JSX.Element;
	overscanCount?: number;
	rootHeight: number;
	rowHeight: number;
	each: T | undefined | null | false;
	children: (item: T[number], index: Accessor<number>) => U;
}
export function VirtualList<T extends readonly any[], U extends JSX.Element>(
	props: Props<T, U>,
): JSX.Element {
	const [getter, onScroll] = createVirtualList<T>({
		// the list of items - can be a signal
		items: props.each,
		// the height of the root element of the virtualizedList - can be a signal
		rootHeight: props.rootHeight,
		// the height of individual rows in the virtualizedList - can be a signal
		rowHeight: props.rowHeight,
		// the number of elements to render both before and after the visible section of the list, so passing 5 will render 5 items before the list, and 5 items after. Defaults to 1, cannot be set to zero. This is necessary to hide the blank space around list items when scrolling - can be a signal
		overscanCount: props.overscanCount,
	});

	return (
		<div
			style={{
				overflow: "auto",
				width: "100%",
				// root element's height must be rootHeight
				height: `${props.rootHeight}px`,
			}}
			// outermost container must use onScroll
			onScroll={onScroll}
		>
			<div
				style={{
					position: "relative",
					width: "100%",
					// list container element's height must be set to containerHeight()
					height: `${getter().containerHeight}px`,
				}}
			>
				<div
					style={{
						position: "absolute",
						// viewer element's top must be set to viewerTop()
						top: `${getter().viewerTop}px`,
					}}
				>
					{/* only visibleItems() are ultimately rendered */}
					<For fallback={"no items"} each={getter().visibleItems}>
						{(item, index) => <div>{props.children(item, index)}</div>}
					</For>
				</div>
			</div>
		</div>
	);
}
