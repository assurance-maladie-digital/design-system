import { Octokit } from '@octokit/core';

import { REPO } from '~/constants';
import { Release, ReleaseDescription, Contributor } from './types';

export async function getAllReleases(): Promise<Release[]> {
	const octokit = new Octokit();
	const releases: Release[] = [];

	const { data } = await octokit.request(`GET /repos/${REPO}/releases?per_page=100`);

	for (const release of data) {
		releases.push({
			name: release.name,
			date: release.created_at,
			body: release.body,
			url: release.html_url
		});
	}

	return releases;
}

export async function getLatestRelease(): Promise<ReleaseDescription> {
	const octokit = new Octokit();

	const { data: release } = await octokit.request(`GET /repos/${REPO}/releases/latest`);

	return {
		name: release.name,
		date: release.created_at
	};
}

export async function getContributors(): Promise<Contributor[]> {
	const octokit = new Octokit();

	const { data: contributors } = await octokit.request(`GET /repos/${REPO}/contributors`);

	return contributors;
}
