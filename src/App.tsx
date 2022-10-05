import "./assets/index.css";
import { Column } from "./components/Board/Column";
import { useEffect, useState } from "react";
import { IItem } from "./interfaces/Board";
import { getItems } from "./data/item";

function App() {
	const [items, setItems] = useState<IItem[]>([]);

	async function loadItems() {
		getItems().then((items) => {
			setItems(items || []);
		});
	}

	useEffect(() => {
		loadItems()
	}, []);

	return (
		<div>
			<Column items={items} title={"Backlog"} />
		</div>
	);
}

export default App;
