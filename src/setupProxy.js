const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();

module.exports = function(app) {
  app.use(
    '/search',
    createProxyMiddleware({
      target: 'https://openapi.naver.com/v1',
      changeOrigin: true,
    })
  );
}

//app.listen(3000);