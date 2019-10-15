import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    margin: "50px",
  },
}));

export default function ElementosRegistro() { 
  return(
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
          <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">Registrarse</h5>
            <Paper>
              {primerafila()}
            </Paper>
        </Grid>
      </Grid>        
    </div> 
  );
}

function primerafila(){
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
              <List component="nav" aria-label="contacts">
                <ListItem>
                  <TextField
                      id="standard-dense"
                      label="Nombre"
                      className={clsx(classes.textField, classes.dense)}
                      margin="normal"
                  />
                  <TextField
                      id="standard-dense"
                      label="Apellido"
                      className={clsx(classes.textField, classes.dense)}
                      margin="dense"
                  />
                </ListItem>
                <ListItem>
                  <TextField
                      id="standard-search"
                      label="E-mail"
                      type="search"
                      className={classes.textField}
                      margin="normal"
                  />
                  <TextField
                      id="standard-password-input"
                      label="Password"
                      className={classes.textField}
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                  />
                </ListItem>
            </List>
        </Grid>
      </Grid>
    </div>
  );
}