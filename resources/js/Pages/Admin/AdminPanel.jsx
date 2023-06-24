import AdminPanelLayout from "@/Layouts/AdminPanelLayout.jsx";
import CountUp from "@/Components/CountUp.jsx";

const AdminPanel = () => {
    return(
       <AdminPanelLayout>
           <section className="p-[16px]">
                <h1 className="font-bold text-[30px]">Dashboard</h1>
               <div className="mt-4 flex justify-between">
                   <div>
                       <div className="text-center w-[330px] bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl">
                           <h1 className="text-[20px] font-bold mb-3">Active Customers</h1>
                           <h1 className="text-[30px] font-bold flex justify-center"><CountUp end={200}/>+</h1>
                       </div>
                   </div>
                   <div>
                       <div className="text-center w-[330px] bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl">
                           <h1 className="text-[20px] font-bold mb-3">Active Products</h1>
                           <h1 className="text-[30px] font-bold flex justify-center"><CountUp end={400}/>+</h1>
                       </div>
                   </div>
                   <div>
                       <div className="text-center w-[330px] bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl">
                           <h1 className="text-[20px] font-bold mb-3">Paid Orders</h1>
                           <h1 className="text-[30px] font-bold flex justify-center"><CountUp end={50}/>+</h1>
                       </div>
                   </div>
                   <div>
                       <div className="text-center w-[330px] bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl">
                           <h1 className="text-[20px] font-bold mb-3">Total Incomes</h1>
                           <h1 className="text-[30px] font-bold flex justify-center"><CountUp end={20000.20}/>$</h1>
                       </div>
                   </div>
               </div>
               {/*<h1 className="text-[40px]"><CountUp end={200}/></h1>*/}
               {/*<h1 className="text-[40px]"><CountUp end={100}/></h1>*/}
               {/*<h1 className="text-[40px]"><CountUp end={300}/></h1>*/}
           </section>
       </AdminPanelLayout>
    )
}

export default AdminPanel
