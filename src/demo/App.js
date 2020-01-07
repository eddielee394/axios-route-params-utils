import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { RouteFactory } from "./../lib";

const data = {
  category: "testCategory",
  id: 35,
  name: "testName"
};

const mock = new MockAdapter(axios);
const { route } = new RouteFactory(axios);

mock.onGet(route("/users/:category/:id")).reply(request => {
  const { category, id } = request.params;
  console.log("category param: ", category, "id param: ", id);

  return [200, data];
});

class App {
  constructor() {
    this.handleAxiosRequest();
  }

  handleAxiosRequest = () => {
    axios
      .get("/users/testCategory/35")
      .then(response => console.log("get response: ", response))
      .catch(error => console.log("get error: ", error));
  };
}

export default App;
