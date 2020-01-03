## Overview
> Utility functions for the axios library to allow extracting dynamic route segments as params.  WIP

## 📦 Getting Started

```
npm install
```

## 🚀 Usage
1. import the utility functions

### npm
```
import {route, parseRouteParams} from 'axios-route-params-utils';

 const obj = parseRouteParams("form/:userId/:formTitle", "form/43/title");

 console.log(obj);
 // returns {userId: 43, formTitle: "title"}

 //using object destructuring
 const {userId, formTitle} = parseRouteParams("form/:userId/:formTitle", "form/43/title");

 console.log(userId);
 // returns 43

 console.log(formTitle);
 //returns "title"

...
```
