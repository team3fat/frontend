import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../../_assets/css/font.css';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    padding: theme.spacing(0),
    textAlign: 'center',
    minHeight: '35px',
    minWidth: "280px",
    marginBottom: "25px",
    marginTop: "10px",
    background: '#3949ab',
  },  
}));

export default function ButtonAppBar() {
  const classes = useStyles()
  return (
      <div>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center">
                <Paper className={classes.title} square={true}>
                  <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6" >Historia</h5>
                </Paper>
          </Grid>
      </div>
  );
}