import curry from "./curry.js";
export default curry((predicate, iter) => {
  const res = [];
  for (const a of iter) if (predicate(a)) res.push(a);
  return res;
});
