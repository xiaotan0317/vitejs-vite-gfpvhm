import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    },
    // global css
    // css: {
    // 	preprocessorOptions: {
    // 		scss: {
    // 			additionalData: `@import "@/styles/var.scss";`
    // 		}
    // 	}
    // },
    // plugins
    plugins: [vue()],
  };
});
