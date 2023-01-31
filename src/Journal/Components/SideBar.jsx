import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({drawerWidth}) => {
  return (
    <Box component='nav' sx={{width:{sm:drawerWidth},flexShrink:{sm:0}}}>
        <Drawer variant='permanent' open sx={{
            display:{xs:'block'},
            '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}
        }}>

        <Toolbar>
            <Typography variant='h6' noWrap component='div'>Alejandro Toledo</Typography>
        </Toolbar>
        <Divider/>
        
        <List>
            {
                ['Enero','Febero','Marzo','Abril'].map(mes=>{
                    return <ListItem key={mes} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={mes}/>
                                <ListItemText secondary={'Texto de ejemplo 123456 sisas'}/>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                })
            }
        </List>

        </Drawer>
    </Box>
  )
}
