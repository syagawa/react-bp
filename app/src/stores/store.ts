import { createStore, combineReducers } from "redux";
import { testReducer, TestState } from "../reducers/testReducer";
import { countReducer, CountState } from "../reducers/countReducer";

export type AppState = {
  test: TestState,
  count: CountState
};

const store = createStore(
  combineReducers<AppState>({
    test: testReducer,
    count: countReducer
  })
);

export default store;
