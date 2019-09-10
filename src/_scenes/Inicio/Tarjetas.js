import React from 'react';
import '../../_assets/css/font.css';
import Typography from '@material-ui/core/Typography';

export default function Tarjetas() {
  return (
    <div>
          {TarjetaFotos()}
          {TarjetaHistoria()}
          {TarjetaDetalles()}
    </div>
  );
}

function TarjetaFotos() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Fotos
            </Typography>
      <Typography gutterBottom variant="subtitle1">
        Esta tarjeta es de fotos
            </Typography>
    </div>
  )
}
function TarjetaHistoria() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Historia
            </Typography>
      <Typography gutterBottom variant="subtitle1">
        dcvrd
            </Typography>
    </div>
  )
}
function TarjetaDetalles() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Detalles
            </Typography>
      <Typography gutterBottom variant="subtitle1">
        dcvrd
            </Typography>
    </div>
  )
}