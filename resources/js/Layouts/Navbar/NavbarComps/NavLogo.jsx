import EcommerceLogo from '../../../assets/second-ecommerce-logo.png'
const NavLogo = () => {
    return(
        <div className="flex items-center gap-2">
            <img  src={EcommerceLogo} className="w-[40px]"/>
            <h1 className="font-extrabold text-[25px]">Ecommerce</h1>
        </div>
    )
}

export default NavLogo
