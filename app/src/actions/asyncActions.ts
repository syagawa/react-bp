import actionCreateFactory from "typescript-fsa";
import { ThunkAction } from "redux-thunk";
import { Action, Dispatch } from 'redux';
import { getRandomNumberAsync } from "../helpers/randomCount";

export type IncrementPayload = {
  value: number;
};

export type DecrementPayload = {
  value: number;
};

export type AsyncState = {
  counter: number;
};

export interface IncrementAction extends Action {
  type: 'INCREMENT';
  payload: IncrementPayload;
}
export interface DecrementAction extends Action {
  type: 'DECREMENT';
  payload: DecrementPayload;
}


export type RootState = {
  counter: AsyncState;
};

export type CounterActions = IncrementAction & DecrementAction;

export type RootActions = CounterActions;



const actionCreator = actionCreateFactory();

export const asyncActions = {
  increment: actionCreator<number>("ACTIONS_AINCREMENT"),
  decrement: actionCreator<number>("ACTIONS_ADECLEMENT")
};


export const asyncIncrement = (payload: IncrementPayload): ThunkAction<void, RootState, undefined, RootActions>  => (
  dispatch: Dispatch<Action>
) => {
  getRandomNumberAsync()
    .then(function(num: number){
      dispatch(asyncActions.increment(num));
    });
};

export const asyncDecrement = (payload: IncrementPayload): ThunkAction<void, RootState, undefined, RootActions>  => (
  dispatch: Dispatch<Action>
) => {
  getRandomNumberAsync()
    .then(function(num: number){
      dispatch(asyncActions.decrement(num));
    });
};