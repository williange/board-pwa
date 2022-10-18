import {
	collection,
	addDoc,
	updateDoc,
	getDocs,
	doc,
	deleteDoc,
	getDoc,
} from "firebase/firestore";
import { db } from "../firestore";
import { IColumn, IColumnResponse } from "../interfaces/Board";

export async function getColumns(): Promise<IColumnResponse[]> {
	try {
		const columnsSnapshot = await getDocs(collection(db, "columns"));
		const columns: IColumnResponse[] = [];
		columnsSnapshot.forEach((doc) => {
			columns.push({ ...(doc.data() as IColumn), id: doc.id });
		});
		return columns;
	} catch (err) {
		console.error("Error getting Columns:", err);
		throw err;
	}
}

export async function setColumn(newColumn: IColumn) {
	try {
		await addDoc(collection(db, "columns"), newColumn);
	} catch (err) {
		console.error("Error setting Columns:", err);
	}
}

export async function updateColumn(column: IColumnResponse) {
	try {
		const currentColumnRef = doc(db, "columns", column.id);
		await updateDoc(currentColumnRef, { ...column });
	} catch (err) {
		console.error("Error updating Columns:", err);
	}
}

export async function getColumn(columnId: string) {
	try {
		const columnSnapshot = await getDoc(doc(db, "columns", columnId));
		return { ...columnSnapshot.data(), id: columnSnapshot.id };
	} catch (err) {
		console.error("Error getting Column:", err);
	}
}

export async function deleteColumn(columnId: string) {
	try {
		await deleteDoc(doc(db, "columns", columnId));
	} catch (err) {
		console.error("Error deleting Columns:", err);
	}
}
