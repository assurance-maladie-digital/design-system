import { drawerItems } from '~/data/drawerItems';
import { PageItem, SurroundItemsPaths } from '~/types/drawer';

function flattenDrawerItems(items: PageItem[]): PageItem[] {
	const flat: PageItem[] = [];

	items.forEach((item) => {
		if (Array.isArray(item.items)) {
			flat.push(...flattenDrawerItems(item.items));
		} else {
			flat.push(item);
		}
	});

	return flat;
}

export function getSurroundDrawerItemsPaths(itemPath: string): SurroundItemsPaths {
	const flattenedItems = flattenDrawerItems(drawerItems);

	const itemIndex = flattenedItems.findIndex((item) => item.to === itemPath);
	let prev;
	let next;

	if (itemIndex !== 0) {
		prev = flattenedItems[itemIndex - 1];
	}

	if (itemIndex !== flattenedItems.length) {
		next = flattenedItems[itemIndex + 1];
	}

	return {
		prevPath: prev?.to,
		nextPath: next?.to
	};
}
