const { createDefaultConfig } = require('@open-wc/testing-karma');
const merge = require('deepmerge');

module.exports = config => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        { pattern: config.grep ? config.grep : 'test/**/*.test.ts', type: 'module' },
      ],
      esm: {
        nodeResolve: true,
        babel: true,
        fileExtensions: ['.ts']
      },
    }),
  );
  return config;
};
