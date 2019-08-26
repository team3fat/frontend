import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../../_assets/css/font.css';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  button: {
    marginBottom: theme.spacing(1),
  },

  input: {
    display: 'none',
  },  
}));
  
export default function ButtonAppBar() {
  const classes = useStyles()
    return (
      <div>
        <Paper>
        <Grid container
          className={classes.button}
          direction="row"
          justify="space-between"
          alignItems="center">



          <Grid item xs={4}>
            <div className="separarbotones">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
              <Grid>
                <Button variant="contained" color="primary">
                  Fotos
                </Button>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="separarbotones">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" /></svg>
              <Grid>
                <Button variant="contained" color="primary">
                  Historia
                </Button>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={4}>
            <div className="separarbotones">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M3 9h4V5H5c-1.1 0-2 .9-2 2v2zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM5 19h2v-4H3v2c0 1.1.9 2 2 2zm3 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h2c1.1 0 2-.9 2-2v-2h-4v4zm0-14v4h4V7c0-1.1-.9-2-2-2h-2z" /></svg>
              <Grid>
                <Button variant="contained" color="primary">
                  Caracteristicas
                </Button>
              </Grid>
            </div>
          </Grid>

        </Grid>
        </Paper>
      </div>
  );
}