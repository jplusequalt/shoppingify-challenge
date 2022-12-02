import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
  justifyContent: 'space-around'
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
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <SearchIcon sx={{ color: 'lightgray' }} />
          <TextField
            sx={{
              [lightTheme.breakpoints.down('tablet')]: {
                width: '85%'
              },
              '& label.Mui-focused': {
                color: lightTheme.palette.background.iconBg,
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: lightTheme.palette.background.iconBg,
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'transparent',
                },
                '&.Mui-focused fieldset': {
                  borderColor: lightTheme.palette.background.iconBg,
                  borderRadius: '12px'
                },
              },
              backgroundColor: lightTheme.palette.background.paper,
              borderRadius: '12px',
              color: lightTheme.palette.background.iconBg
            }}
            color='primary'
            label='Search for items'
            size='small'
          />
        </Box>
        <Typography variant='h5'>Test header</Typography>
        <Grid
          container
          spacing={1}
        >
          <Grid mobile={6}>
            <Item>
              Test 1
              <AddIcon sx={{ color: 'lightgray' }} />
            </Item>
          </Grid>
          <Grid mobile={6}>
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