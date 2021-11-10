import * as fs from 'fs-extra';

const devTargetFolder = './dev';
const devTargetFile = `${devTargetFolder}/Playground.vue`;

if (!fs.existsSync(devTargetFile)) {
	fs.copySync(`${devTargetFolder}/Playground.template.vue`, devTargetFile);
}
