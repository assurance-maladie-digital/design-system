import * as fs from 'fs-extra';

const devTargetFolder = './dev';
const devTargetFile = `${devTargetFolder}/Playground.vue`;

if (!fs.existsSync(devTargetFile) && !process.env.CI) {
	fs.copySync(`${devTargetFolder}/Playground.template.vue`, devTargetFile);
}
// TODO skip in CI
