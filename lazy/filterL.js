import curry from "../strict/curry.js";

export default curry(function* filter(predicate, iter) {
  for (const a of iter) if (predicate(a)) yield a;
});
