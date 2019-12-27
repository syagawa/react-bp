import { reducerWithInitialState } from "typescript-fsa-reducers";
import { asyncActions } from "../actions/asyncActions";


export interface AsyncStateInterface {
  counter: number;
}

const initialState: AsyncStateInterface = {
  counter: 0
};

export const asyncReducer = reducerWithInitialState(initialState)
  .case(
    asyncActions.increment,
    (state, counter) => {
      counter++;
      return Object.assign({}, state, { counter });
    }
  )
  .case(
    asyncActions.decrement,
    (state, counter) => {
      counter--;
      return Object.assign({}, state, { counter });
    }
  )
  .default((state)=> Object.assign({}, state, { counter: 0}) );