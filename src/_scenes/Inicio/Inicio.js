import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';

function ButtonAppBar() {
  return (
      <div>
        <GridList>
          <Grid container alignContent="center" direction="row">
            <Grid item>
              <ButtonGroup container color="primary" size="medium" variant="contained">
                <Button>Inicio</Button>
                <Button>Informacion</Button>
                <Button>Reservas</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </GridList>
      </div>
  );
}

export default ButtonAppBar;