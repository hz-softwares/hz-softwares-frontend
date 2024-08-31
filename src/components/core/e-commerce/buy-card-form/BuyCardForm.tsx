import { createForm, SubmitHandler } from "@modular-forms/solid";
import { Input } from "../../../shared/input/Input";
import { Button } from "../../../shared/button/Button";
type BuyForm = {
	email: string;
	itemName: string;
	price: number;
};
export function BuyCardForm() {
	const [buyForm, { Form, Field }] = createForm<BuyForm>();

	const onSubmit: SubmitHandler<BuyForm> = (values, event) => {
		event.preventDefault();
		console.log(values);
	};
	return (
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
	);
}
