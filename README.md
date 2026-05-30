# 最小 GitHub CI/CD 部署

这个仓库用于跑通一个最小但完整的 GitHub Actions 部署链路：

1. `npm test` 做 smoke test。
2. `npm run build` 把 `src/` 构建到 `dist/`。
3. GitHub Actions 把 `dist/` 部署到 GitHub Pages。

## 本地运行

```bash
npm test
npm run build
npm start
```

打开 <http://localhost:4173> 可以查看本地构建后的页面。

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 会自动部署到 GitHub Pages。
