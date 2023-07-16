import React, { useState } from 'react';
import NavLogo from "@/Layouts/Navbar/NavbarComps/NavLogo";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import SearchIcon from '@mui/icons-material/Search';
import CartItemModal from "@/Components/CartIems/CartItemModal.jsx";
import SearchModal from "@/Components/SearchModal.jsx";
import {useGlobalContext} from "@/Context/Context.jsx";
import MenuIcon from '@mui/icons-material/Menu.js';

const Navbar = () => {
    const [openShopCart, setOpenShopCart] = useState(false)
    const [openSearchModal, setOpenSearchModal] = useState(false)
    const {isOpenSidebar, setOpenSidebar} = useGlobalContext();

    return (
        <>
            <CartItemModal
                open={openShopCart}
                close={() => setOpenShopCart(false)}
            />
            <SearchModal
                open={openSearchModal}
                close={() => setOpenSearchModal(false)}
            />
        <div className="shadow-md p-6 px-2 flex justify-between md:px-[80px]">
            <NavLogo />
            <div className="flex gap-4 items-center">
                <SearchIcon className="cursor-pointer" onClick={() => setOpenSearchModal(true)}/>
                <ShoppingCartOutlinedIcon className="cursor-pointer" onClick={() => setOpenShopCart(true)}/>
                {/*<select*/}
                {/*    className="appearance-none text-gray-700 leading-tight  bg-transparent border-none font-bold outline-0 cursor-pointer"*/}
                {/*>*/}
                {/*    <option value="en" >EN</option>*/}
                {/*    <option value="fr">KA</option>*/}
                {/*    /!* Add more language options as needed *!/*/}
                {/*</select>*/}
                <button onClick={() => setOpenSidebar(true)}>
                    <MenuIcon/>
                </button>
            </div>
        </div>
            </>
    );
};

export default Navbar;
