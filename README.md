![status]
![npm]
![github-issues]


## Overview
> Utility functions for the axios library to allow extracting dynamic route segments as params.  Useful whith axios-mock-adapter.

## 📦 Getting Started

```sh
//npm
npm install @eddielee394/axios-route-params-utils

//yarn
yarn add @eddielee394/axios-route-params-utils
```

## 🚀 Usage

### `RouteFactory()`
```js
import axios from "axios";
import { RouteFactory } from "@eddielee394/axios-route-params-utils";

//instantiate the RouteFactory class with your axios instance
const instance = new RouteFactory(axios);
```

### `route()`
```js
import { RouteFactory } from "@eddielee394/axios-route-params-utils";

//with a custom axios instance
const instance = axios.create();
const { route } = new RouteFactory(instance);

//url passed to axios-mock-adapter: "/form/43/title"
mock.onGet(route("/form/:formId/:formTitle")).reply(request => {
//matched request url
    console.log(request.url);
    //output: "/form/43/title"

//request params object
    console.log(request.params);
    //output: {formId: 43, formTitle: 'title'}

//destructured params
    const {formId, formTitle} = request.params;

    console.log(formId); 
    //output: 43

    console.log(formTitle); 
    //output: 'title'

...
}

```

<!--- Links --->
[status]: https://img.shields.io/github/workflow/status/eddielee394/axios-route-params-utils/Build
[github-issues]: https://img.shields.io/github/issues/eddielee394/axios-route-params-utils
[npm]: https://img.shields.io/npm/v/@eddielee394/axios-route-params-utils
