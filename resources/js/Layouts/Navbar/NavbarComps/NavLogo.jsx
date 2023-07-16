import React from 'react';
import EcommerceLogo from '../../../assets/Ecommerce Icon.png';

const NavLogo = () => {
    return (
        <div className="flex items-center gap-2">
            <img src={EcommerceLogo} alt="Ecommerce Logo" className="w-[80px]" />
            <h1 className="font-extrabold text-[25px] hidden md:flex">Ecommerce</h1>
        </div>
    );
};

export default NavLogo;
