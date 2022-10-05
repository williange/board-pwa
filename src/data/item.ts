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
import { IItem } from "../interfaces/Board";

export async function getItems(): Promise<IItem[]> {
	try {
		const itemsSnapshot = await getDocs(collection(db, "items"));
        const items: IItem[] = []
        itemsSnapshot.forEach((doc) => {
            items.push({...doc.data() as IItem, id: doc.id})
        })
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

export async function updateItem(item: IItem) {
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
        return {...itemSnapshot.data(), id: itemSnapshot.id}
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
