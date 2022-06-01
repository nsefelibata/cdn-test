import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
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
        })
    ],
    alias: {
        '@': pathResolve('./src')
    },
    base: 'https://nsefelibata.github.io/cdn-test/'
})
