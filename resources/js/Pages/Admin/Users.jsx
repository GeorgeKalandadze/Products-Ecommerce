import ProductImg from "@/assets/laptop.jpg";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert.js";
import { Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit.js";
import DeleteIcon from "@mui/icons-material/Delete.js";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout.jsx";
import { useState } from "react";

const Users = () => {
    const options = [10, 20, 30, 40, 50];
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AdminPanelLayout>
            <section className="p-[16px]">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-[30px]">Products</h1>
                </div>
                <div className="p-4 rounded-[8px] bg-[#f3f4f6] mt-6 min-h-screen">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <p className="font-medium">Per page</p>
                            <select
                                id="quantity"
                                defaultValue="10"
                                className="border-none rounded outline-none"
                            >
                                {options.map((option) => (
                                    <option key={option} value={option} className="border-none">
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <p className="font-medium">Found 69 Products</p>
                        </div>
                        <input
                            type="search"
                            className="border-none rounded .placeholder-gray-500 px-6"
                            placeholder="Type to search product"
                        />
                    </div>
                    <div className="overflow-x-auto">
                        <table className="mt-6 w-full">
                            <thead className="bg-white border-b-2 border-t-2">
                            <th className="py-[15px]">ID</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Last Updated At</th>
                            <th>Actions</th>
                            </thead>
                            <tbody>
                            <tr className="text-center mt-4 border-b-2">
                                <td>1</td>
                                <td className="flex justify-center items-center py-2">
                                    <img src={ProductImg} className="w-[100px]" />
                                </td>
                                <td>some name</td>
                                <td>69.69$</td>
                                <td>2023-06-23 17:57:19</td>
                                <td>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={open ? "long-menu" : undefined}
                                        aria-expanded={open ? "true" : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon sx={{ color: "#818cf8" }} />
                                    </IconButton>
                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                            "aria-labelledby": "long-button",
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            style: {
                                                maxHeight: 48 * 4.5,
                                            },
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>
                                            <EditIcon
                                                sx={{ color: "#818cf8", marginRight: "10px" }}
                                            />{" "}
                                            Edit
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}>
                                            <DeleteIcon
                                                sx={{ color: "#818cf8", marginRight: "10px" }}
                                            />{" "}
                                            Delete
                                        </MenuItem>
                                    </Menu>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6">
                        <p>showing from 1 to 10</p>
                        <div></div>
                    </div>
                </div>
            </section>
        </AdminPanelLayout>
    );
};

export default Users;
