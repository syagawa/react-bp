import * as React from "react";
import { CountStateInterface } from "../reducers/countReducer";
import { CountActionsInterface } from "../containers/countContainer";

interface OwnProps {}

type CountProps = OwnProps & CountStateInterface & CountActionsInterface;

export const CountComponent: React.SFC<CountProps> = (props: CountProps) => {
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