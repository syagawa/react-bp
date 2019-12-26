import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppState } from "../stores/store";
import { countActions } from "../actions/countActions";
import { CountComponent } from "../components/countComponent";

export interface CountActions {
  increment: (v: number) => Action<number>;
  decrement: (v: number) => Action<number>;
}

function mapDispatchToProps(dispatch: Dispatch<Action<number>>){
  return {
    increment: (v: number) => dispatch(countActions.increment(v)),
    decrement: (v: number) => dispatch(countActions.decrement(v))
  };
}

function mapStateToProps(appState: AppState){
  return Object.assign({}, appState.count);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountComponent);