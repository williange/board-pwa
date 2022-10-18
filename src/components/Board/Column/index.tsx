import { useEffect, useState } from "react";
import { getItemsByColumn } from "../../../data/item";
import { IItemResponse } from "../../../interfaces/Board";
import { Item } from "../Item";
import styles from "./styles.module.scss";

interface IProps {
	id: string;
	title: string;
}

export function Column({ id, title }: IProps) {
	const [items, setItems] = useState<IItemResponse[]>([]);

	async function loadItems() {
		getItemsByColumn(id).then((items) => {
			setItems(items);
		});
	}

	useEffect(() => {
		loadItems();
	}, []);

	return (
		<div className={styles.column}>
			<div className={styles.titleContainer}>
				<span className={styles.title}>{title}</span>
			</div>
			<div className={styles.itemsContainer}>
				{items.map((item) => (
					<Item
						description={item.description}
						id={item.id}
						title={item.title}
						key={`${title}-item-${item.id}`}
						columnId={item.columnId}
					/>
				))}
			</div>
		</div>
	);
}
