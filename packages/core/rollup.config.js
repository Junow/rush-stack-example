import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const extensions = ['.ts'];

process.env.BABEL_ENV = 'production';

export default [
  {
    input: './src/index.ts',
    plugins: [
      peerDepsExternal(),
      resolve({ extensions }),
      commonjs({
        include: 'node_modules/**'
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        presets: ['@babel/env'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
        clean: true,
      }),

    ],
    output: [
      {
        dir: 'dist',
        format: 'es',
      }
    ]
  }
]
