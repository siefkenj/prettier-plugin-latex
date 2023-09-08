import { prettierPluginLatex } from "@unified-latex/unified-latex-prettier";

export const options = {};

export const defaultOptions = {
    useTabs: true,
};

export const languages = prettierPluginLatex.languages;
export const parsers = prettierPluginLatex.parsers;
export const printers = prettierPluginLatex.printers;
