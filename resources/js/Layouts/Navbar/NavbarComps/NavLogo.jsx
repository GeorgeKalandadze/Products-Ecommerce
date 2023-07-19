import React from 'react';
import EcommerceLogo from '../../../assets/Ecommerce Icon.png';
import {Link} from "@inertiajs/react";


const NavLogo = () => {
    return (
        <Link href={route('home')}>
        <div className="flex items-center gap-2 cursor-pointer">
            <img src={EcommerceLogo} alt="Ecommerce Logo" className="w-[80px]" />
            <h1 className="font-extrabold text-[25px] hidden md:flex">Ecommerce</h1>
        </div>
        </Link>
    );
};

export default NavLogo;
