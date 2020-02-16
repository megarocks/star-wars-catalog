import { createDefaultConfig } from '@open-wc/building-rollup';
import del from 'rollup-plugin-delete';
import cpy from 'rollup-plugin-cpy';

const config = createDefaultConfig({
  input: './index.html',
  extensions: ['.js', '.mjs', '.ts'],
  plugins: {
    workbox: false
  }
});

export default {
  ...config,
 plugins: [
    ...config.plugins,
    del({ targets: 'dist/*' }),
    cpy({ files: ['./service-worker.js'],  dest: 'dist' })
  ]
}
