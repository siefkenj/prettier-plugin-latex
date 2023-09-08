import * as LatexParser from "latex-ast-parser";
const prettierPluginLatex = LatexParser.prettierPluginLatex.default;

export const options = {};

export const defaultOptions = {
    useTabs: true,
};

export const languages = prettierPluginLatex.languages
export const parsers = prettierPluginLatex.parsers
export const printers = prettierPluginLatex.printers

//export default { ...prettierPluginLatex };
