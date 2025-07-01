import { VirtualList } from "@solid-primitives/virtual";
import { createResource, ErrorBoundary, Show } from "solid-js";
import { Flex } from "~/components/ui/flex";
import queueAPI from "../../services/queueAPI";
import type { QueueDto } from "../../types";

export default function MiniQueueList() {
	const [queues] = createResource(queueAPI.fetchQueues);

	return (
		<Flex flexDirection="row" style={{ "flex-grow": 1 }}>
			<ErrorBoundary fallback={(err) => <p>Something broke: {err.message}</p>}>
				<Show when={!queues.loading} fallback={<div>Loading.. </div>}>
					<VirtualList
						each={queues()}
						fallback={<div>No items</div>}
						overscanCount={5}
						rootHeight={500}
						rowHeight={10}
					>
						{(item) => <QueueListItemRenderer item={item} />}
					</VirtualList>
				</Show>
			</ErrorBoundary>
		</Flex>
	);
}

function QueueListItemRenderer({ item }: { item: QueueDto }) {
	return <div>{item.name}</div>;
}
