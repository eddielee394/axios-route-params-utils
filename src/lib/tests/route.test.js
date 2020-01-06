import route from "../route";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

let mock;

beforeAll(() => {
  mock = new MockAdapter(axios);
});

describe("when route is requested", () => {
  const path = "/path/:param1/:param2";
  const url = "/path/43/title";

  it("should replace params in the path and set the wildcards as request params", () => {
    mock.onGet(route(path)).reply(request => {
      expect(request.url).toMatch(url);

      expect(request.params).toEqual(
        expect.objectContaining({ param1: 43, param2: "title" })
      );

      return [200, request];
    });

    expect(axios.get(url)).resolves.toEqual(
      expect.objectContaining({ status: 200 })
    );
  });
});
