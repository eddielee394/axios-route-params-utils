## Overview
> Utility functions for the axios library to allow extracting dynamic route segments as params.  Useful whith axios-mock-adapter.

## 📦 Getting Started

```
npm install
```

## 🚀 Usage

### `parseRouteParams()`
```sh
import {parseRouteParams} from 'axios-route-params-utils';

const obj = parseRouteParams("form/:formId/:formTitle", "form/43/title");

console.log(obj);
// output: {formId: 43, formTitle: "title"}

//using object destructuring
const {formId, formTitle} = parseRouteParams("form/:formId/:formTitle", "form/43/title");

console.log(formId);
// output: 43

console.log(formTitle);
//output: "title"
```


### `route()`
```sh
import {route} from 'axios-route-params-utils';

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
