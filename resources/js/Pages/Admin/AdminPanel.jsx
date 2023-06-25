import AdminPanelLayout from "@/Layouts/AdminPanelLayout.jsx";
import CountUp from "@/Components/CountUp.jsx";

const AdminPanel = () => {
    return(
       <AdminPanelLayout>
           <section className="p-[16px]">
                <h1 className="font-bold text-[30px]">Dashboard</h1>
               <div className="mt-4 flex justify-between">
                   <div>
                       <div className="text-center w-[350px] bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl">
                           <h1 className="text-[20px] font-bold mb-3">Active Customers</h1>
                           <h1 className="text-[30px] font-bold flex justify-center"><CountUp end={200}/>+</h1>
                       </div>
                   </div>
                   <div>
                       <div className="text-center w-[350px] bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl">
                           <h1 className="text-[20px] font-bold mb-3">Active Products</h1>
                           <h1 className="text-[30px] font-bold flex justify-center"><CountUp end={400}/>+</h1>
                       </div>
                   </div>
                   <div>
                       <div className="text-center w-[350px] bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl">
                           <h1 className="text-[20px] font-bold mb-3">Paid Orders</h1>
                           <h1 className="text-[30px] font-bold flex justify-center"><CountUp end={50}/>+</h1>
                       </div>
                   </div>
                   <div>
                       <div className="text-center w-[350px] bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl">
                           <h1 className="text-[20px] font-bold mb-3">Total Incomes</h1>
                           <h1 className="text-[30px] font-bold flex justify-center"><CountUp end={20000.20}/>$</h1>
                       </div>
                   </div>
               </div>
               <div className="mt-6 grid grid-cols-[63%,35%] gap-6 justify-between">
                   <div className="bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl h-[100vh]">
                       <h1 className="text-[20px] font-bold mb-3">Latest 10 order</h1>
                   </div>
                   <div className="grid grid-rows-2 gap-6">
                       <div className="text-center bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl col-span-2">
                           <h1 className="text-[20px] font-bold mb-3">The most popular products</h1>
                       </div>
                       <div className="text-center bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl col-span-2">
                           <h1 className="text-[20px] font-bold mb-3">Latest Customers</h1>
                       </div>
                   </div>
               </div>
           </section>
       </AdminPanelLayout>
    )
}

export default AdminPanel
