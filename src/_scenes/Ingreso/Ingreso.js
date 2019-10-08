import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';


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
  button: {
    margin: theme.spacing(1),
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  title: {
    padding: theme.spacing(0),
    textAlign: 'center',
    minHeight: '35px',
    minWidth: "280px",
    marginTop: "35px",
    background: '#3949ab',
  },  
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    margin: "50px",
    minHeight: "200px",
    minWidth: "400px",
  },
  root: {
    height: "calc(100vh -64px)"
  }
}));

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    age: '',
    multiline: 'Controlled',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <Grid container
                direction="row"
                justify="center"
                alignItems="center">
        <Paper className={classes.title} square={true}>
          <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6" >Iniciar sesion</h5>
         </Paper>
        </Grid>
        <Paper className={classes.paper} square={true}>
              <form className={classes.container} noValidate autoComplete="off">
                <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                  >
                <Grid item xs={5}>
                  <TextField
                      id="standard-name"
                      label="Usuario"
                      className={classes.textField}
                      value={values.name}
                      onChange={handleChange('name')}
                      margin="normal"
                  />
                </Grid>
                <Grid item xs={5}>
                   <TextField
                      id="standard-password-input"
                      label="Contraseña"
                      className={classes.textField}
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                  />
                 </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                  <Button variant="contained" color="primary" className={classes.button}>
                    Registrarse
                  </Button>
                  <Button variant="contained" color="primary" className={classes.button}>
                    Inicir Sesión
                  </Button>
                </Grid>
              </form>
        </Paper>
    </div>
  );
}