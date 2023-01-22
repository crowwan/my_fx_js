import curry from "../strict/curry.js";

export default curry(function* take(limit, iter) {
  if (limit < 1) return;
  for (const a of iter) {
    if (limit-- === 0) break;
    yield a;
  }
});
