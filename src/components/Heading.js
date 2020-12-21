import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme : Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(-1),
      marginLeft: theme.spacing(4)
    },
    menuB: {
      marginLeft: theme.spacing(150),
    }
  })
);

export function Heading() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ImageSearchIcon fontSize="large" />
          </IconButton>
          <Typography variant="h5" color="inherit">
            Photoss
          </Typography>
          <Typography variant="h10" className={classes.menuB} color="inherit">
            <a href="https://priteshakhaja.netlify.app" target="_blank"><FaceIcon fontSize="large" color="action"/></a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

