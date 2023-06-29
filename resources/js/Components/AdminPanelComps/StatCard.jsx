import CountUp from "@/Components/CountUp.jsx";

const StatCard = ({head, start = 0, end}) => {
    return(
        <div>
            <div className="text-center w-[350px] bg-[#f3f4f6] p-4 rounded-[8px] shadow-xl">
                <h1 className="text-[20px] font-bold mb-3">Active Customers</h1>
                <h1 className="text-[30px] font-bold flex justify-center"><CountUp end={end}/>+</h1>
            </div>
        </div>
        )
}

export default StatCard
