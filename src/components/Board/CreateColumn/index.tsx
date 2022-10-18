import { useState } from "react";
import { Button } from "../../Shared/Button";

interface IProps {
	handleCreateColumn: (title: string) => void;
}

export function CreateColumn({ handleCreateColumn }: IProps) {
	const [isCreatingColumn, setIsCreatingColumn] = useState<boolean>(false);
	const [columnName, setColumnName] = useState<string>("");
	return (
		<>
			{isCreatingColumn ? (
				<div>
					<input
						type={"text"}
						name="newColumnName"
						onChange={(event) => setColumnName(event.target.value)}
					/>
					<Button
						onClick={() => handleCreateColumn(columnName)}
						title="Create"
					/>
				</div>
			) : (
				<Button
					onClick={() => setIsCreatingColumn(true)}
					title="Create New Column"
				/>
			)}
		</>
	);
}
