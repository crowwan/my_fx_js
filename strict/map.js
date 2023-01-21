import curry from "./curry.js";
export default curry((mapper, iter) => {
  const res = [];
  for (const a of iter) res.push(mapper(a));
  return res;
});
