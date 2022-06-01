import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
import viteComponents, { ElementPlusResolver } from 'vite-plugin-components'
import { resolve } from 'path'

const pathResolve = (pathStr: string) => {
    return resolve(pathStr)
}
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        viteComponents({
            customComponentResolvers: [ElementPlusResolver()]
        }),
        createStyleImportPlugin({
          resolves: [ElementPlusResolve()]
        }),
        copy({
            targets:[
                {
                    src: resolve('./public/404.html'),
                    dest: resolve('./dist/404.html')
                }
            ]
        })
    ],
    alias: {
        '@': pathResolve('./src')
    },
    base: 'https://nsefelibata.github.io/cdn-test/'
})
