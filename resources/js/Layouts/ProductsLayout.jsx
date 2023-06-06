import Navbar from "@/Layouts/Navbar/Navbar.jsx";

export default function ProductsLayout({ children }) {

    return (
        <div className="min-h-screen bg-gray-100 w-full">
            <Navbar/>
            {children}
        </div>
    );
}
