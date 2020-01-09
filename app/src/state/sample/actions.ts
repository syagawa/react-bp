import { ActionType } from "redux-actions-type"

export const ActionTypes = {
  // ADD: "todos/ADD",
} as const

const actions = {
  // add(text: string){
  //   return { 
  //     type: ActionTypes.ADD,
  //     payload: { text }
  //   }
  // },
}

export type Actions = ActionType<typeof actions>
export default actions
