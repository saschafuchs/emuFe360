# Vue3 specific Metafiles

Load the files into the new project folder (not into an already finished one, otherwise the files will be overwritten).

```bash
npx degit gisu/vueBoiler --force
```

If there is no package.json yet, initialize it with `npm init`. Then install the remaining packages. It is assumed that it is usually an existing Vue or Nuxt project, in which Vite, Typescript, Eslint etc. are already installed.

## Install Packages

**dependencies**

```bash
npm i container-query-polyfill @tailwindcss/container-queries
```

**devDependencies**

```bash
npm i -D @vitejs/plugin-vue @vue/test-utils @vitest/ui vitest @babel/types @types/web-bluetooth vue-tsc postcss postcss-import postcss-nested tailwindcss plop msw jsdom cssnano autoprefixer
```

## Extend script

Then expand the script block of `package.json`:

```json
"test:e2e": "cypress open",
"test:unit": "vitest run",
"test:unit:watch": "vitest",
"test:unit:ui": "vitest --ui",
"typecheck": "vue-tsc --noEmit",
"plop": "plop"
```

## Vitest

To be able to test the components also via Vitest the `vite.config.js` must be extended by a test block:

```js
test: {
  include: ['tests/**/*.test.ts', 'src/components/**/*.test.ts', 'src/composables/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
    inline: ['@vue']
  }
}
```

<https://vitest.dev/>

## Mock Service Worker

It is already prepared, in the file `mocks/handlers.js` the requests are noted which should be mocked. To connect the service worker:

```bash
npx msw init public/ --save
```

<https://mswjs.io/>

## E2E Tests

Cypress installs relatively easily, the installer helps you with that.

```bash
npx cypress open
```

More info about possible problems

- <https://docs.cypress.io/guides/tooling/typescript-support>

## Autoimport

If you want autoimport for Plugins and Components, install the following Packages

```bash
npm i -D eslint-import-resolver-typescript unplugin-auto-import unplugin-vue-components
```

Than uncomment the comments in the `eslintrc.js` File, and extend the Vite Config in the Plugins section:

```js
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

plugins: [
  Components({
    dirs: ['./src/components'],
    dts: true
  }),
  AutoImport({
    dts: './auto-imports.d.ts',
    defaultExportByFilename: false,
    vueTemplate: true,
    include: [
      /\.[tj]sx?$/,
      /\.vue\??/,
      /\.mdx?$/
    ],
    dirs: [
      './src/composables/**',
      './src/utils/**'
    ],
    imports: [
      'vue'
    ],
    eslintrc: {
      enabled: true,
      filepath: './.eslintrc-auto-import.json',
      globalsPropValue: true
    }
  })
]
```

Than extend the TSConfig with

```json
{
  "files": ["auto-imports.d.ts", "components.d.ts"]
}
```

## Storybook

To use Storybook 7, the following packages must be installed.

```bash
npm i -D react react-dom storybook vue-loader eslint-plugin-storybook babel-loader @babel/core @storybook/addon-essentials @storybook/addon-interactions @storybook/addon-links @storybook/blocks @storybook/testing-library @storybook/vue3 @storybook/vue3-vite
```
