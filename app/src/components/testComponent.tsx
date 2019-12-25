import * as React from "react";
import { TestState } from "../reducers/testReducer";
import { TestActions } from "../containers/testContainer";

interface OwnProps {}

type TestProps = OwnProps & TestState & TestActions;

export const TestComponent: React.SFC<TestProps> = (props: TestProps) => {
  return (
    <div>
      <div className="field">
        <input
          type="text"
          placeholder="name"
          value={props.name}
          onChange={(e) => props.updateName(e.target.value)}
        />
      </div>
      <div className="field">
        <input
          type="email"
          placeholder="email"
          value={props.email}
          onChange={(e) => props.updateEmail(e.target.value)}
        />
      </div>

      <div>
        <p>
          name: {props.name}
        </p>
        <p>
          email: {props.email}
        </p>
      </div>


    </div>
  );
};