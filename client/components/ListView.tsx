import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import styled from '@mui/material/styles/styled';

import { lightTheme } from '../styles/themes/lightTheme';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: lightTheme.palette.background.paper,
  padding: '1rem',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const ListView = () => {
  return (
    <>
      <Grid
        mobile={10}
        tablet={14.5}
        laptop={14.65}
        desktop={15}
        sx={{
          pt: '1.5rem',
          pl: '0.5rem',
          [lightTheme.breakpoints.between('tablet', 'laptop')]: {
            padding: '2rem'
          },
          [lightTheme.breakpoints.up('laptop')]: {
            padding: '3rem'
          },
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        > 
          <InputBase
            sx={{
              backgroundColor: lightTheme.palette.background.paper,
              pl: '0.4rem',
              pt: '0.4rem',
              pb: '0.4rem',
              width: '12rem',
              [lightTheme.breakpoints.up('tablet')]: {
                width: '16rem'
              },
              borderRadius: '12px',
              fontFamily: lightTheme.typography.fontFamily,
            }}
            placeholder='Search items'
            startAdornment={
              <SearchIcon sx={{ color: 'gray', mr: '0.5rem' }}/>
            }
          />
          <Tooltip title='Add item'>
            <Fab
              sx={{ 
                boxShadow: 'none', 
                height: '36px', 
                width: '36px', 
                backgroundColor: lightTheme.palette.background.paper,
                textTransform: 'none',
                display: 'flex',
                gap: '1rem'
              }}
            >
              <AddIcon sx={{ color: 'gray' }} />
            </Fab>
          </Tooltip>
        </Box>
        <Typography variant='h6'>Test header</Typography>
        <Grid
          container
          columns={{
            mobile: 12,
            tablet: 12,
            laptop: 12,
            desktop: 12
          }}
          spacing={{
            mobile: 1,
            tablet: 1.5,
            laptop: 2,
            desktop: 2.5
          }}
        >
          <Grid mobile={6} tablet={4} laptop={3} desktop={3}>
            <Item>
              Test 1
              <AddIcon sx={{ color: 'lightgray' }} />
            </Item>
          </Grid>
          <Grid mobile={6} tablet={4} laptop={3} desktop={3}>
            <Item>
              Test 2
              <AddIcon sx={{ color: 'lightgray' }} />
            </Item>
          </Grid>
          <Grid mobile={6} tablet={4} laptop={3} desktop={3}>
            <Item>
              Avocado toast
              <AddIcon sx={{ color: 'lightgray' }} />
            </Item>
          </Grid>
          <Grid mobile={6} tablet={4} laptop={3} desktop={3}>
            <Item>
              Test 2
              <AddIcon sx={{ color: 'lightgray' }} />
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ListView;