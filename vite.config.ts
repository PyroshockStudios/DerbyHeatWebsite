import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    // This is the line that fixes the error
    allowedHosts: ['devserver-preview--derbyheat.netlify.app']
    allowedHosts: ['derbyheat.netlify.app']
    allowedHosts: ['derbyheat.com']
  },
})