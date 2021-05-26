import { Content, ContentFunction, SurroundItems } from '~/types/content';
import { getSurroundDrawerItemsPaths } from './getSurroundDrawerItemsPaths';

async function getSurroundDrawerItem($content: ContentFunction, path?: string): Promise<Content> {
	if (!path) {
		return [];
	}

	return await $content({ deep: true })
		.only(['title', 'slug', 'path'])
		.where({
			path,
			position: {
				$ne: 'hiddenInDrawer'
			}
		})
		.fetch<Content>();
}

export async function getSurroundDrawerItems($content: ContentFunction, path: string): Promise<SurroundItems> {
	const { prevPath, nextPath } = getSurroundDrawerItemsPaths(path);

	const [prev] = await getSurroundDrawerItem($content, prevPath);
	const [next] = await getSurroundDrawerItem($content, nextPath);

	return {
		prev,
		next
	};
}
