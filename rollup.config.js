import resolve from '@rollup/plugin-node-resolve';
import typescript2 from 'rollup-plugin-typescript2';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';

export default defineConfig([
  {
    input: 'src/index.ts',
    output: {
      name: '@keqingrong/math',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
      globals: {
        'number-precision': 'NP',
      },
    },
    plugins: [resolve(), typescript2()],
    external: ['number-precision'],
  },
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [resolve(), typescript2()],
  },
  {
    input: 'src/index.ts',
    output: [{ file: pkg.types, format: 'es' }],
    plugins: [dts()],
  },
]);
