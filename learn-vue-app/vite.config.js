/// <reference types="vitest" />

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    // host: "localhost",
    port: 5000,
  },
  test: {
    environment: 'jsdom',
    root: 'src/',
    globals: true,
    coverage: {
      all: false,
      enabled: true, // Must enable
      generateOnFailure: true,
      cleanOnRerun: true,
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    }
  }
})
