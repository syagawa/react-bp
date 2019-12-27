import { createStore, combineReducers, applyMiddleware } from "redux";
import { accountReducer, AccountStateInterface } from "../reducers/accountReducer";
import { countReducer, CountStateInterface } from "../reducers/countReducer";
import thunk from "redux-thunk";
import { AsyncStateInterface, asyncReducer } from "../reducers/asyncReducer";

export type AppStateType = {
  test: AccountStateInterface,
  count: CountStateInterface,
  asyn: AsyncStateInterface
};

const store = createStore(
  combineReducers<AppStateType>({
    test: accountReducer,
    count: countReducer,
    asyn: asyncReducer
  }),
  applyMiddleware(thunk)
);

export default store;
