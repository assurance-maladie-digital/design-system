import consola from 'consola';

import { setupDistFolder } from '@cnamts/shared/scripts/setupDistFolder';
import { generateJsonFile } from './generateJsonFile';
import { generateScssFile } from './generateScssFile';
import { generateJsFile } from './generateJsFile';

import { tokens } from '../../src/tokens';

const SRC_PATH = './src';
const DIST_PATH = './dist';

consola.info('Generating Design Tokens');

setupDistFolder(DIST_PATH);
generateJsonFile(tokens, DIST_PATH);
generateScssFile(tokens, DIST_PATH);
generateJsFile(SRC_PATH, DIST_PATH);

consola.success('Generation completed');
