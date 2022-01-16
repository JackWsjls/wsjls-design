import typescript from 'rollup-plugin-typescript2'; // 打包TS 生成*.d.ts
import { nodeResolve } from '@rollup/plugin-node-resolve'; // 打包模块化
import commonjs from '@rollup/plugin-commonjs'; // 用于打包 CJS 的工具
import babel from '@rollup/plugin-babel'; // babel 打包工具
import replace from '@rollup/plugin-replace'; // 代码替换的工具
import progress from 'rollup-plugin-progress'; // 打包进度条
import postcss from 'rollup-plugin-postcss'; // 打包scss
import { terser } from 'rollup-plugin-terser'; // 压缩工具
import appendImportCSS from './plugins/append-import-css'; // 把css注入到代码中

const extensions = ['.js', '.ts', '.tsx'];
const isProduction = process.env.NODE_ENV === 'production';

export default {
  treeshake: {
    moduleSideEffects: false,
  },
  input: {
    index: './components',
    'nav-bar/index': './components/nav-bar',
    // 'alert/index': './components/alert',
  },
  output: [
    {
      dir: 'dist',
      format: 'esm',
    }
    // {
    //   dir: 'dist/cjs',
    //   format: 'cjs',
    // },
  ],
  plugins: [
    typescript(),
    replace({
      values: {
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV || 'development'
        ),
      },
      preventAssignment: true,
    }),
    nodeResolve({
      extensions,
    }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'bundled',
    }),
    postcss({
      extract: true, // 把css输出为单独的文件
    }),
    appendImportCSS(),
    isProduction && terser({ format: { comments: false } }),
    progress(),
  ],
  external: ['react'], // 排除 react，不打包在结果中
};
