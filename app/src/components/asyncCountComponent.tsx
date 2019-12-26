import * as React from "react";
import { AsyncCountStateInterface } from "../reducers/asyncCountReducer";
import { AsyncCountActionsInterface } from "../containers/asyncCountContainer";

interface OwnProps {}

export type AsyncCountProps = OwnProps & AsyncCountStateInterface & AsyncCountActionsInterface;

export const AsyncCountComponent: React.SFC<AsyncCountProps> = (props: AsyncCountProps) => {
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