import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert.js";
import { Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit.js";
import DeleteIcon from "@mui/icons-material/Delete.js";
import AdminPanelLayout from "@/Layouts/AdminPanelLayout.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
    const options = [10, 20, 30, 40, 50];
    const [anchorEl, setAnchorEl] = useState([]);
    const open = Boolean(anchorEl);
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [paginate, setPaginate] = useState(5);



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

    useEffect(() => {
        axios
            .get(`${window.location.protocol}//${window.location.host}/api/users`, {
                params: {
                    search: searchQuery,
                    per_page: paginate,

                },
            })
            .then((res) => {
                console.log(res)
                setUsers(res.data.data);
            });
    }, [searchQuery, paginate]);

    console.log(users,"users")
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Actions</th>
                            </thead>
                            <tbody>
                            {users.length > 0 && users.map((user,index) => (
                                <tr className="text-center mt-4 border-b-2">
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.email_verified_at}</td>
                                    <td>
                                        <IconButton
                                            aria-label="more"
                                            id={`long-button-${user.id}`}
                                            aria-controls={open ? `long-menu-${user.id}` : undefined}
                                            aria-expanded={open ? 'true' : undefined}
                                            aria-haspopup="true"
                                            onClick={(event) => handleClick(event, index)}
                                        >
                                            <MoreVertIcon sx={{ color: "#818cf8" }} />
                                        </IconButton>
                                        <Menu
                                            MenuListProps={{
                                                'aria-labelledby': `long-button-${user.id}`,
                                            }}
                                            id={`menu-${user.id}`}
                                            anchorEl={anchorEl[index]}
                                            open={Boolean(anchorEl[index])}
                                            onClose={() => handleClose(index)}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: 48 * 4.5,
                                                },
                                            }}
                                        >
                                            <MenuItem >
                                                <EditIcon sx={{ color: "#818cf8", marginRight: "10px" }} /> Edit
                                            </MenuItem>
                                            <MenuItem >
                                                <DeleteIcon sx={{ color: "#818cf8", marginRight: "10px" }} /> Delete
                                            </MenuItem>
                                        </Menu>
                                    </td>
                                </tr>
                            ))}
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
