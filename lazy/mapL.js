import curry from "../strict/curry.js";

export default curry(function* (mapper, iter) {
  for (const a of iter) yield mapper(a);
});
