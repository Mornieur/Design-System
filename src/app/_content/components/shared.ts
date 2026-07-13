import type { ComponentLinkDefinition } from './types';

const repositoryBaseUrl = 'https://github.com/Mornieur/design-system';
const repositorySourceBranch = 'develop';
const storybookBaseUrl = 'http://localhost:6006';

export const packageName = '@feitoza-ui/core';

export function createImportCode(componentName: string) {
  return `import { ${componentName} } from '${packageName}';`;
}

export function createInstallationCode() {
  return `npm install ${packageName}`;
}

export function createSourceLink(path: string, label: string): ComponentLinkDefinition {
  return {
    label,
    path,
    url: `${repositoryBaseUrl}/blob/${repositorySourceBranch}/${path}`
  };
}

export function createStorybookLink(path: string, label: string): ComponentLinkDefinition {
  return {
    label,
    path,
    url: `${storybookBaseUrl}/?path=${path}`
  };
}
