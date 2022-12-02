import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AssessmentIcon from '@mui/icons-material/AssessmentOutlined';
import HistoryIcon from '@mui/icons-material/History';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from '@mui/material/styles/styled';

import { lightTheme } from '../styles/themes/lightTheme';

const Logo = styled('img')(({ theme }) => ({
  height: 43,
  width: 43,
  [theme.breakpoints.between('tablet', 'laptop')]: {
    height: 50,
    width: 50,
  },
  [theme.breakpoints.up('laptop')]: {
    height: 55,
    width: 55,
  }
}));

const CartBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 5,
    top: 5
  }
}));

const Menu = () => {

  const [selected, setSelected] = useState<string>('items');

  const handleSelect = (select: string) => {
    if (select === selected) return;

    setSelected(select);
  }

  return (
    <>
      <Grid
        mobile={2}
        tablet={1.5}
        laptop={1.35}
        desktop={1}
        sx={{
          backgroundColor: lightTheme.palette.background.paper,
          margin: 0,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          pt: '1rem',
          pb: '2rem'
        }}
      >
        <Logo 
          src='/logo.svg' 
          alt='logo'
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3.5rem',
            width: '100%'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}
            onClick={() => handleSelect('items')}
          >
            {
              selected === 'items' && 
                <Box 
                  sx={{
                    width: 5,
                    height: 40,
                    position: 'absolute',
                    left: 0,
                    backgroundColor: '#f9a109',
                    borderTopRightRadius: '8px',
                    borderBottomRightRadius: '8px'
                  }}
                />
            }
            <Tooltip title='Items' placement='right-start'>
              <FormatListBulletedIcon
                sx={{ 
                  height: 32, 
                  width: 32, 
                  color: lightTheme.palette.background.iconBg,
                  [lightTheme.breakpoints.between('tablet', 'laptop')]: {
                    height: 38,
                    width: 38,
                  },
                  [lightTheme.breakpoints.up('laptop')]: {
                    height: 43,
                    width: 43,
                  }
                }} 
              />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}
            onClick={() => handleSelect('history')}
          >
            {
              selected === 'history' && 
                <Box 
                  sx={{
                    width: 5,
                    height: 40,
                    position: 'absolute',
                    left: 0,
                    backgroundColor: '#f9a109',
                    borderTopRightRadius: '8px',
                    borderBottomRightRadius: '8px'
                  }}
                />
            }
            <Tooltip title='History' placement='right-start'>  
              <HistoryIcon 
                sx={{ 
                  height: 32, 
                  width: 32, 
                  color: lightTheme.palette.background.iconBg,
                  [lightTheme.breakpoints.between('tablet', 'laptop')]: {
                    height: 38,
                    width: 38,
                  },
                  [lightTheme.breakpoints.up('laptop')]: {
                    height: 43,
                    width: 43,
                  }
                }} 
              />
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%'
            }}
            onClick={() => handleSelect('stats')}
          >
            {
              selected === 'stats' && 
                <Box 
                  sx={{
                    width: 5,
                    height: 40,
                    position: 'absolute',
                    left: 0,
                    backgroundColor: '#f9a109',
                    borderTopRightRadius: '8px',
                    borderBottomRightRadius: '8px'
                  }}
                />
            }
            <Tooltip title='Stats' placement='right-start'>
              <AssessmentIcon 
                sx={{ 
                  height: 32, 
                  width: 32, 
                  color: lightTheme.palette.background.iconBg,
                  [lightTheme.breakpoints.between('tablet', 'laptop')]: {
                    height: 38,
                    width: 38,
                  },
                  [lightTheme.breakpoints.up('laptop')]: {
                    height: 43,
                    width: 43,
                  }
                }} 
              />
            </Tooltip>
          </Box>
        </Box>
        <Tooltip title='Shopping Lists' placement='right-start'>
          <CartBadge badgeContent={3} color='secondary'>
            <Box
              sx={{
                borderRadius: '100px',
                height: 43, 
                width: 43,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f9a109',
                [lightTheme.breakpoints.between('tablet', 'laptop')]: {
                  height: 50,
                  width: 50,
                },
                [lightTheme.breakpoints.up('laptop')]: {
                  height: 55,
                  width: 55,
                }
              }}
            >
              <ShoppingCartIcon 
                sx={{ 
                  height: 24, 
                  width: 24,
                  color: lightTheme.palette.background.paper,
                  [lightTheme.breakpoints.between('tablet', 'laptop')]: {
                    height: 30,
                    width: 30,
                  },
                  [lightTheme.breakpoints.up('laptop')]: {
                    height: 36,
                    width: 36,
                  }
                }} 
              />
            </Box>
          </CartBadge>
        </Tooltip>
      </Grid>
    </>
  );
};

export default Menu;