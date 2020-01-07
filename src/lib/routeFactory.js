import { getRoute } from "./route";

class RouteFactory {
  constructor(axiosInstance) {
    this.instance = axiosInstance;
  }

  route = (path = "") => getRoute(path, this.instance);
}

export default RouteFactory;
