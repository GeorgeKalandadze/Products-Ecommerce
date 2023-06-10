import NavLogo from "@/Layouts/Navbar/NavbarComps/NavLogo";
import BurgerMenu from "@/Layouts/Navbar/NavbarComps/BurgerMenu/BurgerMenu.jsx";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

const Navbar = () => {
    return(
        <div className="shadow-md p-6 px-2 flex justify-between md:px-[80px]">
            <NavLogo />
            <ul className="flex items-center justify-between gap-8">
                <li>All Products</li>
                <li>Categories</li>
                <li>My Orders</li>
            </ul>
            <div className="flex gap-4 items-center">
                <SearchTwoToneIcon className="cursor-pointer"/>
                <ShoppingCartOutlinedIcon className="cursor-pointer" />
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
    )
}

export default Navbar
