import Navbar from "@/Layouts/Navbar/Navbar.jsx";
import NavSideBar from "@/Layouts/Navbar/NavbarComps/NavSideBar";
import {useGlobalContext} from "@/Context/Context.jsx";

export default function ProductsLayout({ children }) {
    const {isOpenSidebar} = useGlobalContext();
    return (
        <div className="min-h-screen bg-gray-100 w-full ">
            <Navbar/>
            <NavSideBar/>
            <div  className={`content ${isOpenSidebar ? 'blur' : ''} px-[0px]  p-6 xl:px-[80px] lg:px-[35px] md:px-[40px]`}>
                {children}
            </div>
            <style>{`
        .blur {
          filter: blur(4px);
        }
        .content {
          transition: filter 0.3s ease;
        }
      `}</style>
        </div>
    );
}
