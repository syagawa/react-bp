import React, { FC } from "react"

import { withStyles, WithStyles, StyleRules } from "@material-ui/core/styles"

import { Todo } from "todo"
import SimpleAppBar from "../components/SimpleAppBar"
import TodoForm from "../components/TodoForm"
import TodoFilter from "../components/TodoFilter"
import TodoClearButton from "../components/TodoClearButton"
import TodoList from "../components/TodoList"

const styles = (): StyleRules => ({
  container: {
    textAlign: "center"
  }
})

type Props = WithStyles<typeof styles> & {
  todos: {
    todos: Todo[]
    filter: boolean
  }
  handleSubmit: (text: string) => void
  toggleCompletedCheck: (id: string) => void
  handleClickRemoveButton: (id: string) => void
  handleClickClearButton: () => void
  toggleFilterCheck: () => void
}


const Todos: FC<Props> = ({
  classes,
  handleSubmit,
  toggleCompletedCheck,
  handleClickRemoveButton,
  handleClickClearButton,
  toggleFilterCheck,
  todos: { todos, filter }
}) => {
  return (
    <div className={classes.container}>
      <SimpleAppBar />
      <TodoForm handleSubmit={handleSubmit} />
      <TodoFilter
        label="未完了時に表示"
        checked={filter}
        handleChange={toggleFilterCheck}
      />
      <TodoClearButton onClick={handleClickClearButton} />
      <TodoList
        todos={todos}
        handleToggle={toggleCompletedCheck}
        handleClickRemoveButton={handleClickRemoveButton}
      />
    </div>
  )
}

export default withStyles(styles)(Todos)
