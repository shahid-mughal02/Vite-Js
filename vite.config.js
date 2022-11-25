import { defineConfig } from "vite";
import { resolve } from 'pathe'
import { qrcode } from 'vite-plugin-qrcode'

export default defineConfig({
    base: process.env.NODE_ENV == 'production' ? '/vite-js/' : '/',
    publicDir: 'public',    // for assets
    resolve: {
        alias: {
            '/@': resolve(__dirname, './src'),
        }
    },
    server: {
        port: 4502,
    },
    plugins: [
        qrcode()
    ]
})
