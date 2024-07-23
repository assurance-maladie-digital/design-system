import { copyFile, existsSync } from 'node:fs';

function createPlayground(): void {
  const devFolder = './dev';
  const targetFile = `${devFolder}/Playground.vue`;

  if (existsSync(targetFile)) {
    return;
  }

  copyFile(`${devFolder}/Playground.template.vue`, targetFile, (error) => {
    if (error) {
      throw error;
    }
  });
}

createPlayground();
