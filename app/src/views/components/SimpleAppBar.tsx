import React, { FC } from "react";
import { WithStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGlow: 1
  }
};

type Props = WithStyles<typeof styles>

const SimpleAppBar: FC<Props> = ({ classes: { root } }) => {
  return (
    <div className={root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Todos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(SimpleAppBar);

