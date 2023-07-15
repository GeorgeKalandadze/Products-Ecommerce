import Navbar from "@/Layouts/Navbar/Navbar.jsx";

export default function ProductsLayout({ children }) {

    return (
        <div className="min-h-screen bg-gray-100 w-full ">
            <Navbar/>
            <div className="px-[0px]  p-6 xl:px-[80px] lg:px-[35px] md:px-[40px]">
                {children}
            </div>
        </div>
    );
}
