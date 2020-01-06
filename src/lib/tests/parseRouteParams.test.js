import parseRouteParams from "../parseRouteParams";

describe("parseRoutePrams tests", () => {
  it("should be a function", () => {
    expect(parseRouteParams).toEqual(expect.any(Function));
  });
});
