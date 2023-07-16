import AdminPanelLayout from "@/Layouts/AdminPanelLayout.jsx";
import { Bar} from "react-chartjs-2";
import { useState } from "react";
import { Chart } from "chart.js";
import {
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, BarElement);

const Orders = (props) => {

    const [ordersData, setOrdersData] = useState({
        labels: props.orderData.map((data) => data.month),
        datasets: [
            {
                label: "Users Gained",
                data: props.orderData.map((data) => data.orderCount),
                backgroundColor: [
                    "#75BF72", // January color
                    "#FF6F69", // February color
                    "#A8D8EA", // March color
                    "#FFC75F", // April color
                    "#7395AE", // May color
                    "#D18C8E", // June color
                    "#CBBF83", // July color
                    "#607D8B", // August color
                    "#FFBB4D", // September color
                    "#3E4651", // October color
                    "#7DCE82", // November color
                    "#FF877C", // December color
                ],

            },
        ],
    });

    return (
        <AdminPanelLayout>
            <section className="p-[16px]">
                <h1 className="font-bold text-[30px]">Orders Statistic</h1>
                <Bar data={ordersData} />
            </section>
        </AdminPanelLayout>
    );
};

export default Orders;
