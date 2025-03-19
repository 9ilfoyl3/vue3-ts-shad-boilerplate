# Vue3 TypeScript 项目模板

一个现代化的前端项目模板，基于 Vue 3、TypeScript、Tailwind CSS 和 Shadcn Vue 组件构建。

## 特性

- ⚡️ [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- 🔥 [Vite](https://vitejs.dev/) - 下一代前端构建工具
- 🔒 [TypeScript](https://www.typescriptlang.org/) - 静态类型检查
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- 📦 [Shadcn Vue](https://www.shadcn-vue.com/) - 可重用 UI 组件
- 📊 [Pinia](https://pinia.vuejs.org/) - 状态管理
- 🧭 [Vue Router](https://router.vuejs.org/) - Vue.js 官方路由
- 🧹 [ESLint](https://eslint.org/) - 代码检查
- ✨ [Prettier](https://prettier.io/) - 代码格式化
- 🐶 [Husky](https://typicode.github.io/husky/) - Git 钩子
- 📝 [Lint-Staged](https://github.com/okonet/lint-staged) - 对暂存的 git 文件运行 linters

## 开始使用

### 前提条件

- Node.js (16 版本或更高)
- npm 或 yarn 或 pnpm

### 安装

1. 克隆仓库：

```bash
git clone https://your-repository-url/vue3-ts-boilerplate.git
cd vue3-ts-boilerplate
```

2. 克隆仓库：

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 开发

启动开发服务器：

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

这将在 `http://localhost:6106` 启动开发服务器。

### 生产构建

为生产环境构建应用：

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### 预览生产构建

在本地预览生产构建：

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

### 项目结构

```bash
vue3-ts-boilerplate/
├── public/              # 静态资源
├── src/
│   ├── assets/          # 项目资源（图片、字体等）
│   ├── components/      # Vue 组件
│   ├── layouts/         # 布局组件
│   ├── lib/             # 工具函数和库
│   ├── router/          # Vue Router 配置
│   ├── stores/          # Pinia 存储
│   ├── views/           # 页面组件
│   ├── App.vue          # 根组件
│   └── main.ts          # 应用入口点
├── .eslintrc.js         # ESLint 配置
├── .prettierrc          # Prettier 配置
├── index.html           # HTML 模板
├── package.json         # 项目依赖和脚本
├── postcss.config.js    # PostCSS 配置
├── tailwind.config.js   # Tailwind CSS 配置
├── tsconfig.json        # TypeScript 配置
└── vite.config.ts       # Vite 配置
```

### 代码质量工具

## 代码检查

运行 ESLint 检查代码质量问题：

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

## 格式化

使用 Prettier 格式化代码：

```bash
npm run format
# or
yarn format
# or
pnpm format
```

## Git 钩子

本项目使用 Husky 运行 pre-commit 钩子，确保在提交前检查代码质量：

- pre-commit : 运行 lint-staged 检查并修复暂存文件中的代码问题

### 自定义

## Tailwind CSS

您可以在 `tailwind.config.js` 中自定义 Tailwind 配置。

## Shadcn Vue 组件

本项目使用 Shadcn Vue 作为 UI 组件。您可以根据需要按照 # 官方文档 [官方文档](https://www.shadcn-vue.com/ '官方文档')添加更多组件。
