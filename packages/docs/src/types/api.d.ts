export interface QueryStringParameters {
	[name: string]: string | undefined;
}

export interface User {
	[key: string]: string;
	firstname: string;
	lastname: string;
	email: string;
}

export interface UsersResult {
	items: User[];
	total: number;
}
