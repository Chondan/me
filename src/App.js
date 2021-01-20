import React from 'react';
import './App.css';

// Libraries
import classnames from 'classnames';

// Mateiral UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Project Data
import projects from './datas/projects.json';

// Components
import { Profile, FlipCard, ProjectGallery } from './components';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 4,
    padding: 10
  },
  shortBox: {
    height: '45vh'
  },
  longBox: {
    height: '90vh',
    width: '100%'
  }
}));

const App = () => {

  const classes = useStyles();

  return (
    <div className='app'>

      <Grid container>

        <Grid container item xs={12} sm={5}>
          <Grid item xs={12} sm={12}>
            <Paper className={classnames(classes.paper, classes.shortBox)}>
              <Profile />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12}>
            <Paper className={classnames(classes.paper, classes.shortBox)}>
              <FlipCard />
            </Paper>
          </Grid>
        </Grid>

        <Grid container item xs={12} sm={7}>
          <Grid item xs={12} sm={12}>
            <Paper className={classnames(classes.paper, classes.longBox)}>
              <ProjectGallery />
            </Paper>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
