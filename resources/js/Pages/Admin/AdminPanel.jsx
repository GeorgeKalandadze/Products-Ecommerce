import AdminPanelLayout from "@/Layouts/AdminPanelLayout.jsx";
import Accordion from "@/Components/Accordion.jsx";
import PersonIcon from '@mui/icons-material/Person';
import StatCard from "@/Components/AdminPanelComps/StatCard.jsx";
import {useState} from "react";


const AdminPanel = (props) => {
    const [dashboardData, setDashboardData] = useState(props.data)
    console.log(dashboardData)
    return(
        <AdminPanelLayout>
            <section className="p-[16px]">
                <h1 className="font-bold text-[30px] ">Dashboard</h1>
                <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-4 gap-4 sm:grid-cols-2">
                    <StatCard head="Active Customers" end={dashboardData.activeCustomersCount} />
                    <StatCard head="Active Products" end={dashboardData.productsCount} />
                    <StatCard head="Paid Orders" end={dashboardData.paidOrdersCount}/>
                    <StatCard head="Total Incomes" end={dashboardData.totalIncomes}/>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 justify-between lg:grid-cols-[63%,35%]">
                    <div className="bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl h-[100vh] ">
                        <h1 className="text-[20px] font-bold mb-3">Latest 10 order</h1>
                        {dashboardData.latestOrders.map((order) => (
                            <div className="flex justify-between items-center hover:bg-gray-200 p-2 rounded">
                                <div className="flex flex-col gap-3">
                                    <h1><span className="text-[#423dce] font-semibold">Order #{order.id}</span> created at {order.created_at}. {order.tems_count} items</h1>
                                    <p>{order.username}</p>
                                </div>
                                <p>${order.total_price}</p>
                            </div>
                        ))}

                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 justify-between">
                        <div className="text-center bg-[#f3f4f6]  p-4 rounded-[8px] shadow-xl col-span-2  lg:col-span-2 md:col-span-1 ">
                            <h1 className="text-[20px] font-bold mb-4">The most popular products</h1>
                            {dashboardData.topProducts.length > 0 && dashboardData.topProducts.map((product) => (
                                <Accordion name={product.name} desc={product.description}/>

                            ))}

                        </div>
                        <div className="text-center bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl col-span-2 lg:col-span-2 md:col-span-1">
                            <h1 className="text-[20px] font-bold mb-3">Latest Customers</h1>
                            <div className="flex items-center gap-4 hover:bg-gray-200 p-2 rounded">
                                <div className="rounded-full bg-gray-300 p-3">
                                    <PersonIcon />
                                </div>
                                {dashboardData.latestCustomers.length > 0 && dashboardData.latestCustomers.map((customer) => (
                                    <div className="text-left flex flex-col gap-2">
                                        <p className="font-medium">{customer.name}</p>
                                        <p className="font-medium">{customer.email}</p>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AdminPanelLayout>
    )
}

export default AdminPanel
