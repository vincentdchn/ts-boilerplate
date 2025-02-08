import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    resolve: {
        alias: { '@': path.resolve(import.meta.dirname, './src') },
    },
    test: {
        coverage: { provider: 'v8' },
        include: ['src/**/*.test.ts', 'src/**/*.test.ts'],
    },
});
