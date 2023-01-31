import React from 'react'
import { Box, Toolbar } from '@mui/material'
import { NavBar } from '../Components/NavBar';
import { SideBar } from '../Components/SideBar';

const drawerWidth=240;


export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>

    <NavBar drawerWidth={drawerWidth}/>
    <SideBar drawerWidth={drawerWidth}/>

    <Box component='main' sx={{flexGrow:1,p:3}}>
        <Toolbar/>
        {children}
    </Box>
    </Box>
  )
}
