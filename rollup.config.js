import {defineConfig} from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import externals from 'rollup-plugin-node-externals'
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import autoprefixer from 'autoprefixer';
// import cssnano from "cssnano";

export default defineConfig({
    input: './src/index.tsx',
    output: {
        dir: './dist',
        format: 'es',
        exports: 'named',
        preserveModules: true, // 保留模块结构
        preserveModulesRoot: "src",
    },
    plugins: [
        externals({
            devDeps: false
        }),
        nodeResolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.json',
            // outDir: "dist",
            // declaration: true,
            // declarationDir: "dist",
        }),
        postcss({
            plugins: [
                autoprefixer()
            ],
        }),
    ]
})
