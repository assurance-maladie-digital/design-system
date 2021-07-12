import { Octokit } from '@octokit/core';

import { REPO } from '~/constants';
import { Release } from './types';

export async function getLatestRelease(): Promise<Release> {
	const octokit = new Octokit();

	const response = await octokit.request(`GET /repos/${REPO}/releases/latest`);
	const { tag_name, created_at } = response.data;

	return {
		version: tag_name,
		date: created_at
	};
}
