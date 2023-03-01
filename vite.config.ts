import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: [
        // $root: path.resolve("src"),
        { find: '$root', replacement: path.resolve(__dirname, 'src') },
    ]
  }
})
