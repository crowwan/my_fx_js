import curry from "./curry.js";
import reduce from "./reduce.js";

export default curry((sep = ",", iter) =>
  reduce((a, b) => `${a}${sep}${b}`, iter)
);
