import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

const config = {
  input: 'src/components/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'chroma-ui',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react/jsx-runtime': 'jsxRuntime',
      },
      sourcemap: false,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: false,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({
      config: {
        path: './postcss.config.js',
      },
      extensions: ['.css'],
      minimize: true,
      extract: true,
    }),
    typescript({
      tsconfigOverride: {
        exclude: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.stories.tsx'],
      },
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};

export default config;
