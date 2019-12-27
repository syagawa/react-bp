import * as React from "react";
import { AsyncStateInterface } from "../reducers/asyncReducer";
import { AsyncActionsInterface } from "../containers/asyncContainer";

interface OwnProps {}

type AsyncProps = OwnProps & AsyncStateInterface & AsyncActionsInterface;

export const AsyncComponent: React.SFC<AsyncProps> = (props: AsyncProps) => {
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