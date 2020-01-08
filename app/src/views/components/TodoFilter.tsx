import React from "react";
import {
  withStyles,
  WithStyles,
  Theme,
  StyleRules
} from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const styles = (theme: Theme): StyleRules => ({
  checkbox: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit
  }
});

interface Props extends WithStyles<typeof styles> {
  checked: boolean
  label: string
  handleChange: () => void
}

const TodoFilter = ({
  classes,
  checked,
  label,
  handleChange
}: Props): JSX.Element => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          className={classes.checkbox}
          checked={checked}
          onChange={handleChange}
        />
      }
      label={label}
    />
  );
};

export default withStyles(styles)(TodoFilter);
