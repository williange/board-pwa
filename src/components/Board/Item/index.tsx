import { useState } from "react";
import { IItem } from "../../../interfaces/Board";
import { Button } from "../../Shared/Button";
import styles from "./styles.module.scss";

export function Item({ id, description, title }: IItem) {
	const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);
	return (
		<div className={styles.boardItem} data-testid={id}>
			<h4 className={styles.title}>{title}</h4>
			<div
				className={`${styles.descriptionContainer} ${
					isDescriptionOpen ? styles.active : ""
				}`}
			>
				<p>{description}</p>
			</div>
			<Button
				type="button"
				onClick={() => {
					setIsDescriptionOpen(!isDescriptionOpen);
				}}
                title={isDescriptionOpen ? "See Less" : "See More"}
			/>
		</div>
	);
}
