export interface Release {
	name: string;
	date: string;
	body: string;
	url: string;
}

export interface Contributor {
	id: string;
	login: string;
	html_url: string;
}

export type ReleaseDescription = Pick<Release, 'name' | 'date'>;
