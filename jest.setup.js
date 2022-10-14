import 'whatwg-fetch'; // <-- yarn add whatwg-fetch

/** @type {import('jest').Config} */
const config = {
  verbose: true,
};
module.exports = config;

require("dotenv").config({
  path: ".env.local",
});

jest.mock('./src/helpers/getEnvironment.js', () => ({
  getEnvironments: () => ({ ...process.env }),
}));
