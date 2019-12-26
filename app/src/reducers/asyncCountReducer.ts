import { reducerWithInitialState } from "typescript-fsa-reducers";
import { asyncCountActions } from "../actions/asyncCountActions";
// import { getRandomNumberAsync } from "../helpers/randomCount";


export interface AsyncCountStateInterface {
  counter: number;
}

const initialState: AsyncCountStateInterface = {
  counter: 0
};

export const asyncCountReducer = reducerWithInitialState(initialState)
  .case(
    asyncCountActions.increment,
    (state: AsyncCountStateInterface, counter: number) => {
      counter++;
      // const num: number = await getRandomNumberAsync()
      //   .then(function(n){
      //     return n;
      //   });
      // return Object.assign({}, state, { counter: num });
      return Object.assign({}, state, { counter });
    }
  )
  .case(
    asyncCountActions.decrement,
    (state: AsyncCountStateInterface, counter: number) => {
      counter--;
      return Object.assign({}, state, { counter });
    }
  )
  .default((state: AsyncCountStateInterface)=> Object.assign({}, state, { counter: 0}) );