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
  handleSubmitAsync: (text: string) => void
}

type State = {
  text: string
}

class TodoFormAsync extends Component<Props, State> {
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

  private handleSubmitAsync = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLElement>
  ) => {
    e.preventDefault()
    const { handleSubmitAsync } = this.props
    handleSubmitAsync(this.state.text)
    this.setState({text: ""})
  }

  public render(){
    const {
      classes: { textField, button }
    } = this.props
    return (
      <form onSubmit={this.handleSubmitAsync} noValidate autoComplete="off">
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
          onClick={this.handleSubmitAsync}
        >
          追加(非同期)
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(TodoFormAsync)
