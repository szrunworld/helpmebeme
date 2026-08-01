# HelpMeBe.Me

> A private mirror for your time. — 自动记录，诚实回顾，有意记住。

HelpMeBe.Me 的产品 Landing Page，以及产品理念、品牌、设计系统、产品设计稿与市场验证参考文档。项目已从单文件 HTML 重构为 Astro 静态网站。

## 技术栈

- Astro 7：静态页面与组件结构
- Tailwind CSS 4：页面骨架、响应式布局与设计令牌
- Radix UI：章节导航的键盘操作、状态管理与横向滚动
- React 19：仅用于 Radix 交互岛，其余内容在构建时输出为静态 HTML

## 本地开发

```sh
npm install
npm run dev
```

## 检查与构建

```sh
npm run check
npm run build
```

构建后的静态文件位于 `dist/`，可部署到 GitHub Pages、Cloudflare Pages、Netlify 或任意静态文件服务器。

## GitHub Pages

推送到 `main` 后，GitHub Actions 会自动完成依赖安装、项目检查、静态构建和 Pages 发布：

https://szrunworld.github.io/helpmebeme/

## 项目结构

```text
src/
├── components/     # Radix UI 产品预览、FAQ 与章节导航
├── layouts/        # HTML 文档壳与 SEO 元信息
├── pages/          # Astro 页面入口
└── styles/         # Tailwind 主题与全局基础样式
```

- `/`：面向访客的产品 Landing Page
- `/design/`：完整产品与品牌参考文档

参考文档章节：⓪ 产品理念 Why · ① 品牌标识 Logo · ② 设计系统 Design System · ③ 产品设计稿 Wireframes · ④ 市场与验证 GTM。
