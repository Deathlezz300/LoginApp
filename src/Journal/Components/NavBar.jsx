import React from 'react'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { OnLogOutFireBase } from '../../store/auth/thunks'

export const NavBar = ({drawerWidth}) => {

  const dispatch=useDispatch();
  const onLogOut=()=>{
    dispatch(OnLogOutFireBase());
    // navegacion('/auth/login');
  }

  return (
    <AppBar position='fixed' sx={{
            width:{sm:`calc(100% - ${drawerWidth}px)`},
            ml:{sm:`${drawerWidth}px`}
        }}>
        <Toolbar>
            <IconButton> 
                <MenuOutlined sx={{color:'white'}}/>
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant='h6' noWrap component='div'>JournalApp</Typography>
                <IconButton onClick={onLogOut} color='error'>
                    <LogoutOutlined/>
                </IconButton>
            </Grid>

        </Toolbar>
    </AppBar>
  )
}
