import { reducerWithInitialState } from "typescript-fsa-reducers";
import { countActions } from "../actions/countActions";
import { AnyAction } from "typescript-fsa";

export interface CountState {
  counter: number;
}

const initialState: CountState = {
  counter: 0
};

export const countReducer = reducerWithInitialState(initialState)
  .case(
    countActions.increment,
    (state, counter) => {
      counter++;
      return Object.assign({}, state, { counter });
    }
  )
  .case(
    countActions.decrement,
    (state, counter) => {
      counter--;
      return Object.assign({}, state, { counter });
    }
  )
  .default((state, action)=> Object.assign({}, state, { counter: 0}) );