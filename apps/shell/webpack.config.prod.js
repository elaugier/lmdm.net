const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { withModuleFederation } = require('@nx/react/module-federation');

const baseConfig = require('./module-federation.config');

const prodConfig = {
  ...baseConfig,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'http://app1.example.com'],
   *   ['app2', 'http://app2.example.com'],
   * ]
   *
   * You can also use a full path to the remoteEntry.js file if desired.
   *
   * remotes: [
   *   ['app1', 'http://example.com/path/to/app1/remoteEntry.js'],
   *   ['app2', 'http://example.com/path/to/app2/remoteEntry.js'],
   * ]
   */
  remotes: [
    ['read', 'http://localhost:4201/'],
    ['write', 'http://localhost:4202/'],
    ['contribute', 'http://localhost:4203/'],
    ['moderate', 'http://localhost:4204/'],
    ['manage', 'http://localhost:4205/'],
    ['profile', 'http://localhost:4206/'],
    ['members', 'http://localhost:4207/'],
    ['faq', 'http://localhost:4208/'],
    ['about', 'http://localhost:4209/'],
    ['contact', 'http://localhost:4210/'],
  ],
};

// Nx plugins for webpack to build config object from Nx options and context.
module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(prodConfig)
);
