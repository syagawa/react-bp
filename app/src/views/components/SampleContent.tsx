import React, { FC } from "react"

import {
  withStyles,
  WithStyles,
  Theme,
  StyleRules
} from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

const styles = (theme: Theme): StyleRules => ({
  textField:{
    width: 100
  }
})

// type SampleProps = {
//   sample: Sample
// }

type State = {
  text: string
}

type Props = WithStyles<typeof styles>

const SampleContent: FC<State> = ({
  text
}) => (
  <div>
    <TextField
      id="standard-name"
      label="Sample text"
      className="textField"
      value={text}
      // onChange={this.handleChange}
      margin="normal"
    />
  </div>
)

export default withStyles(styles)(SampleContent)
