import { connect } from "react-redux"

import { AppState } from "../../state/store"
import { operations, selectors } from "../../state/sample"

import Component from "../pages/Sample"

const mapStateToProps = (state: AppState) => ({
  // todos: {
  //   ...state.todos,
  //   todos: selectors.getVisibleTodos(state.todos.todos, state.todos.filter)
  // }
  sample: {
    ...state,
    // text: state.text
    // sample: selectors.getSample(state.sample.sample)
  }
})

const mapDispatchToProps = {
  // handleSubmit: operations.addSync,
  // handleSubmitAsync: operations.addAsync,
  // toggleCompletedCheck: operations.toggleCompleted,
  // handleClickRemoveButton: operations.remove,
  // handleClickClearButton: operations.clear,
  // toggleFilterCheck: operations.toggleFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
