import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';

export default defineConfig(() => {
    return {
        plugins: [
            svgLoader({
                svgoConfig: {
                    multipass: true,
                },
            }),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
            extensions: ['.mjs', '.js', '.ts', '.json'],
        },

        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                            @use 'sass:math';
                         `,
                },
            },
        },

        server: {
            watch: {
                usePolling: true
            },
            host: true,
            strictPort: true
        }
    };
});
