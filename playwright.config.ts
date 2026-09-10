import process from 'node:process'
import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './tests',
  timeout: 120000,
  workers: 2,
  use: {
    baseURL: 'http://127.0.0.1:3100',
    headless: true,
    actionTimeout: 10000,
  },
  webServer: {
    command: 'node .output/server/index.mjs',
    url: 'http://127.0.0.1:3100',
    env: { PORT: '3100', HOST: '127.0.0.1' },
    reuseExistingServer: !process.env.CI,
  },
  reporter: 'list',
})
