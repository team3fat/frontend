import '../../_assets/Img/Map.jpg';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} square={true}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <img className={classes.img} alt={"complex"} src={require("../../_assets/Img/Map.jpg")}/>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction={"column"} spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant={"subtitle1"}>
                  Complejo Diquecito
                </Typography>
                <Typography variant={"body2"} gutterBottom>
                <a href="https://www.google.com/maps/place/Nuevo+Complejo+Diquecito+(campamento+evangelico)/@-31.3589483,-64.3826017,149a,35y,181.59h,44.73t/data=!3m1!1e3!4m5!3m4!1s0x9432a2891aac0737:0x55e26374f614987c!8m2!3d-31.3606491!4d-64.3822378?hl=es"target="_blank">Google Maps</a>
                </Typography>
                <Typography variant={"body2"} color={"textSecondary"}>
                <a href="https://www.google.com/maps/dir//-31.3607839,-64.383071/@-31.3591681,-64.3814152,1414m/data=!3m1!1e3!4m2!4m1!3e2?hl=es"target="_blank">Como Llegar</a>
                </Typography>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}