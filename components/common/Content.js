import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
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
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Card>
                    <CardHeader
                    avatar={
                      <Avatar alt="Junifar Hidayat" />
                    }
                    title="Junifar Hidayat"
                    subheader="panca motor, blok d 39">
                    </CardHeader>
                    <CardContent>
                      <Typography>
                        Contoh
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper className={classes.paper}>xs=6</Paper>
                  </Grid>
              </Grid>
            </div>
        </Container>
    </main>
  );
};

export default Content;