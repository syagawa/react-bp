import actionCreateFactory from "typescript-fsa";

const actionCreator = actionCreateFactory();

export const countActions = {
  increment: actionCreator<number>("ACTIONS_INCREMENT"),
  decrement: actionCreator<number>("ACTIONS_DECLEMENT"),
};
