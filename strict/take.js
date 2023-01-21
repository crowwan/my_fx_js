import curry from "./curry.js";

export default curry((limit, iter) => {
  const res = [];
  for (const a of iter) {
    if (limit-- === 0) return res;
    res.push(a);
  }
  return res;
});
