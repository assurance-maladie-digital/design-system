import fs from 'fs-extra';

export function createPlayground(): void {
	const devTargetFolder = './dev';
	const devTargetFile = `${devTargetFolder}/Playground.vue`;

	if (fs.existsSync(devTargetFile)) {
		return;
	}

	fs.copySync(`${devTargetFolder}/Playground.template.vue`, devTargetFile);
}
