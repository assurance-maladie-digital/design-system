import { IndexedObject } from "@cnamts/vue-dot/src/types";

export interface ItemHeader {
	label: string;
	value: string;
	class: string;
}

interface Item {
	[key: string]: string | boolean | undefined;
	value?: string;
	description: string;
	name: string;
	type: string;
	required?: boolean;
	signature?: string;
	options?: string;
	snippet?: string;
	props?: string;
}

type ApiItem = IndexedObject<Item[]>
export type ApiItems = IndexedObject<ApiItem>;

interface SideBarLink {
	title: string;
	to: string;
}

export interface SidebarItem {
	title: string;
	group: string;
	items: SideBarLink[];
}
