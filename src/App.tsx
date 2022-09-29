import "./assets/reset.css";
import { BoardItem } from "./components/Board/Item";
import Items from "./data/Items.json";
import "./assets/index.scss";

function App() {
	console.log(Items);
	return (
		<>
			{Items.map((item) => (
				<BoardItem
					description={item.description}
					id={item.id}
					title={item.title}
					key={`item-${item.id}`}
				/>
			))}
		</>
	);
}

export default App;
