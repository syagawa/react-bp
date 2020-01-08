import React, { Component, ChangeEvent, FormEvent, MouseEvent } from "react"

import {
  withStyles,
  WithStyles,
  Theme,
  StyleRules
} from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const styles = (theme: Theme): StyleRules => ({
  button: {
    verticalAlign: "bottom",
    // margin: theme.spacing.unit,
    width: "100px"
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    width: 300
  }
})

type Props = WithStyles<typeof styles> & {
  handleSubmit: (text: string) => void
}

type State = {
  text: string
}

class TodoForm extends Component<Props, State> {
  public constructor(props: Props){
    super(props)
    this.state = {
      text: ""
    }
  }

  private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      text: e.target.value
    })
  }

  private handleSubmit = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLElement>
  ) => {
    e.preventDefault()
    const { handleSubmit } = this.props
    handleSubmit(this.state.text)
    this.setState({text: ""})
  }

  public render(){
    const {
      classes: { textField, button }
    } = this.props
    return (
      <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Todo text"
          className={textField}
          value={this.state.text}
          onChange={this.handleChange}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          className={button}
          onClick={this.handleSubmit}
        >
          追加
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(TodoForm)
