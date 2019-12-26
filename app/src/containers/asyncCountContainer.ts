import { Action } from "typescript-fsa";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { AppStateType } from "../stores/store";
import { asyncCountActions } from "../actions/asyncCountActions";
import { AsyncCountComponent, AsyncCountProps } from "../components/asyncCountComponent";
import { ThunkDispatch } from "redux-thunk";
import { getRandomNumberAsync } from "../helpers/randomCount";
import { AsyncCountStateInterface } from "../reducers/asyncCountReducer";

export interface AsyncCountActionsInterface {
  increment: (v: number) => Action<number>;
  decrement: (v: number) => Action<number>;
}


function mapDispatchToProps(dispatch: ThunkDispatch<AppStateType, undefined, AsyncCountActionsInterface>){
  return {
    increment: async (v: number) => {
      asyncCountActions.increment.started({counter: v});
      const num: number = await getRandomNumberAsync();

      return dispatch(asyncCountActions.increment.done({
        params: { counter: v},
        result: { counter: num }
      }));
    },
    decrement: async (v: number) => {
      asyncCountActions.increment.started({counter: v});
      const num: number = await getRandomNumberAsync();

      return dispatch(asyncCountActions.decrement.done({
        params: { counter: v},
        result: { counter: num }
      }));
    },

    // decrement: (v: number) => dispatch(asyncCountActions.decrement(v))
  };
}

function mapStateToProps(appState: AppStateType){
  return Object.assign({}, appState.count_a);
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncCountComponent);