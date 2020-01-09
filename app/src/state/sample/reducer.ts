import { Reducer } from "redux"
import { Sample } from "sample"
import { Actions, ActionTypes } from "./actions"

type State = {
  text: string
}

const initialState: State = {
  text: "this is sample text",
}

const reducer: Reducer<State, Actions> = (state = initialState, action ) => {
  return state
}

export default reducer
