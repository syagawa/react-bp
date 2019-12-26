import actionCreateFactory from "typescript-fsa";

const actionCreator = actionCreateFactory();

export const testActions = {
  updateName: actionCreator<string>("ACTIONS_UPDATE_NAME"),
  updateEmail: actionCreator<string>("ACTIONS_UPDATE_EMAIL"),
};
