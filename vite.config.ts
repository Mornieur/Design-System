import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      tsconfigPath: 'tsconfig.lib.json',
      insertTypesEntry: true,
      rollupTypes: true,
      copyDtsFiles: true
    })
  ],

  optimizeDeps: {},

  server: {
    port: 3000
  },

  build: {
    commonjsOptions: {
      include: [/node_modules/]
    },

    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'MornieurUI',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `mornieur-ui.${format}.js`
    },

    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled'
        }
      }
    }
  },

  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/tests/setup.ts'],
    include: ['**/*.test.{ts,tsx}'],
    reporters: ['verbose'],

    coverage: {
      provider: 'v8',
      reporter: ['html', 'lcov', 'text-summary'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/@types/**',
        '**/__tests__/**',
        'src/**/*.stories.ts',
        'src/**/*.stories.tsx'
      ]
    }
  }
});
