export interface IItem {
	description: string;
	title: string;
	columnId: string;
}

export interface IItemResponse extends IItem {
    id: string;
}

export interface IColumn {
	title: string;
	position: number;
	itemsId: string[];
}

export interface IColumnResponse extends IColumn {
	id: string;
}
