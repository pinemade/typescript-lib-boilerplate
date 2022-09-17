import ts from '@rollup/plugin-typescript';
import { defineConfig, Plugin } from 'vite';

export default defineConfig({
  test: {
    coverage: {
      provider: 'c8',
    },
  },
  build: {
    lib: {
      entry: 'lib/index.ts',
      formats: ['cjs', 'es'],
      fileName: 'index',
    },
    rollupOptions: {
      plugins: [
        ts({
          declaration: true,
          declarationDir: 'dist',
          emitDeclarationOnly: true,
          baseUrl: '.',
          rootDir: 'lib',
        }) as Plugin,
      ],
    },
  },
});
