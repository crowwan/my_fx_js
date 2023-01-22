import curry from "./curry.js";

export default curry((callback, iter) => {
  for (const a of iter) callback(a);
});
