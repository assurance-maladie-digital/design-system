import { default as slugifyFn } from 'slugify';

export function slugify(value: string): string {
	const options = {
		lower: true
	};

	return slugifyFn(value, options);
}
