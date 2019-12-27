import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppStateType } from "../stores/store";
import { asyncActions, RootState, RootActions } from "../actions/asyncActions";
import { AsyncComponent } from "../components/asyncComponent";
import { asyncIncrement } from "../actions/asyncActions";
import { ThunkDispatch } from "redux-thunk";


export interface AsyncActionsInterface {
  increment: (v: number) => Action<number>;
  decrement: (v: number) => Action<number>;
}

function mapDispatchToProps(dispatch: ThunkDispatch<RootState, undefined, RootActions>){
  return {
    increment: (v: number) => dispatch(asyncIncrement({value: v})),
    decrement: (v: number) => dispatch(asyncIncrement({value: v})),
  };
}


const mapStateToProps = (state: RootState): StateProps => ({
  disabled: false
});

type OutterProps = {
  label: {
      inc: string;
      dec: string;
  };
};

type StateProps = {
  disabled: boolean;
};

type DispatchProps = {
  increment: () => void;
  decrement: () => void;
};

export default connect<StateProps, DispatchProps, OutterProps, RootState>(
  mapStateToProps,
  mapDispatchToProps)(AsyncComponent);