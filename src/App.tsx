import Items from "./data/Items.json";
import "./assets/reset.css";
import "./assets/index.scss";
import { Column } from "./components/Board/Column";

function App() {
	return (
		<div>
			<Column items={Items} title={"Backlog"} />
		</div>
	);
}

export default App;
