import { createStore, combineReducers, applyMiddleware } from "redux";
import { accountReducer, AccountStateInterface } from "../reducers/accountReducer";
import { countReducer, CountStateInterface } from "../reducers/countReducer";
import thunk from "redux-thunk";
import { HookStateInterface, hookReducer } from "../reducers/hookReducer";

export type AppStateType = {
  test: AccountStateInterface,
  count: CountStateInterface,
  asyn: HookStateInterface
};

const store = createStore(
  combineReducers<AppStateType>({
    test: accountReducer,
    count: countReducer,
    asyn: hookReducer
  }),
  applyMiddleware(thunk)
);

export default store;
