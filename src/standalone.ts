import Prettier from "prettier/standalone";
import * as prettierPluginLatex from "./prettier-plugin-latex";

/**
 * Format `source` LaTeX code using Prettier to format/render
 * the code.
 *
 * @export
 * @param {string} [source=""] - code to be formatted
 * @param {*} [options={}] - Prettier options object (you can set `printWidth` here)
 * @returns {string} formatted code
 */
export function printPrettier(source = "", options = {}) {
    return Prettier.format(source, {
        printWidth: 80,
        useTabs: true,
        ...options,
        parser: "latex-parser" as any,
        plugins: [prettierPluginLatex as any],
    });
}

export { Prettier };
