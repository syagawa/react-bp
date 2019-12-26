import * as React from "react";
import { CountState } from "../reducers/countReducer";
import { CountActions } from "../containers/countContainer";

interface OwnProps {}

type CountProps = OwnProps & CountState & CountActions;

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