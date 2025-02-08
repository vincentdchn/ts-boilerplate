import pluginJs from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.ts', '**/*.test.ts'],
        ignores: ['**/*.config.js', '**/*.test.js'],
        languageOptions: {
            globals: globals.browser,
            parser: tseslint.parser,
            parserOptions: { project: true },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            perfectionist,
            unicorn,
        },
        rules: {
            ...unicorn.configs.recommended.rules,
            ...perfectionist.configs['recommended-natural'].rules,
            ...pluginJs.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            'unicorn/filename-case': ['error', { cases: { kebabCase: true } }],
        },
    },
];
