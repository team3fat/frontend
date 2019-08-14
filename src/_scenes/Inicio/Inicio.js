import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import '../../_assets/css/font.css';

function ButtonAppBar() {
  return (
    <div>
      <GridList>
        <Grid container direction="row" alignContent="center">
          <table>
            <Grid item>
              <tr>
                <td className="imgpequeña">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="images"
                    class="svg-inline--fa fa-images fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"><path fill="currentColor" d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z"></path>
                  </svg>
                </td>
                <td className="imgpequeña">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="scroll"
                    class="svg-inline--fa fa-scroll fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"><path fill="currentColor" d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112 0-8.84-7.16-16-16-16H288z"></path>
                  </svg>
                </td>
                <td className="imgpequeña">
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="newspaper"
                    class="svg-inline--fa fa-newspaper fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"><path fill="currentColor" d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"></path>
                  </svg>
                </td>
              </tr>
              <ButtonGroup container color="primary" size="medium" variant="contained">
                <Button>Fotos</Button>
                <Button>Historia</Button>
                <Button>Caracteristicas</Button>
              </ButtonGroup>
            </Grid>
          </table>
        </Grid>
      </GridList>
    </div>
  );
}

export default ButtonAppBar;