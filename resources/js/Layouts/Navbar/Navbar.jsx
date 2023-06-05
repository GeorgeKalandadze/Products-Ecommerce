import NavLogo from "@/Layouts/Navbar/NavbarComps/NavLogo";
import BurgerMenu from "@/Layouts/Navbar/NavbarComps/BurgerMenu/BurgerMenu.jsx";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
    return(
        <div className="shadow-md p-6 px-[10px] flex justify-between md:px-[80px]">
            <NavLogo/>
            <div className="flex gap-4 items-center">
                <ShoppingCartOutlinedIcon
                    className="cursor-pointer bg-transparent"

                />
                <BurgerMenu/>
            </div>
        </div>
    )
}

export default Navbar
