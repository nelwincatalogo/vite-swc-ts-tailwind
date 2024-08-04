import generouted from '@generouted/react-router/plugin';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import TurboConsole from 'unplugin-turbo-console/vite';
import { defineConfig } from 'vite';
import { reactClickToComponent } from 'vite-plugin-react-click-to-component';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TurboConsole({
      port: 3000,
    }),
    generouted(),
    reactClickToComponent(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
