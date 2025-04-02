import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: 'docs/openapi.yaml',
    output: {
        path: 'src/client',
        format: 'prettier',
        lint: false,
    },
    plugins: [
        {
            name: '@hey-api/typescript',
        },
        {
            name: '@hey-api/client-axios',
            baseUrl: false,
        },
        '@tanstack/react-query',
    ],
});
