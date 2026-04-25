import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'DeepSeek Auto Expert',
        version: '0.1.0',
        description: 'Automatically select the "expert" model on DeepSeek website.',
        license: 'GPL-3.0',
        author: 'Farhan Digital',
        icon: 'https://cdn.jsdelivr.net/gh/farhandigital/deepseek-auto-expert@master/public/deepseek-logo.png',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://chat.deepseek.com/'],
      },
    }),
  ],
});
