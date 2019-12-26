import { reducerWithInitialState } from "typescript-fsa-reducers";
import { accountActions } from "../actions/accountActions";

export interface AccountStateInterface {
  name: string;
  email: string;
}

const initialState: AccountStateInterface = {
  name: "",
  email: ""
};

export const accountReducer = reducerWithInitialState(initialState)
  .case(
    accountActions.updateName,
    (state, name) => {
      return Object.assign({}, state, { name });
    }
  )
  .case(
    accountActions.updateEmail,
    (state, email) => {
      return Object.assign({}, state, { email });
    }
  );