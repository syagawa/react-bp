import { createStore, combineReducers } from "redux";
import { testReducer, TestState } from "../reducers/testReducer";

export type AppState = {
  test: TestState
};

const store = createStore(
  combineReducers<AppState>({
    test: testReducer
  })
);

export default store;
