import { prettierPluginLatex } from "latex-ast-parser";

export const { languages, parsers, printers } = prettierPluginLatex;
export const options = {};

export const defaultOptions = {
    useTabs: true,
};

export default { languages, parsers, printers, options };
