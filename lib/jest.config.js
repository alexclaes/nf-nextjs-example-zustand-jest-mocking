const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  displayName: "lib",
  rootDir: "../lib/",
  testMatch: ["<rootDir>/**/*.spec.js"],
  testEnvironment: "node",
  resolver: `<rootDir>/../jest-resolver.js`, // <- important for nanoid,
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
