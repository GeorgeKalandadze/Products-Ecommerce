import AdminPanelLayout from "@/Layouts/AdminPanelLayout.jsx";
import { Bar, Doughnut } from "react-chartjs-2";
import { useState } from "react";
import { Chart } from "chart.js";
import {
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, BarElement);

const Orders = () => {
    const UserData = [
        {
            id: 1,
            month: "January",
            userGain: 80000,
            userLost: 823,
        },
        {
            id: 2,
            month: "February",
            userGain: 45677,
            userLost: 345,
        },
        {
            id: 3,
            month: "March",
            userGain: 78888,
            userLost: 555,
        },
        {
            id: 4,
            month: "April",
            userGain: 90000,
            userLost: 4555,
        },
        {
            id: 5,
            month: "May",
            userGain: 4300,
            userLost: 234,
        },
        {
            id: 6,
            month: "June",
            userGain: 50000,
            userLost: 1500,
        },
        {
            id: 7,
            month: "July",
            userGain: 62000,
            userLost: 1234,
        },
        {
            id: 8,
            month: "August",
            userGain: 55000,
            userLost: 876,
        },
        {
            id: 9,
            month: "September",
            userGain: 38000,
            userLost: 543,
        },
        {
            id: 10,
            month: "October",
            userGain: 70000,
            userLost: 987,
        },
        {
            id: 11,
            month: "November",
            userGain: 59000,
            userLost: 732,
        },
        {
            id: 12,
            month: "December",
            userGain: 85000,
            userLost: 1654,
        },
    ];

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.month),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
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
                <Bar data={userData} />
            </section>
        </AdminPanelLayout>
    );
};

export default Orders;
