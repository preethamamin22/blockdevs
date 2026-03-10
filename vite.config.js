import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                admin: resolve(__dirname, 'admin.html'),
                dashboard: resolve(__dirname, 'dashboard.html'),
                player: resolve(__dirname, 'player.html'),
                questions: resolve(__dirname, 'questions.html'),
            },
        },
    },
});
