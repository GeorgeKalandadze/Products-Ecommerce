import AdminPanelLayout from "@/Layouts/AdminPanelLayout.jsx";
import CountUp from "@/Components/CountUp.jsx";

const AdminPanel = () => {
    return(
       <AdminPanelLayout>
           <section className="p-[16px]">
                <h1>Dashboard</h1>
               <CountUp end={200}/>
           </section>
       </AdminPanelLayout>
    )
}

export default AdminPanel
