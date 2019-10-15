import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';

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
  },
}));

const ranges = [
  {
    value: 'F',
    label: 'Femenino',
  },
  {
    value: 'M',
    label: 'Masculino',
  },
];

export default function ElementosRegistro() { 
  return(
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
              {formulario()}
        </Grid>
      </Grid>        
    </div> 
  );
}
function formulario() {
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
          <h5 className="colortext MuiTypography-root makeStyles-title-3 MuiTypography-h6" >Registrate</h5>
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
                <Grid item xs>
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
                </Grid>
                <Grid item xs>
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
                 </Grid>
                 <Grid item xs>
                 <ListItem>
                  <TextField
                      id="standard-dense"
                      label="Telefono celular"
                      className={clsx(classes.textField, classes.dense)}
                      margin="normal"
                  />
      <TextField
        select
        label="Sexo"
        className={clsx(classes.margin, classes.textField)}
        value={values.weightRange}
        onChange={handleChange('weightRange')}
      >
        {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
                </ListItem>
                 </Grid> 
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                  <Button variant="contained" color="primary" className={classes.button}>
                    Crear cuenta
                  </Button>
                </Grid>
              </form>
        </Paper>
    </div>
  );
}