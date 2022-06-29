import consola from 'consola';

import { setupDistFolder } from '@cnamts/shared/scripts/setupDistFolder';
import { buildLibrary } from '@cnamts/shared/scripts/buildLibrary';
import { transpileSource } from '@cnamts/shared/scripts/transpileSource';
import { cleanUpArtifacts } from '@cnamts/shared/scripts/cleanUpArtifacts';

const SRC_PATH = './src';
const DIST_PATH = './dist';
const LIB_NAME = 'form-builder';

consola.info('Building full bundle');

setupDistFolder(DIST_PATH);
transpileSource(DIST_PATH);
buildLibrary(LIB_NAME, SRC_PATH);
cleanUpArtifacts(DIST_PATH);

consola.success('Build completed');
