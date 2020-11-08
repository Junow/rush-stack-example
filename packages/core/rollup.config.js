import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

process.env.BABEL_ENV = 'production';

export default [
  {
    input: './src/index.ts',
    external: ['@junow/rush-common'],
    plugins: [
      peerDepsExternal(),
      resolve({ 
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
    ],
  }
]
