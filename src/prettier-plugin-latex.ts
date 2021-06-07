import * as LatexParser from "latex-ast-parser";
const prettierPluginLatex = LatexParser.prettierPluginLatex.default;

export const options = {};

export const defaultOptions = {
    useTabs: true,
};

export default { ...prettierPluginLatex, options };
