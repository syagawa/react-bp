import actionCreateFactory from "typescript-fsa";

const actionCreator = actionCreateFactory();

export const accountActions = {
  updateName: actionCreator<string>("ACTIONS_UPDATE_NAME"),
  updateEmail: actionCreator<string>("ACTIONS_UPDATE_EMAIL"),
};
