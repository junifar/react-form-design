import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Content = () => {
  const classes = useStyles();
  return(
    <main>
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
              Contoh Layout
            </Typography>
            <div className={classes.root}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
              </Grid>
            </div>
        </Container>
    </main>
  );
};

export default Content;