import React from 'react';
import './App.css';

// Libraries
import classnames from 'classnames';

// Mateiral UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Project Data
// import projects from './datas/projects.json';

// Components
import { Profile, FlipCard, ProjectGallery } from './components';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 4,
    boxShadow: '0 0 5px 2px rgba(0, 0, 0, var(--box-shadow-opacity, 0.1))',
  },
  shortBox: {
    height: '40vh'
  },
  longBox: {
    height: '96vh',
  },
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
              <FlipCard />
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
