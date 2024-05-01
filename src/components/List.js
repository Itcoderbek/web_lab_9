import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import { Typography, Avatar } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
      marginTop: 100,
      flexGrow: 1,
  },
  paper: {
      height: 280, // increased height to accommodate new fields
      width: 340,
      backgroundColor: '#ebebeb',
      padding: theme.spacing(2) // Add some padding around the contents
  },
  avatarImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
  },
}));

export default function List({ userAvatar, firstName, lastName, location, email }) {
    const classes = useStyles();
  
    return (
      <Grid container spacing={2}>
        <Grid item className={classes.root} xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid key={1} item>
              <Paper className={classes.paper} elevation={2}>
                <Grid container justify="center">
                  <Avatar
                    alt="User"
                    className={classes.avatarImage}
                    src={userAvatar}
                  />
                  <Typography variant="p">
                    Name: {firstName} {lastName}
                    <Typography variant="body2">{location}</Typography>
                    <Typography variant="body2">{email}</Typography>
                  </Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );

  }

