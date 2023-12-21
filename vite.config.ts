import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import vitePages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['/sb-preview/runtime.js'],
  plugins: [
    react(),
    tsconfigPaths(),
    vitePages({
      dirs: './src/pages',
    }),
  ],
})
