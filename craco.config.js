const path = require('path')
const CracoLessPlugin = require('craco-less');
const { APP_URL } = require('./config.dev')
const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  // 配置less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  // webpack,配置路径别名
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components"),
      "utils": resolve("src/utils"),
    },
    mode: 'development'
  },
  //配置跨域代理
  devServer: {
    proxy: {
      '/api': {
        target: APP_URL,
        pathRewrite: { '^/api': '' },
        secure: true,//开启https转发
        changeOrigin: true
      }
    }
  }
}