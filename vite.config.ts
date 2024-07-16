import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

import aliases from './config/aliases'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS(),
    vue()
  ],
  resolve: {
    alias: aliases
  }
})
