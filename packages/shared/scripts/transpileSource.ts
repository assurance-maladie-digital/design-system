import consola from 'consola';
import { execSync } from 'child_process';

export function transpileSource(distPath: string): void {
	consola.info('Transpiling TypeScript');

	execSync(`tsc -p tsconfig.build.json --outDir ${distPath}`, {
		stdio: 'inherit'
	});
}
