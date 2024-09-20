import { createProxyMiddleware } from "http-proxy-middleware";

export const userServiceProxy = createProxyMiddleware({
  target: "http://localhost:3001",
  changeOrigin: true,
});

export const orderServiceProxy = createProxyMiddleware({
  target: "http://localhost:3002",
  changeOrigin: true,
});

export const productServiceProxy = createProxyMiddleware({
  target: "http://localhost:3003",
  changeOrigin: true,
});
