import vue from "@vitejs/plugin-vue"
import { viteMockServe } from "vite-plugin-mock"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [
        vue(),
        viteMockServe({
            supportTs: true     //如果使用 js发开，则需要配置 supportTs 为 false
        })
    ]
})