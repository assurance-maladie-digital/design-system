import fs from 'fs-extra';

export function cleanUpArtifacts(distPath: string): void {
	fs.removeSync(`${distPath}/demo.html`);

	fs.removeSync(`${distPath}/dev`);

	// Remove component folders since we don't transpile components individually
	fs.removeSync(`${distPath}/src/components`);

	fs.removeSync(`${distPath}/src/elements`);
	fs.removeSync(`${distPath}/src/patterns`);
	fs.removeSync(`${distPath}/src/templates`);

	fs.removeSync(`${distPath}/src/registerAllComponents.js`);
	fs.removeSync(`${distPath}/src/index.js`);
}
