const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require("cypress-image-diff-js/plugin");

const environments = {
  test: {
    baseUrl: "https://www.saucedemo.com",
  },
  stage: {
    baseUrl: "https://www.saucedemo2.com",
  },
  prod: {
    baseUrl: "https://www.saucedemo3.com",
  },
};

module.exports = defineConfig({
  allowCypressEnv: false,

  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    reportPageTitle: "SauceDemo Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    viewportHeight: 1366,
    viewportWidth: 768,
    defaultCommandTimeout: 6000,
    video: true,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      const envName = config.env.environment || "test";

      const selectedEnv = environments[envName];

      if (!selectedEnv) {
        throw new Error(`Environment "${envName}" not found`);
      }

      config.baseUrl = selectedEnv.baseUrl;

      getCompareSnapshotsPlugin(on, config);

      return config;
    },
  },
});