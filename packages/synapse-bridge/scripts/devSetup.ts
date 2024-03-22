import { existsSync } from 'node:fs';
import { copyFile } from 'node:fs/promises';

async function createPlayground(): Promise<void> {
	const devFolder = './dev';
	const targetFile = `${devFolder}/Playground.vue`;

	if (existsSync(targetFile)) {
		return;
	}

	try {
		await copyFile(`${devFolder}/Playground.template.vue`, targetFile);
	} catch (error) {
		console.error(error);
	}
}

await createPlayground();
