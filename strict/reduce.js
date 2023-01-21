import curry from "./curry.js";
export default curry((reducer, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = reducer(acc, a);
  }
  return acc;
});
