import { filter, nth, split, trim, zipObject, toNumber } from "lodash";

/**
 *
 * @param {string} path
 * @param {string} url
 * @returns {{}}
 */
export const parseRouteParams = (path, url) => {
  const matcher = value => /:\w+/g.test(value);

  //first normalize the path & url, then split into arrays
  const pathSegments = split(path, "/");
  const urlSegments = split(url, "/");

  //filter the wildcard path segments & trim up the strings
  let wildcards = filter(pathSegments, _p => matcher(_p));
  wildcards = wildcards.map(w => trim(w, ":"));

  //get the index of each wildcard in the path and url
  let wildcardIndex = [];
  let urlValues = [];

  pathSegments.map((_p, index) => matcher(_p) && wildcardIndex.push(index));

  //create the url values array from the wildcard indexes
  wildcardIndex.map(wildcard => urlValues.push(nth(urlSegments, wildcard)));

  //convert any number strings to the correct type
  urlValues = urlValues.map(val => {
    if (!isNaN(val)) {
      return toNumber(val);
    }
    return val;
  });

  //create an object keyed by path wildcard & associated path string as the value
  const params = zipObject(wildcards, urlValues);

  return params;
};

/**
 * replaces wildcard in a string
 * @param {string} path
 * @returns {string}
 */
const replaceWildcard = path => {
  return typeof path === "string"
    ? new RegExp(path.replace(/:\w+/g, "[^/]+"))
    : path;
};

/**
 * handles replace wildcards in axios routes
 * @example route("/api/users/:id");
 * @param {string} path
 * @param instance
 * @returns {string}
 */
export const getRoute = (path = "", instance) => {
  const url = replaceWildcard(path);

  instance.interceptors.request.use(request => {
    request.params = parseRouteParams(path, request.url);

    return request;
  });

  return url;
};
