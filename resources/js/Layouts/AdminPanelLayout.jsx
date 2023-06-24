import React, { useState } from 'react';
import Sidebar from '@/Layouts/SideBar/Sidebar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu.js';
import PersonAvatar from '../assets/person.jpg';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Modal } from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const AdminPanelLayout = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleDrawerOpen = () => {
        setOpen((isOpen) => !isOpen);
    };

    const style = {
        position: 'absolute',
        top: '10%',
        right: '2%',
        outline: 'none',
        width: 200,
        bgcolor: 'background.paper',
        border: '0',
        boxShadow: 24,
        borderRadius: '6px',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Sidebar isOpen={open} setOpen={setOpen}/>
                <nav className="w-full p-4 bg-gray-100 flex justify-between items-center">
                    <MenuIcon sx={{ color: 'black', cursor: 'pointer' }} onClick={handleDrawerOpen} />
                    <div className={`flex gap-4 items-center relative ${open ? 'blur' : ''}`}>
                        <img src={PersonAvatar} className="h-10 w-10 rounded-full object-cover" />
                        <p className="cursor-pointer" onClick={() => setOpenModal((isOpen) => !isOpen)}>
                            David <ArrowDropDownOutlinedIcon />
                        </p>
                        <Modal
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            open={openModal}
                            onClose={() => setOpenModal(false)}
                        >
                            <Box sx={style}>
                                <p className="text-[15px] flex gap-3">
                                    <PermIdentityOutlinedIcon sx={{ color: '#8691f8' }} /> Profile
                                </p>
                                <p className="text-[15px] flex gap-3">
                                    <LogoutOutlinedIcon sx={{ color: '#8691f8' }} /> Logout
                                </p>
                            </Box>
                        </Modal>
                    </div>
                </nav>
                <div className={`content ${open ? 'blur' : ''}`}>
                    {children}
                </div>
            </Box>

            <style jsx>{`
        .blur {
          filter: blur(4px);
        }
        .content {
          transition: filter 0.3s ease;
        }
      `}</style>
        </>
    );
};

export default AdminPanelLayout;
