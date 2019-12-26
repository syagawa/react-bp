import { createStore, combineReducers, applyMiddleware } from "redux";
import { accountReducer, AccountStateInterface } from "../reducers/accountReducer";
import { countReducer, CountStateInterface } from "../reducers/countReducer";
import { asyncCountReducer, AsyncCountStateInterface } from "../reducers/asyncCountReducer";
import thunk from "redux-thunk";

export type AppStateType = {
  test: AccountStateInterface,
  count: CountStateInterface,
  count_a: AsyncCountStateInterface
};

const store = createStore(
  combineReducers<AppStateType>({
    test: accountReducer,
    count: countReducer,
    count_a: asyncCountReducer
  }),
  applyMiddleware(thunk)
);

export default store;
