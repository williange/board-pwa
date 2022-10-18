import {
	collection,
	addDoc,
	updateDoc,
	getDocs,
	doc,
	deleteDoc,
	getDoc,
	query,
	where,
} from "firebase/firestore";
import { db } from "../firestore";
import { IItem, IItemResponse } from "../interfaces/Board";

export async function getItemsByColumn(
	columnId: string
): Promise<IItemResponse[]> {
	try {
		const q = query(collection(db, "items"), where("columnId", "==", columnId));
		const itemsSnapshot = await getDocs(q);
		const items: IItemResponse[] = [];
		itemsSnapshot.forEach((doc) => {
			items.push({ ...(doc.data() as IItem), id: doc.id });
		});
		return items;
	} catch (err) {
		console.error("Error getting Items By Column:", err);
		throw err;
	}
}

export async function getAllItems(): Promise<IItemResponse[]> {
	try {
		const itemsSnapshot = await getDocs(collection(db, "items"));
		const items: IItemResponse[] = [];
		itemsSnapshot.forEach((doc) => {
			items.push({ ...(doc.data() as IItem), id: doc.id });
		});
		return items;
	} catch (err) {
		console.error("Error getting Items:", err);
		throw err;
	}
}

export async function setItem(newItem: IItem) {
	try {
		await addDoc(collection(db, "items"), newItem);
	} catch (err) {
		console.error("Error setting Items:", err);
	}
}

export async function updateItem(item: IItemResponse) {
	try {
		const currentItemRef = doc(db, "items", item.id);
		await updateDoc(currentItemRef, { ...item });
	} catch (err) {
		console.error("Error updating Items:", err);
	}
}

export async function getItem(itemId: string) {
	try {
		const itemSnapshot = await getDoc(doc(db, "items", itemId));
		return { ...itemSnapshot.data(), id: itemSnapshot.id };
	} catch (err) {
		console.error("Error getting Item:", err);
	}
}

export async function deleteItem(itemId: string) {
	try {
		await deleteDoc(doc(db, "items", itemId));
	} catch (err) {
		console.error("Error deleting Items:", err);
	}
}
