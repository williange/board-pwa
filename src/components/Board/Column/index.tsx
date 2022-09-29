import { IItem } from "../../../interfaces/Board";
import { Item } from "../Item";
import styles from "./styles.module.scss";

interface IProps {
	title: string;
	items: IItem[];
}

export function Column({ title, items }: IProps) {
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
					/>
				))}
			</div>
		</div>
	);
}
