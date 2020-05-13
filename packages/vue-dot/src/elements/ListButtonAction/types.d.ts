export interface ButtonAction {
	type?:string; // reset | submit | refresh | cancel | validate
	label: string;
	color?: string;
	action: Function;
	size?:string
}
