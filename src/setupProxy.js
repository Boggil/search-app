const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();
/*
app.use('/api',
    createProxyMiddleware({
        target: 'https://openapi.naver.com/v1',
        changeOrigin: true,
    })
);
*/

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://openapi.naver.com/v1',
      changeOrigin: true,
    })
  );
};
