import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {Link, useForm} from '@inertiajs/react';
import {useGlobalContext} from "@/Context/Context.jsx";

const PersistentDrawerLeft = () => {
    const {isOpenSidebar, setOpenSidebar} = useGlobalContext();
    const { post } = useForm();

    return (
        <Drawer
            sx={{
                backgroundColor: '#a9a9a9',
                width: isOpenSidebar ? 240 : 0,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: isOpenSidebar ? 240 : 0,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="right"
            open={isOpenSidebar}
        >
            <List sx={{ backgroundColor: '#a9a9a9', height: '100vh' }}>
                <ListItemButton>
                    <ListItemIcon onClick={() => setOpenSidebar(false)}>
                        <CloseOutlinedIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                </ListItemButton>
                <Link href={route('orders')}>
                    <ListItem disablePadding >
                        <ListItemButton>
                            <ListItemIcon>
                                <MenuIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary={'My Orders'} sx={{ color: 'white' }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link onClick={() => post(route('logout'))} >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon sx={{ color: 'white' }} />
                            </ListItemIcon>
                            <ListItemText primary={'Log Out'} sx={{ color: 'white' }} />
                        </ListItemButton>
                    </ListItem>
                </Link>


            </List>
        </Drawer>
    );
};

export default PersistentDrawerLeft;
