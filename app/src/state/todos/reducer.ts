import { Reducer } from "redux";
import { Todo } from "todo";
import { Actions, ActionTypes } from "./actions";
import cuid from "cuid";

type State = {
  todos: Todo[]
  filter: boolean
}

const initialState: State = {
  todos: [],
  filter: false
};

const reducer: Reducer<State, Actions> = (state = initialState, action ) => {
  switch( action.type ) {
    case ActionTypes.ADD: {
      return {
        ...state,
        todos: state.todos.concat([
          {
            id: cuid(),
            text: action.payload.text,
            completed: false
          }
        ])
      };
    }
    case ActionTypes.TOGGLE_COMPLETED: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if(todo.id !== action.payload.id){
            return todo
          }
          return {
            id: todo.id,
            text: todo.text,
            completed: !todo.completed
          }
        })
      };
    }
    case ActionTypes.REMOVE: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    }
    case ActionTypes.CLEAR: {
      return {
        ...state,
        todos: []
      };
    }
    case ActionTypes.TOGGLE_FILTER: {
      return {
        ...state,
        filter: !state.filter
      }
    }
    default: {
      return state;
    }

  }
};

export default reducer;