import { Todo } from "todo"

const getVisibleTodos = (todos: Todo[], filter: boolean) =>
  filter ? todos.filter(v => !v.completed) : todos

export default {
  getVisibleTodos
}
