# Vue3 TypeScript Boilerplate

A modern frontend boilerplate built with Vue 3, TypeScript, Tailwind CSS, and Shadcn Vue components.

## Features

- ⚡️ [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework
- 🔥 [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- 🔒 [TypeScript](https://www.typescriptlang.org/) - Static Type Checking
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-First CSS Framework
- 📦 [Shadcn Vue](https://www.shadcn-vue.com/) - Re-usable UI components
- 📊 [Pinia](https://pinia.vuejs.org/) - State Management
- 🧭 [Vue Router](https://router.vuejs.org/) - Official Router for Vue.js
- 🧹 [ESLint](https://eslint.org/) - Code Linting
- ✨ [Prettier](https://prettier.io/) - Code Formatting
- 🐶 [Husky](https://typicode.github.io/husky/) - Git Hooks
- 📝 [Lint-Staged](https://github.com/okonet/lint-staged) - Run linters on git staged files

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://your-repository-url/vue3-ts-boilerplate.git
cd vue3-ts-boilerplate
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

This will start the development server at `http://localhost:6106`.

### Building for Production

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

### Project Structure

```bash
vue3-ts-boilerplate/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets (images, fonts, etc.)
│   ├── components/      # Vue components
│   ├── layouts/         # Layout components
│   ├── lib/             # Utility functions and libraries
│   ├── router/          # Vue Router configuration
│   ├── stores/          # Pinia stores
│   ├── views/           # Page components
│   ├── App.vue          # Root component
│   └── main.ts          # Application entry point
├── .eslintrc.js         # ESLint configuration
├── .prettierrc          # Prettier configuration
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

### Code Quality Tools

## Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

## Formatting

Format your code with Prettier:

```bash
npm run format
# or
yarn format
# or
pnpm format
```

## Git Hooks

This project uses Husky to run pre-commit hooks that ensure code quality before committing:

- pre-commit : Runs lint-staged to check and fix linting issues on staged files

### Customization

## Tailwind CSS

You can customize the Tailwind configuration in `tailwind.config.js`.

## Shadcn Vue Components

This project uses Shadcn Vue for UI components. You can add more components as needed following the # offiicial documentation [offiicial documentation](https://www.shadcn-vue.com/ 'offiicial documentation').
