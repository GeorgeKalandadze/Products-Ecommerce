import React, { useEffect, useState } from 'react';
import NavLogo from "@/Layouts/Navbar/NavbarComps/NavLogo";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Button, Menu, MenuItem} from '@mui/material';
import axios from "axios";
import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from "./NavbarComps/Dropdown/Dropdown.jsx";
import SearchIcon from '@mui/icons-material/Search';
import CartItemModal from "@/Components/CartIems/CartItemModal.jsx";
import axiosClient from "@/axios/axios-client.js";


const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [openShopCart, setOpenShopCart] = useState(false)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCategoryHover = (categoryId) => {
        const hoveredCategory = categories.find(category => category.id === categoryId);
        if (hoveredCategory) {
            setHoveredCategory(hoveredCategory);
            setSubcategories(hoveredCategory.sub_categories);
        }
    };

    //
    // const getToken = async () => {
    //     await axios.get('/sanctum/csrf-cookie');
    // }
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await getToken();
    //         const res = await axios.get(`${window.location.protocol}//${window.location.host}/api/categories`);
    //         setCategories(res.data);
    //     };
    //
    //     fetchData();
    // }, []);

    useEffect(() => {
        axiosClient
            .get('/categories')
            .then((res) => {
                setCategories(res.data);
            });
    }, []);


    const handleMouseLeave = () => {
        setHoveredCategory(null);
        setSubcategories([]);
    };

    console.log(categories)

    return (
        <>
            <CartItemModal
                open={openShopCart}
                close={() => setOpenShopCart(false)}
            />
        <div className="shadow-md p-6 px-2 flex justify-between md:px-[80px]">
            <NavLogo />
            <ul className="flex items-center justify-between gap-8">
                <li className="cursor-pointer">All Products</li>
                <li
                    className="cursor-pointer"
                    onMouseEnter={() => handleCategoryHover('categories')}
                    onMouseLeave={handleMouseLeave}
                >
                    <div onClick={handleClick}>
                        <Dropdown
                            trigger={<Button style={{color:"black"}}>Categories <ArrowDropDownIcon/></Button>}
                            menu={[
                                categories.map((category) => (
                                    <DropdownNestedMenuItem
                                        label={category.name}

                                        menu={
                                        [
                                            category.sub_categories.map((subcat) => (
                                                <DropdownMenuItem
                                                    onClick={() => {
                                                        console.log("clicked");
                                                    }}
                                                >
                                                    {subcat.name}
                                                </DropdownMenuItem>
                                            ))

                                        ]}
                                    />
                                ))
                            ]}
                        />
                    </div>
                </li>
                <li className="cursor-pointer">My Orders</li>
            </ul>
            <div className="flex gap-4 items-center">
                <SearchIcon className="cursor-pointer"/>
                <ShoppingCartOutlinedIcon className="cursor-pointer" onClick={() => setOpenShopCart(true)}/>
                <select
                    className="appearance-none text-gray-700 leading-tight  bg-transparent border-none font-bold outline-0 cursor-pointer"
                >
                    <option value="en" >EN</option>
                    <option value="fr">KA</option>
                    {/* Add more language options as needed */}
                </select>
                {/*<BurgerMenu/>*/}
            </div>

        </div>
            </>
    );
};

export default Navbar;
