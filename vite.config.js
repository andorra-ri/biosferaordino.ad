import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import markdown from 'vite-plugin-md';
import yaml from '@rollup/plugin-yaml';
import vueI18n from '@intlify/vite-plugin-vue-i18n';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    markdown(),
    yaml(),
    vueI18n({
      compositionOnly: true,
      include: path.resolve(__dirname, './src/locales/**'),
    }),
  ],
  resolve: {
    alias: [
      { find: '/@', replacement: path.resolve(__dirname, './src') },
    ],
  },
});
