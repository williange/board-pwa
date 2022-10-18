import "./assets/index.css";
import { Column } from "./components/Board/Column";
import { useEffect, useState } from "react";
import { IColumnResponse } from "./interfaces/Board";
import { getColumns, setColumn } from "./data/column";
import { CreateColumn } from "./components/Board/CreateColumn";

function App() {
	const [columns, setColumns] = useState<IColumnResponse[]>([]);

	async function loadItems() {
		getColumns().then((columns) => {
			setColumns(columns);
		});
	}

	function handleCreateColumn(title: string) {
		setColumn({
			title: title,
			position: 0,
			itemsId: [],
		});
	}

	useEffect(() => {
		loadItems();
	}, []);

	return (
		<div>
			{columns.map((column) => (
				<Column id={column.id || ""} title={column.title} />
			))}

			<CreateColumn handleCreateColumn={handleCreateColumn} />
		</div>
	);
}

export default App;
