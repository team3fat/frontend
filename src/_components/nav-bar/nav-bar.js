import React from 'react';
import PropTypes from 'prop-types';
//import makeStyles from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};



/*const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
      }    
}));*/

export default function FullWidthTabs() {
  //const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          wrapped={true}
          fullWidth={true}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Inicio" to="/inicio" component={Link} />
          <Tab label="Vision, mision y valores" to="/vision-mision-y-valores" component={Link} />
          <Tab label="Detalles" to="/detalles" component={Link} />
          <Tab label="Servicios" to="/servicios" component={Link} />
          <Tab label="¿Donde Queda?" to="/ubicacion" component={Link} />
          <Tab label="Miranos" to="/servicios" component={Link} />
          <Tab label="Reservaciones" to="/reservas" component={Link} />
        </Tabs>
      </AppBar>
    </div>
  );
}