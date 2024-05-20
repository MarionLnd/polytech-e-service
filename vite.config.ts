import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          includeAbsolute: false
        }
      }
    })
  ],
  base: '/polytech-e-service/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('src/components', import.meta.url)),
      '@icons': fileURLToPath(new URL('src/components/icons', import.meta.url)),
      $fonts: fileURLToPath(new URL('src/assets/fonts', import.meta.url)),
      $images: fileURLToPath(new URL('src/assets/images', import.meta.url))
    }
  }
})
