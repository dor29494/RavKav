import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]:{
        position: "relative"
    }
},
  formControl: {
    margin: theme.spacing(3),
    [theme.breakpoints.up("sm")]:{
        position: "relative",
        right: "108px"
    }
  },
  title:{
    margin: theme.spacing(3),
      fontFamily: "Raleway",
      fontSize: "30px",
  },
  buttonWrapper:{
    [theme.breakpoints.up("sm")]:{
        position: "relative",
        "& .MuiButtonBase-root":{
            position: "relative",
            left: "200px"
        }
    }
  },
}));

export default function CheckboxesGroup({paramsHandler,fetchStations}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    accepts_credit_card: false,
    accepts_cash: false,
    ravkav_services: false,
    manned: false,
    reload_reservation: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    paramsHandler(event)
  };

  const { accepts_credit_card, ravkav_services, accepts_cash,manned,reload_reservation} = state;
  const error = [accepts_credit_card, ravkav_services, accepts_cash,reload_reservation,manned].filter((v) => v).length !== 2;

  return (
    <Grid contianer className={classes.root}>
        <Grid item xs={12}>
            <Typography className={classes.title}variant="h2">Search Service Stations Nearby</Typography>
        </Grid>
        <Grid item xs={12}>
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Filter By...</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={accepts_credit_card} onChange={handleChange} name="accepts_credit_card" />}
            label="Accept Credit Card"
          />
          <FormControlLabel
            control={<Checkbox checked={accepts_cash} onChange={handleChange} name="accepts_cash" />}
            label="Accept Cash"
          />
          <FormControlLabel
            control={<Checkbox checked={ravkav_services} onChange={handleChange} name="ravkav_services" />}
            label="Ravkav Services"
          />
              <FormControlLabel
            control={<Checkbox checked={manned} onChange={handleChange} name="manned" />}
            label="Manned"
          />
              <FormControlLabel
            control={<Checkbox checked={reload_reservation} onChange={handleChange} name="reload_reservation" />}
            label="Reload Reservation"
          />
        </FormGroup>
      </FormControl>
      <Grid item xs={12} className={classes.buttonWrapper}>
        <Button variant="contained" onClick={fetchStations}>Search</Button>
      </Grid>
        </Grid>
      
    </Grid>
  );
}