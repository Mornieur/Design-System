import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      dts({
        insertTypesEntry: true,
        rollupTypes: true
      })
    ],
    server: {
      port: 3000
    },
    define: {
      'process.env': {
        ...process.env,
        ...env
      }
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'ByxDesignSystem',
        formats: ['es', 'cjs', 'umd'],
        fileName: (format) => `byx-design-system.${format}.js`
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }
        }
      }
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: [path.resolve(__dirname, 'src/__tests__/setup/setup.tsx')],
      include: ['**/*.test.tsx'],
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
  };
});
