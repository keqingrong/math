import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
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
    },
    plugins: [
      resolve(),
      commonjs({
        extensions: ['.js', '.ts'],
      }),
      typescript(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs', sourcemap: true },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
    plugins: [typescript()],
  },
  {
    input: 'src/index.ts',
    output: [{ file: pkg.types, format: 'es' }],
    plugins: [dts()],
  },
]);
