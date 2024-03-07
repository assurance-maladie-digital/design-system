export interface Release {
	name: string;
	date: string;
	body: string;
	url: string;
}

export interface Contributor {
	id: number;
	login: string;
	html_url: string;
}

export interface TeamMember {
	gitHubId: number;
	name: string;
	role: string;
	img: string;
	url: string;
}

export interface OldTeamMember {
	gitHubId: number | null;
	name: string;
	url: string;
}

export type ReleaseDescription = Pick<Release, 'name' | 'date'>;
