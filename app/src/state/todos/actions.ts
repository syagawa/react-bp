import { ActionType } from "redux-actions-type";

export const ActionTypes = {
  ADD: "todos/ADD",
  TOGGLE_COMPLETED: "todos/TOGGLE_COMPLETED",
  REMOVE: "todos/REMOVE",
  CLEAR: "todos/CLEAR",
  TOGGLE_FILTER: "todos/TOGGLE_FILTER"
} as const;

const actions = {
  add(text: string){
    return { 
      type: ActionTypes.ADD,
      payload: { text }
    };
  },
  toggleCompleted(id: string){
    return {
      type: ActionTypes.TOGGLE_COMPLETED,
      payload: { id }
    };
  },
  remove(id: string){
    return {
      type: ActionTypes.REMOVE,
      payload: { id }
    }
  },
  clear() {
    return {
      type: ActionTypes.CLEAR
    }
  },
  toggleFilter(){
    return {
      type: ActionTypes.TOGGLE_FILTER
    }
  }
};

export type Actions = ActionType<typeof actions>;
export default actions;