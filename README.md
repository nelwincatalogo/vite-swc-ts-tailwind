# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Summary

- TypeScript Support
- [Unplugin Turbo Console](https://utc.yuy1n.io/guide/getting-started.html)
- [Generouted](https://github.com/oedotme/generouted?tab=readme-ov-file#getting-started)
- [TailwindCSS](https://tailwindcss.com/)
- [Absolute Import](https://dev.to/andrewezeani/how-to-create-absolute-imports-in-vite-react-app-a-step-by-step-guide-28co)
- Linting

  - prettier
  - eslint-config-prettier
  - eslint-plugin-prettier
  - eslint-plugin-tailwindcss

- [Shadcn Sonner](https://ui.shadcn.com/docs/components/sonner)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [hookstate](https://hookstate.js.org/) (state management)
- Lint on pre-commit
  - Husky
- Default Font [Geist, Poppins, Inter]
