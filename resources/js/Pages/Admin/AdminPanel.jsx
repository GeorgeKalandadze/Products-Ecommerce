import AdminPanelLayout from "@/Layouts/AdminPanelLayout.jsx";
import Accordion from "@/Components/Accordion.jsx";
import PersonIcon from '@mui/icons-material/Person';
import StatCard from "@/Components/AdminPanelComps/StatCard.jsx";


const AdminPanel = () => {
    return(
        <AdminPanelLayout>
            <section className="p-[16px]">
                <h1 className="font-bold text-[30px] ">Dashboard</h1>
                <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-4 gap-4 sm:grid-cols-2">
                    <StatCard head="Active Customers" end={200} />
                    <StatCard head="Active Products" end={400} />
                    <StatCard head="Paid Orders" end={50} />
                    <StatCard head="Total Incomes" end={20000.2} />
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 justify-between lg:grid-cols-[63%,35%]">
                    <div className="bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl h-[100vh] ">
                        <h1 className="text-[20px] font-bold mb-3">Latest 10 order</h1>
                        <div className="flex justify-between items-center hover:bg-gray-200 p-2 rounded">
                            <div className="flex flex-col gap-3">
                                <h1><span className="text-[#423dce] font-semibold">Order #2</span> created 1 week ago. 2 items</h1>
                                <p>George</p>
                            </div>
                            <p>$7,000.0</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 justify-between">
                        <div className="text-center bg-[#f3f4f6]  p-4 rounded-[8px] shadow-xl col-span-2 lg:col-span-2 md:col-span-1">
                            <h1 className="text-[20px] font-bold mb-4">The most popular products</h1>
                            <Accordion />
                            <Accordion />
                            <Accordion />
                        </div>
                        <div className="text-center bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl col-span-2 lg:col-span-2 md:col-span-1">
                            <h1 className="text-[20px] font-bold mb-3">Latest Customers</h1>
                            <div className="flex items-center gap-4 hover:bg-gray-200 p-2 rounded">
                                <div className="rounded-full bg-gray-300 p-3">
                                    <PersonIcon />
                                </div>
                                <div className="text-left flex flex-col gap-2">
                                    <p className="font-medium">Gio</p>
                                    <p className="font-medium">Gio@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AdminPanelLayout>
    )
}

export default AdminPanel
