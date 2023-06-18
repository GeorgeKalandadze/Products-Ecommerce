import React, { useEffect, useState } from 'react';
import NavLogo from "@/Layouts/Navbar/NavbarComps/NavLogo";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Button, Menu, MenuItem} from '@mui/material';
import axios from "axios";
import { Dropdown, DropdownMenuItem, DropdownNestedMenuItem } from "./NavbarComps/Dropdown/Dropdown.jsx";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [hoveredCategory, setHoveredCategory] = useState(null);

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

    useEffect(() => {
        axios
            .get(`${window.location.protocol}//${window.location.host}/api/categories`)
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
                            trigger={<Button>Categories</Button>}
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
                <ShoppingCartOutlinedIcon className="cursor-pointer" />
            </div>
        </div>
    );
};

export default Navbar;
