import { execFileSync } from 'node:child_process';
import { existsSync, unlinkSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const yarnCommand = process.platform === 'win32' ? 'yarn.cmd' : 'yarn';
const consumers = [
  'consumer-tests/react-vite',
  'consumer-tests/next-app-router'
];

function run(command, args, cwd) {
  execFileSync(command, args, {
    cwd,
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });
}

run(yarnCommand, ['build'], repositoryRoot);

const packOutput = execFileSync(npmCommand, ['pack', '--ignore-scripts', '--json'], {
  cwd: repositoryRoot,
  encoding: 'utf8',
  shell: process.platform === 'win32'
});
const [{ filename }] = JSON.parse(packOutput);
const tarballPath = resolve(repositoryRoot, filename);

try {
  for (const consumer of consumers) {
    const consumerRoot = resolve(repositoryRoot, consumer);

    run(npmCommand, ['install', '--no-save', '--package-lock=false', tarballPath], consumerRoot);
    run(npmCommand, ['run', 'type-check'], consumerRoot);
    run(npmCommand, ['run', 'build'], consumerRoot);
  }
} finally {
  if (existsSync(tarballPath)) {
    unlinkSync(tarballPath);
  }
}
