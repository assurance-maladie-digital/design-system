export interface User {
	firstname: string;
	lastname: string;
	email: string;
	[key: string]: string;
}

export interface UsersResult {
	items: User[];
	total: number;
}
