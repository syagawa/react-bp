import React from "react";

import {
  withStyles,
  WithStyles,
  Theme,
  StyleRules
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = ( theme: Theme ): StyleRules => ({
  button: {
    // margin: theme.spacing.unit,
    width: "100px"
  }
});

interface Props extends WithStyles<typeof styles> {
  onClick: () => void
}

const TodoClearButton = ({ classes, onClick }: Props): JSX.Element => {
  return (
    <Button
      variant="contained"
      color="default"
      className="{classes.button}"
      onClick={onClick}
    >
      全て削除
    </Button>
  )
};

export default withStyles(styles)(TodoClearButton);