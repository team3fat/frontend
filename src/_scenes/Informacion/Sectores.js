import '../../_assets/css/style.css';
//import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';


const messageSalon = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    marginBottom: "35px",
  },
  title: {
    padding: theme.spacing(0),
    textAlign: 'center',
    minHeight: '35px',
  },  
  img: {
    display: 'block',
    maxWidth: '600px',
    maxHeight: '400px',
  },
  card: {
    minWidth: "1210px",
    minHeight: "280px",
  }

}));

export default function informacion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.title} square={true}>
          <Grid container
                justify="flex-end"
                alignItems="flex-end">
            <h5 className="colortext2 MuiTypography-root makeStyles-title-3 MuiTypography-h6">Salon De Uso Multiple</h5>
            </Grid>
          </Paper>
        </Grid>
      <Paper className={classes.paper} square={true}>
        <Grid className={classes.card}container
                direction="row"
                justify="center"
                alignItems="center">
            <Grid item xs={6}>
            <img className={classes.img} alt={"complex"} src={require("../../_assets/Img/Salon.jpg")}/>
            </Grid>
            <Grid item xs={6}>
            <Typography className="colortext2">{messageSalon}</Typography> 
            </Grid>
      </Grid>
      </Paper>
    </div>
  );
}