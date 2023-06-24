import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';



const PersistentDrawerLeft = ({isOpen}) => {
    const theme = useTheme();


    return (
        <Drawer
            sx={{
                backgroundColor:"#423dce",
                width: isOpen ? 240 : 0,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: isOpen ? 240 : 0,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={isOpen}
        >

            <List sx={{
                backgroundColor:"#423dce",
                height:"100vh"
            }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                  <HomeOutlinedIcon sx={{color:"white"}}/>
                            </ListItemIcon>
                            <ListItemText primary={"Dashboard"} sx={{
                                color:"white",
                            }}/>
                        </ListItemButton>
                    </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MenuIcon sx={{color:"white"}}/>
                        </ListItemIcon>
                        <ListItemText primary={"Products"} sx={{
                            color:"white",
                        }}/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MenuIcon sx={{color:"white"}}/>
                        </ListItemIcon>
                        <ListItemText primary={"Orders"} sx={{
                            color:"white",
                        }}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupOutlinedIcon sx={{color:"white"}}/>
                        </ListItemIcon>
                        <ListItemText primary={"Users"} sx={{
                            color:"white",
                        }}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <GroupOutlinedIcon sx={{color:"white"}}/>
                        </ListItemIcon>
                        <ListItemText primary={"Customers"} sx={{
                            color:"white",
                        }}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>


    );
};

export default PersistentDrawerLeft;
