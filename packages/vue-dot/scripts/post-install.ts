import * as fs from 'fs-extra';

const DEV_TARGET_FOLDER = './dev';
const DEV_TARGET_FILE = `${DEV_TARGET_FOLDER}/Playground.vue`;

if (!fs.existsSync(DEV_TARGET_FILE)) {
	fs.copySync(`${DEV_TARGET_FOLDER}/Playground.template.vue`, DEV_TARGET_FILE);
}
