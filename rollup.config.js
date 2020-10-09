const {
  terser
} = require('rollup-plugin-terser')
const {
  nodeResolve
} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const {
  babel
} = require('@rollup/plugin-babel')

export default [{
  input: './src/index.jsx',
  external: ['react'],
  output: [{
    exports: 'auto',
    file: 'dist/index.esm.js',
    format: 'esm',
    plugins: [
      terser({
        compress: {
          drop_console: true
        },
        output: {
          comments: false
        },
        ecma: 2019
      })
    ]
  }
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      skipPreflightCheck: true
    }),
    nodeResolve({}),
    commonjs({
      include: ['./src/**', 'node_modules/**']
    })
  ]
}]
