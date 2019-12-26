import * as React from "react";
import { AccountStateInterface } from "../reducers/accountReducer";
import { AccountActionsInterface } from "../containers/accountContainer";

interface OwnProps {}

type AccountProps = OwnProps & AccountStateInterface & AccountActionsInterface;

export const AccountComponent: React.SFC<AccountProps> = (props: AccountProps) => {
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