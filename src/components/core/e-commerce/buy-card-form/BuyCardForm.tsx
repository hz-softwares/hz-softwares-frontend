import { createForm, SubmitHandler } from "@modular-forms/solid";
import { Input } from "../../../shared/input/Input";
import { Button } from "../../../shared/button/Button";
import { createMutation, createQuery } from "@tanstack/solid-query";
import { eCommerceApi } from "../../../../api/eCommerceApi";
import { Show } from "solid-js";
type BuyForm = {
	email: string;
	itemName: string;
	price: number;
};
export function BuyCardForm() {
	const [buyForm, { Form, Field }] = createForm<BuyForm>();
	const buyItems = createMutation(() => ({
		mutationFn: async (values: any) => {
			const result = eCommerceApi.post("/buy", values);
			return result;
		},
	}));

	const onSubmit: SubmitHandler<BuyForm> = (values, event) => {
		event.preventDefault();
		buyItems.mutate(values);
	};
	return (
		<>
			<Form onSubmit={onSubmit} class="flex flex-column gap-10">
				<Field name="email">
					{(field, props) => (
						<>
							<Input {...props} label="Email" type="email" />
						</>
					)}
				</Field>
				<Field name="itemName">{(field, props) => <Input label="Item Name" {...props} type="text" />}</Field>
				<Field name="price" type="number">
					{(field, props) => <Input {...props} label="Price" type="number" />}
				</Field>
				<footer class="flex lg items-end">
					<Button type="submit">Submit</Button>
				</footer>
			</Form>
			<Show when={buyItems.isPending}>Is Pending</Show>
			<Show when={buyItems.isError}>Error {(buyItems.error?.cause as string) ?? ""}</Show>
			<Show when={buyItems.isSuccess}>Success</Show>
		</>
	);
}
