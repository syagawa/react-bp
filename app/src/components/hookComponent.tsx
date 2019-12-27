import * as React from "react";
import { HookStateInterface } from "../reducers/hookReducer";
import { HookActionsInterface } from "../containers/hookContainer";
import { AsyncIncrement } from "../actions/hookActions";
import { useEffect } from "react";

interface OwnProps {}

export type HookProps = OwnProps & HookStateInterface & HookActionsInterface;

export const HookComponent: React.SFC<HookProps> = (props: HookProps) => {

  const aaa = AsyncIncrement();
  useEffect(() => {
    aaa();
  }, []);

  return (
    <div>
      <div>
        <p>
          count: {props.counter}
        </p>
        <button onClick={() => props.increment(props.counter)}>+</button>
        <button onClick={() => props.decrement(props.counter)}>-</button>
      </div>
    </div>
  );
};