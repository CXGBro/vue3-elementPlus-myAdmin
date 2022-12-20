import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/

export default ({ mode }) => {
  const envConfig = loadEnv(mode, './');
  let config = {
    plugins: [
      vue(),
      ElementPlus()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      proxy: {
        [envConfig.VITE_APP_API]: {
          target: envConfig.VITE_APP_DEV_API,
          changeOrigin: true,
          pathRewrite: {
            [`^${envConfig.VITE_APP_API}`]: ''
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@import './src/style/main.scss';"
        }
      }
    }
  }

  return defineConfig(config)
}
