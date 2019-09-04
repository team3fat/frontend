import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../../_assets/css/font.css';
import Typography from '@material-ui/core/Typography';

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
        <Grid container
          className={classes.button}
          >
          {renderFotos()}
          {renderHistoria()}
          {renderDetalles()}
        </Grid>
    </div>
  );
}

function renderFotos() {
  return (
    <Grid item xs={4}>
      <div className="separarbotones">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
        <Grid>
        <Button variant="contained" size="large" color="primary">
            Fotos
          </Button>
        </Grid>
        <Grid spacing={2}>
          {renderDescFotos()}
        </Grid>
      </div>
    </Grid>
  );
}

function renderDescFotos(){
  return (
    <Grid>
      <Typography gutterBottom variant="subtitle1">
          dcvrd
      </Typography>
    </Grid>
  )
}

function renderHistoria() {
  return (
    <Grid item xs={4}>
      <div className="separarbotones">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" /></svg>
        <Grid>
          <Button variant="contained" size="large" color="primary">
            Historia
        </Button>
        </Grid>
        <Grid spacing={2}>
          {renderDescHistoria()}
        </Grid>
      </div>
    </Grid>
  );
}

function renderDescHistoria(){
  return (
    <Grid>
      <Typography gutterBottom variant="subtitle1">
          dcvrd
      </Typography>
    </Grid>
  )
}

function renderDetalles() {
  return (
    <Grid item xs={4}>
      <div className="separarbotones">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M3 9h4V5H5c-1.1 0-2 .9-2 2v2zm0 5h4v-4H3v4zm5 0h4v-4H8v4zm5 0h4v-4h-4v4zM8 9h4V5H8v4zm5-4v4h4V5h-4zm5 9h4v-4h-4v4zM5 19h2v-4H3v2c0 1.1.9 2 2 2zm3 0h4v-4H8v4zm5 0h4v-4h-4v4zm5 0h2c1.1 0 2-.9 2-2v-2h-4v4zm0-14v4h4V7c0-1.1-.9-2-2-2h-2z" /></svg>
        <Grid>
          <Button variant="contained" size="large" color="primary">
            Detalles
          </Button>
        </Grid>
        <Grid spacing={2}>
          {renderDescDetalles()}
        </Grid>
      </div>
    </Grid>
  );
}

function renderDescDetalles(){
  return (
    <Grid>
      <Typography gutterBottom variant="subtitle1">
          dcvrd
      </Typography>
    </Grid>
  )
}