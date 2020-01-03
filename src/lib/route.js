/**
 * handles wildcards in axios routes
 * @example "/api/recipes/:id"
 * @param path
 * @returns {string}
 */
function route(path = "") {
  return typeof path === "string"
    ? new RegExp(path.replace(/:\w+/g, "[^/]+"))
    : path;
}

export default route;
