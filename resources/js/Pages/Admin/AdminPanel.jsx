import Sidebar from "@/Layouts/SideBar/Sidebar";
import {useState} from "react";
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
const AdminPanel = () => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(isopen => !isopen);
    };
    return(
        <Box sx={{ display: 'flex' }}>
            <Sidebar isOpen={open} />
            <div onClick={handleDrawerOpen} className="w-full p-4 bg-red-500">
                <MenuIcon sx={{color:"white", cursor:"pointer"}}/>
            </div>
            <h1></h1>
        </Box>
    )
}

export default AdminPanel
