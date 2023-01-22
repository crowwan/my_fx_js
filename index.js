import go from "./strict/go.js";
import map from "./strict/map.js";
import reduce from "./strict/reduce.js";
import filter from "./strict/filter.js";
import join from "./strict/join.js";
import take from "./strict/take.js";
import mapL from "./lazy/mapL.js";
import takeL from "./lazy/takeL.js";

const log = console.log;

go(
  [1, 2, 3, 4, 5, 6, 7, 8],
  mapL((a) => a * 2),
  takeL(4),
  reduce((a, b) => a + b),
  log
);
