import actionCreateFactory from "typescript-fsa";
// import { ThunkAction } from "redux-thunk";
// import { Dispatch, Action } from "redux";
// import { getRandomNumberAsync } from "../helpers/randomCount";


const actionCreator = actionCreateFactory();



export const asyncCountActions = {
  // increment: actionCreator<number>("ACTIONS_ASYNC_INCREMENT"),
  // decrement: actionCreator<number>("ACTIONS_ASYNC_DECLEMENT"),

  // increment: (payload: object) => (
  //   dispatch: Dispatch<Action<object>>
  // ) => {
  //   getRandomNumberAsync()
  //     .then((num) => {
  //       dispatch({
  //         type: "ACTIONS_ASYNC_INCREMENT",
  //         payload: num
  //       });
  //     });
  // },
  // decrement: (payload: any) => (
  //   dispatch: Dispatch<Action>
  // ) => {
  //   getRandomNumberAsync()
  //     .then((num) => {
  //       dispatch({
  //         type: "ACTIONS_ASYNC_DECREMENT",
  //         payload: num
  //       });
  //     });
  // },

  increment: actionCreator
    .async<{ counter: number },
           { counter: number },
           { counter: number}
          >("ACTIONS_ASYNC_INCLEMENT"),
  decrement: actionCreator
          .async<{ counter: number },
                 { counter: number },
                 { counter: number}
                >("ACTIONS_ASYNC_DECLEMENT"),
};


