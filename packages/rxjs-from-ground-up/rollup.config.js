const rollupTypescript = require('@rollup/plugin-typescript');

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    rollupTypescript({
      exclude: [
        '**/*.spec.ts',
      ],
    }),
  ]
};
