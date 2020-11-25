import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import httpClientMiddleware from "./interceptors/config";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, httpClientMiddleware()),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose
  )
);

export default store;
