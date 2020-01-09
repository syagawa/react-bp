import React, { FC } from "react"

import { withStyles, WithStyles, StyleRules } from "@material-ui/core/styles"

import SimpleAppBar from "../components/SimpleAppBar"
import SampleContent from "../components/SampleContent";

const styles = (): StyleRules => ({
  container: {
    textAlign: "center"
  }
})

type Props = WithStyles<typeof styles> & {
  text: string
}

const Sample: FC<Props> = ({
  classes,
  text
}) => {
  return (
    <div className={classes.container}>
      <SimpleAppBar />
      <SampleContent text={text} />
    </div>
  )
}
export default withStyles(styles)(Sample)
