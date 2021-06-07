/* eslint-env node */
const path = require("path");

module.exports = {
    entry: {
        standalone: "./src/standalone.ts",
        "prettier-plugin-latex": "./src/prettier-plugin-latex.ts",
    },
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        library: { name: "prettierPluginPegjs", type: "umd" },
        globalObject: `(() => {
            if (typeof self !== 'undefined') {
                return self;
            } else if (typeof window !== 'undefined') {
                return window;
            } else if (typeof global !== 'undefined') {
                return global;
            } else {
                return Function('return this')();
            }
        })()`,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    compilerOptions: { outDir: "./dist", sourceMap: true },
                },
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};
