import CountUp from "@/Components/CountUp.jsx";

const StatCard = ({ head, start = 0, end }) => {
    return (
        <div className="text-center bg-[#f3f4f6] p-4 rounded-[8px] w-full shadow-xl  2xl:w-[350px] xl:w-[300px] lg:w-[230px] md:w-[200px]">
            <h1 className="text-[20px] font-bold mb-3">{head}</h1>
            <h1 className="text-[30px] font-bold flex justify-center">
                <CountUp end={end} />+
            </h1>
        </div>
    );
};

export default StatCard;
