# Public Deployment

FeitozaUI has two public documentation surfaces:

- The Next.js documentation app, deployed through the native GitHub integration in Vercel.
- Storybook, published through Chromatic for isolated component and visual-review workflows.

## Vercel

- Framework preset: `Next.js`
- Production branch: `develop`
- Root directory: repository root
- Install command: `yarn install --frozen-lockfile`
- Build command: `yarn build:docs`
- Output directory: leave unset; Next.js manages `.next`
- Node.js: 20 or newer
- Package manager: Yarn 1, using `yarn.lock`

Configure these public variables only after their real URLs exist:

- `NEXT_PUBLIC_SITE_URL`: production documentation URL.
- `NEXT_PUBLIC_STORYBOOK_URL`: public Chromatic Storybook URL.

Do not add credentials, tokens, or unverified URLs to public variables.

## Chromatic

The repository contains a Chromatic project configuration. GitHub Actions reads the project token only from the `CHROMATIC_PROJECT_TOKEN` repository secret. The workflow does not accept visual changes automatically; review them in Chromatic before merging.
