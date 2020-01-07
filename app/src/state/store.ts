import { Store } from "redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";

import { History } from "history";

import todos from "./todos";

const rootReducer = combineReducers({
  todos,
  routing: routerReducer
});

export default function configureStore(
  initialState = {},
  history: History
): Store{
  const middlewares = [ thunk, routerMiddleware(history) ];
  return createStore(
    rootReducer,
    initialState,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  );
}

export type AppState = ReturnType<typeof rootReducer>;
