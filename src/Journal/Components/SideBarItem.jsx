import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItemButton, ListItemIcon, ListItemText,ListItem } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/Journal/JournalSlice'

export const SideBarItem = ({id,title,body,date,imageURLS=[]}) => {

    const dispatch=useDispatch();

    const newTitle=useMemo(()=>{
        return title.length>17 ? title.substring(0,17)+'...' : title;
    },[title]);

    const setActive=()=>{
        dispatch(setActiveNote({id,title,body,date,imageURLS}));
    }

  return (
    <ListItem onClick={setActive} key={id} disablePadding>
        <ListItemButton>
            <ListItemIcon>
              <TurnedInNot/>
                </ListItemIcon>
                    <Grid container>
                        <ListItemText primary={newTitle}/>
                            <ListItemText secondary={body}/>
                    </Grid>
         </ListItemButton>
    </ListItem>
  )
}
