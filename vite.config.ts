import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

// Vitest config
const vitestResolve = process.env.VITEST
    ? {
          conditions: ['browser'],
      }
    : undefined;

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), svelte()],
    resolve: {
        alias: {
            $lib: path.resolve('./src/lib'),
        },
        ...vitestResolve,
    },
});
