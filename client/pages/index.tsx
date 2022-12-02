import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import { lightTheme } from '../styles/themes/lightTheme';
import Menu from '../components/Menu';
import ListView from '../components/ListView';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: lightTheme.palette.background.default,
        height: '100vh',
        display: 'flex',
        overflow: 'hidden'
      }}
    >
      <Grid
        container
        columns={{
          mobile: 12,
          tablet: 16,
          laptop: 16,
          desktop: 16
        }}
        spacing={{
          mobile: 0.5,
          tablet: 0.75,
          laptop: 1.5,
          desktop: 2
        }}
        sx={{
          width: '100%'
        }}
      >
        <Menu />
        <ListView />
      </Grid>
    </Box>
  );
};

export default Home;