import { defineConfig } from 'rollup';
import ts from 'rollup-plugin-ts';

export default defineConfig({
  input: 'lib/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
    },
    {
      dir: 'dist/esm',
      format: 'esm',
    },
  ],
  plugins: [
    ts({
      tsconfig: 'tsconfig.json',
    }),
  ],
});
