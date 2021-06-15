import React from 'react'
import {Divider, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import StorefrontIcon from '@material-ui/icons/Storefront';

const useStyles = makeStyles(()=>({
container:{
 padding: "10px"   
},
title:{
    marginBottom: "15px",
    marginRight: "3px",
},
}))
const StationDisplay = ({list}) => {
    const classes = useStyles()
    console.log('here',list)
    return (
        <>
        {list.length > 0 && 
        list.map((station,key)=>(
            <React.Fragment key={key}>
                <Grid container className={classes.container}>
                    <Grid item xs={12} container justify="center">
                    <Typography variant="h3" className={classes.title}>
                    {station.service_station.operating_company}
                </Typography>
                <StorefrontIcon/>
                    </Grid>
                    <Grid item xs={12} container justify="center">
                        <Typography variant="body1">
                            {`${station.service_station.city} ${station.service_station.address}`}
                        </Typography>
                        <LocationOnIcon/>
                    </Grid>
                </Grid>
            <Divider/>
            </React.Fragment>
        ))}
        </>
    )
}

export default StationDisplay
