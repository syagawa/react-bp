import { reducerWithInitialState } from "typescript-fsa-reducers";
import { hookActions } from "../actions/hookActions";


export interface HookStateInterface {
  counter: number;
}

const initialState: HookStateInterface = {
  counter: 0
};

export const hookReducer = reducerWithInitialState(initialState)
  .case(
    hookActions.increment,
    (state, counter) => {
      counter++;
      return Object.assign({}, state, { counter });
    }
  )
  .case(
    hookActions.decrement,
    (state, counter) => {
      counter--;
      return Object.assign({}, state, { counter });
    }
  )
  .default((state)=> Object.assign({}, state, { counter: 0}) );