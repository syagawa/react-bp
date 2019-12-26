import { createStore, combineReducers } from "redux";
import { accountReducer, AccountStateInterface } from "../reducers/accountReducer";
import { countReducer, CountStateInterface } from "../reducers/countReducer";

export type AppStateType = {
  test: AccountStateInterface,
  count: CountStateInterface
};

const store = createStore(
  combineReducers<AppStateType>({
    test: accountReducer,
    count: countReducer
  })
);

export default store;
