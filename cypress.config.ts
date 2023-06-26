// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   viewportWidth: 1920,
//   viewportHeight: 1080,
//   e2e: {
//     setupNodeEvents(on, config) {
//       baseUrl: 'https://demoqa.com/books' 
//     },
//     specPattern: 'cypress/e2e/**/*.ts'
//   },
// });

import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://demoqa.com/books',
    specPattern: 'cypress/e2e/**/*.ts',
  },
  
})