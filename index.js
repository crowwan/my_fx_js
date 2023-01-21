import go from "./strict/go.js";
import map from "./strict/map.js";
import reduce from "./strict/reduce.js";
import filter from "./strict/filter.js";
import join from "./strict/join.js";
import take from "./strict/take.js";
const log = console.log;

go(
  [1, 2, 3, 4, 5, 6, 7, 8],
  map((a) => a * 2),
  take(4),
  log
);
