import "./css/App.css";
import { route, parseRouteParams } from "./../lib";

class App {
  constructor() {
    parseRouteParams("form/:userId/:formTitle", "form/43/title");
    const { userId, formTitle } = parseRouteParams(
      "form/:userId/:formTitle",
      "form/43/title"
    );
    console.log(
      "parseRoutePrams: ",
      parseRouteParams("form/:userId", "form/43/title"),
      "params: ",
      userId,
      formTitle
    );
    console.log("route: ", route("/form/:userId/:formtitle"));
    console.log("Demo loaded!");
  }
}

export default App;
