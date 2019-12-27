import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppStateType } from "../stores/store";
import { hookActions } from "../actions/hookActions";
import { HookComponent } from "../components/hookComponent";

export interface HookActionsInterface {
  increment: (v: number) => Action<number>;
  decrement: (v: number) => Action<number>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<number>>){
  return {
    increment: (v: number) => dispatch(hookActions.increment(v)),
    decrement: (v: number) => dispatch(hookActions.decrement(v))
  };
}

function mapStateToProps(appState: AppStateType){
  return Object.assign({}, appState.asyn);
}

export default connect(mapStateToProps, mapDispatchToProps)(HookComponent);