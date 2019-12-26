import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppStateType } from "../stores/store";
import { accountActions } from "../actions/accountActions";
import { AccountComponent } from "../components/accountComponent";

export interface AccountActionsInterface {
  updateName: (v: string) => Action<string>;
  updateEmail: (v: string) => Action<string>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>){
  return {
    updateName: (v: string) => dispatch(accountActions.updateName(v)),
    updateEmail: (v: string) => dispatch(accountActions.updateEmail(v))
  };
}

function mapStateToProps(appState: AppStateType){
  return Object.assign({}, appState.test);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountComponent);