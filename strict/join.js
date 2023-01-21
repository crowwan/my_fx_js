import curry from "./curry";
import reduce from "./reduce";

export default curry((sep = ",", iter) =>
  reduce((a, b) => `${a}${sep}${b}`, iter)
);
