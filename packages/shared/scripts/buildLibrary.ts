import { execSync } from 'child_process';

const VUE_CLI_SERVICE_PATH = './node_modules/.bin/vue-cli-service';

export function buildLibrary(name: string, srcPath: string): void {
	execSync(`cross-env LIB_MODE=true ${VUE_CLI_SERVICE_PATH} build --target lib --name ${name} ${srcPath}/index.ts`, {
		stdio: 'inherit'
	});
}
