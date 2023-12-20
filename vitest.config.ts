/// <reference types="vitest" />
import { mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, {
  test: {
    include: ['./__tests__/**/*_spec*'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/setup.ts',
  },
})
