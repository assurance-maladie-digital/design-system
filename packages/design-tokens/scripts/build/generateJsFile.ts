import consola from 'consola';
import { execSync } from 'child_process';

export function generateJsFile(srcPath: string, distPath: string): void {
	consola.info('Transpiling TypeScript');

	execSync(`tsc ${srcPath}/tokens.ts --outDir ${distPath} --skipLibCheck`, {
		stdio: 'inherit'
	});
}
