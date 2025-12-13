import {fileURLToPath, URL} from "node:url";

/// <reference types="vitest" />
import {defineConfig} from "vite";
import type { ViteUserConfig } from "vitest/config";

const vitestConfig: ViteUserConfig = {
    test: {
        environment: "happy-dom",
        coverage: {
            provider: "v8",
            reporter: ["text", "lcov"],
            exclude: [
                "node_modules/**",
                "dist/**",
                "test/**",
                "vitest.config.ts"
            ]
        }
    }
};

import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        },
    },
    test: vitestConfig.test
})
