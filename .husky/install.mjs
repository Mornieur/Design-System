import { existsSync } from 'node:fs';
import { spawnSync } from 'node:child_process';

if (!existsSync('.git')) {
  process.exit(0);
}

const gitCheck = spawnSync('git', ['--version'], { stdio: 'ignore' });

if (gitCheck.status !== 0) {
  process.exit(0);
}

const { default: husky } = await import('husky');

husky();
