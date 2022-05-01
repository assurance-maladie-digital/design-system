export interface Release {
	name: string;
	date: string;
	body: string;
	url: string;
}

export type ReleaseDescription = Pick<Release, 'name' | 'date'>;
