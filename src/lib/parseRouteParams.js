import { filter, nth, split, trim, zipObject, camelCase } from "lodash";

/**
 *
 * @param {string} path
 * @param {string} url
 * @returns {{}}
 */
function parseRouteParams(path, url) {
  const matcher = value => /:\w+/g.test(value);

  //first normalize the path & url, then split into arrays
  const pathSegments = split(path, "/");
  const urlSegments = split(url, "/");

  //make sure the length of the pathSegments & urlSegments match otherwise throw an error
  if (pathSegments.length !== urlSegments.length) {
    console.log("the path & url do not match!");
  }

  //filter the wildcard path segments & trim up the strings
  let wildcards = filter(pathSegments, _p => matcher(_p));
  wildcards = wildcards.map(w => trim(w, ":"));

  //get the index of each wildcard in the path and url
  let wildcardIndex = [];
  let urlValues = [];

  pathSegments.map((_p, index) => matcher(_p) && wildcardIndex.push(index));

  //create the url values array from the wildcard indexes
  wildcardIndex.map(wildcard => urlValues.push(nth(urlSegments, wildcard)));

  //create an object keyed by path wildcard & associated path string as the value
  const params = zipObject(wildcards, urlValues);

  return params;
}

export default parseRouteParams;
