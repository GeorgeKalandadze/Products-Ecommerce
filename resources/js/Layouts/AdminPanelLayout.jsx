import Sidebar from "@/Layouts/SideBar/Sidebar";
import {useState} from "react";

const AdminPanelLayout = () => {

    return(
        <>
            <div >
                open sidebar
            </div>
            <Sidebar isOpen={open}/>
        </>

    )
}

export default AdminPanelLayout
