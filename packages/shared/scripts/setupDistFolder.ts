import fs from 'fs-extra';
import consola from 'consola';

export function setupDistFolder(path: string): void {
	if (!fs.existsSync(path)) {
		consola.info('Creating dist folder');
		fs.mkdirSync(path);
		return;
	}

	consola.info('Removing dist folder content');
	fs.emptyDirSync(`./${path}`);
}
