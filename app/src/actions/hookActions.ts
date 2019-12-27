import actionCreateFactory, { AnyAction } from "typescript-fsa";
import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { getRandomNumberAsync } from "../helpers/randomCount";
import { HookStateInterface } from "../reducers/hookReducer";
import { HookProps } from "../components/hookComponent";
import { HookActionsInterface } from "../containers/hookContainer";



type CounterState = {
  counter: number,
  type: "ACTIONS_HINCREMENT"
}

const actionCreator = actionCreateFactory();

const dispatch = useDispatch<Dispatch<CounterState>>();

export const hookActions = {
  increment: actionCreator<number>("ACTIONS_HINCREMENT"),
  decrement: actionCreator<number>("ACTIONS_HDECLEMENT"),
};

export const AsyncIncrement = () => {
  const items = useSelector(state => state.counter);
  const getFoo =  useCallback(
    async () => {
      getRandomNumberAsync()
        .then(function(num: number){
          dispatch({ type: "ACTIONS_HINCREMENT", counter: num });
          // dispatch(hookActions.increment(num));
        });
    },
    [hookActions.increment]
  )
  return [getFoo];
};
