const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'dxv34k',
  e2e: {
    baseUrl: 'https://dzfebp6b12rzi.cloudfront.net',
    viewportHeight: 720,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
