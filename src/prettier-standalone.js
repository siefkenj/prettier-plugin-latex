// Typescript cannot import `mjs` modules, so we need to import it from a regular JS file
import Prettier from "prettier/esm/standalone.mjs";
export { Prettier };
export default Prettier;
