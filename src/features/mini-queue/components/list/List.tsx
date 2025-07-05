import { A } from "@solidjs/router";
import { createResource, ErrorBoundary, Show } from "solid-js";
import { Flex } from "~/components/ui/flex";
import { VirtualList } from "~/components/ui/virtual-list";
import { MINI_QUEUE_PATHS } from "../../paths";
import queueAPI from "../../services/queueAPI";
import type { QueueDto } from "../../types";

export default function MiniQueueList() {
	const [queues] = createResource(queueAPI.fetchQueues);

	return (
		<Flex flexDirection="row">
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
	return <A href={MINI_QUEUE_PATHS.PROFILE.ROUTE(item.id)}>{item.name}</A>;
}
