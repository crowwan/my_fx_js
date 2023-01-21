import go from "./strict/go.js";
import map from "./strict/map.js";
import reduce from "./strict/reduce.js";
import filter from "./strict/filter.js";

const log = console.log;

go(
  [1, 2, 3, 4, 5, 6, 7, 8],
  map((a) => a * 2),
  filter((a) => a > 4),
  reduce((a, b) => a + b),
  log
);
