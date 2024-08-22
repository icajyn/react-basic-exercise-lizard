import './App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import ButtonAppBar from './AppBar.js'; 
import BasicBreadcrumbs from './Breadcrumbs.js';
import MediaCard from './Card.js';

function App() {
  return (
    <div>
      <Grid>
      <Grid item xs={6} md={8}>
        <ButtonAppBar/>
        <div className='crumb'><BasicBreadcrumbs/></div> 
          <div className='card-row'>
          <MediaCard/>
          <MediaCard/>
          <MediaCard/>
          <MediaCard/>
          </div>
      </Grid>
    </Grid>
    </div>
  );
}

export default App;