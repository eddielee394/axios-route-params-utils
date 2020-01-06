import axios from "axios";
import parseRouteParams from "./parseRouteParams";

const replaceWildcard = path => {
  return typeof path === "string"
    ? new RegExp(path.replace(/:\w+/g, "[^/]+"))
    : path;
};

/**
 * handles replace wildcards in axios routes
 * @example route("/api/users/:id");
 * @param {string} path
 * @returns {string}
 */
function route(path = "") {
  const url = replaceWildcard(path);

  axios.interceptors.request.use(request => {
    request.params = parseRouteParams(path, request.url);

    return request;
  });

  return url;
}

export default route;
