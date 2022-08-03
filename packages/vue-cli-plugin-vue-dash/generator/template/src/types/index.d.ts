// Here you can define types that
// you'll be using across your application

export interface IndexedObject<T = string> {
	[key: string]: T;
}

export interface Link {
	id: number;
	url: string;
	name: string;
}

export interface LinkItem {
	title: string;
	links: Link[];
}
