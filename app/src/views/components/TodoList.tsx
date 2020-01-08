import React, { FC } from "react";

import {
  withStyles,
  WithStyles,
  Theme,
  StyleRules
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

import { Todo } from "todo"

type TodoProps = {
  todo: Todo
  handleToggle: (id: string) => void
  handleClickRemoveButton: (id: string) => void
}

const TodoItem: FC<TodoProps> = ({
  todo: { id, text, completed },
  handleToggle,
  handleClickRemoveButton
}) => (
  <ListItem
    key={id}
    dense
    button
    onClick={ () => { handleToggle(id); } }
  >
    <Checkbox checked={completed} />
    <ListItemText primary={text} />
    <ListItemSecondaryAction>
      <IconButton
        aria-label="Delete"
        onClick={ () => { handleClickRemoveButton(id); } }>
          <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

const styles = (theme: Theme): StyleRules => ({
  list: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    maxWidth: "600px",
    width: "100%",
    display: "inline-block"
  }
});

type TodoListProps = WithStyles<typeof styles> & {
  todos: Todo[]
  handleToggle: (id: string) => void
  handleClickRemoveButton: (id: string) => void
}

const TodoList: FC<TodoListProps> = ({
  classes,
  todos,
  handleToggle,
  handleClickRemoveButton
}) => (
  <div>
    <List className={classes.list}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggle={handleToggle}
          handleClickRemoveButton={handleClickRemoveButton}
        />
      ))}
    </List>
  </div>
);

export default withStyles(styles)(TodoList);

