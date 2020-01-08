import { connect } from "react-redux";

import { AppState } from "../../state/store";
import { operations, selectors } from "../../state/todos";

import Component from "../pages/Todos";

const mapStateToProps = (state: AppState) => ({
  todos: {
    ...state.todos,
    todos: selectors.getVisibleTodos(state.todos.todos, state.todos.filter)
  }
});

const mapDispatchToProps = {
  handleSubmit: operations.add,
  toggleCompletedCheck: operations.toggleCompleted,
  handleClickRemoveButton: operations.remove,
  handleClickClearButton: operations.clear,
  toggleFilterCheck: operations.toggleFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

