import ProductsLayout from "@/Layouts/ProductsLayout";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert.js";
import {Menu, MenuItem} from "@mui/material";
import {useState} from "react";
import PaymentIcon from '@mui/icons-material/Payment';
import CancelIcon from '@mui/icons-material/Cancel';

export default function Order (props){
    const [anchorEl, setAnchorEl] = useState([]);
    const open = Boolean(anchorEl);
    const orders = props.orders;
    const handleClick = (event, index) => {
        const newAnchorElArray = [...anchorEl];
        newAnchorElArray[index] = event.currentTarget;
        setAnchorEl(newAnchorElArray);
    };

    const handleClose = (index) => {
        const newAnchorElArray = [...anchorEl];
        newAnchorElArray[index] = null;
        setAnchorEl(newAnchorElArray);
    };

    const makeCheckout = async (orderId) => {
        try {
            const response = await axios.post(`${window.location.protocol}//${window.location.host}/api/checkout/${orderId}`);
            window.location.href = response.data.session_url
        } catch (error) {
            console.log(error);
            // Handle error
        }
    };

    const cancelCheckout = async (orderId) => {
        try {
            const response = await axios.post(`${window.location.protocol}//${window.location.host}/api/checkout/cancel/${orderId}`);
            console.log(response)
        } catch (error) {
            console.log(error);
            // Handle error
        }
    };

    console.log(props)
    return (
        <ProductsLayout>
            <div>
                <h1 className="font-extrabold text-[30px]">My Orders</h1>
                <table className="mt-6 w-full bg-white rounded ">
                    <thead className="text-left border-b-2 ">
                    <th className="py-[15px] px-4">Order #</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Items</th>
                    <th>Actions</th>
                    </thead>
                    <tbody >
                    {orders.map((order, index) => (
                        <tr className=" mt-4 border-b-2">
                            <td className="px-4">{order.id}</td>
                            <td>{order.created_at}</td>
                            <td>
                                <p
                                    className={`text-white py-1 w-[50%] px-2 rounded ${
                                        order.status === 'paid' ? 'bg-emerald-500' : 'bg-gray-400'
                                    }`}
                                >
                                    {order.status}
                                </p>
                            </td>
                            <td>{order.total_price}</td>
                            <td>{order.items_count }</td>
                            <td>
                                <IconButton
                                    aria-label="more"
                                    id={`long-button-${order.id}`}
                                    aria-controls={open ? `long-menu-${order.id}` : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={(event) => handleClick(event, index)}
                                >
                                    <MoreVertIcon sx={{ color: "#818cf8" }} />
                                </IconButton>
                                <Menu
                                    MenuListProps={{
                                        'aria-labelledby': `long-button-${order.id}`,
                                    }}
                                    id={`menu-${order.id}`}
                                    anchorEl={anchorEl[index]}
                                    open={Boolean(anchorEl[index])}
                                    onClose={() => handleClose(index)}
                                    PaperProps={{
                                        style: {
                                            maxHeight: 48 * 4.5,
                                        },
                                    }}
                                >
                                    <MenuItem onClick={() => makeCheckout(order.id)}>
                                        <PaymentIcon sx={{ color: "green", marginRight: "10px" }} /> Pay
                                    </MenuItem>
                                    <MenuItem onClick={() => cancelCheckout(order.id)}>
                                        <CancelIcon sx={{ color: "red", marginRight: "10px" }} /> Cancel
                                    </MenuItem>
                                </Menu>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </ProductsLayout>
    )
}
