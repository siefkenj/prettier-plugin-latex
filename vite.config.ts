import { defineConfig } from "vitest/config";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [
        dts(),
        //{ rollupTypes: true }
    ],
    build: {
        minify: false,
        sourcemap: true,
        lib: {
            entry: {
                "prettier-plugin-latex": "./src/prettier-plugin-latex.ts",
                standalone: "./src/standalone.ts",
            },
            formats: ["cjs", "es"],
        },
    },
    test: {
        globals: true,
    },
});
