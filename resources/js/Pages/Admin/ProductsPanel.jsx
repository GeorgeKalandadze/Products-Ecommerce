import AdminPanelLayout from "@/Layouts/AdminPanelLayout.jsx";
import ProductImg from '../../assets/laptop.jpg'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import {useState} from "react";
import {Menu, MenuItem} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductForm from "@/Components/AdminPanelComps/ProductForm.jsx";



const ProductsPanel = (props) => {
    const options = [10, 20, 30, 40, 50];
    const [anchorEl, setAnchorEl] = useState(null);
    const [openCreateProduct, setOpenCreateProduct] = useState(false);
    const open = Boolean(anchorEl);
    const [products, setProducts] = useState(props.products)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const deleteProduct = (productId) => {
        axios
            .delete(`${window.location.protocol}//${window.location.host}/api/products/${productId}`)
            .then((response) => {
                const deletedIndex = products.findIndex((product) => product.id === productId);
                const updatedProducts = [...products];
                updatedProducts.splice(deletedIndex, 1);
                setProducts(updatedProducts);
            })
            .catch((error) => {
                // Handle error
                console.error('Error deleting product:', error);
            });
    };




    return (
        <AdminPanelLayout>
          <ProductForm
              open={openCreateProduct}
              close={() => setOpenCreateProduct(false)}
              products = {products}
              setProducts = {setProducts}
          />
            <section className="p-[16px]">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-[30px]">Products</h1>
                    <button className="bg-[#423dce] text-white px-6 py-2.5 rounded font-bold" onClick={() => setOpenCreateProduct(true)}>Add New Product</button>
                </div>
                <div className="p-4 rounded-[8px]  bg-[#f3f4f6] mt-6 min-h-screen">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-4">
                            <p className="font-medium">Per page</p>
                            <select id="quantity" defaultValue="10" className="border-none rounded outline-none">
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
                    <table className="mt-6 w-full ">
                        <thead className="bg-white border-b-2 border-t-2 ">
                            <th className="py-[15px]">ID</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Last Updated At</th>
                            <th>Actions</th>
                        </thead>
                        <tbody>
                        {products.map((product) => (
                            <tr className="text-center mt-4 border-b-2 ">
                                <td>{product.id}</td>
                                <td className="flex justify-center items-center py-2 ">
                                    <img src={product.product_images[0].path} className="w-[100px] h-[80px]"/>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}$</td>
                                <td>{product.updated_at}</td>
                                <td>
                                    <IconButton
                                        aria-label="more"
                                        id="long-button"
                                        aria-controls={open ? 'long-menu' : undefined}
                                        aria-expanded={open ? 'true' : undefined}
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        <MoreVertIcon sx={{color:"#818cf8"}}/>
                                    </IconButton >
                                    <Menu
                                        id="long-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'long-button',
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
                                        <MenuItem   onClick={handleClose} >
                                            <EditIcon sx={{color:"#818cf8", marginRight:"10px"}}/> Edit
                                        </MenuItem>
                                        <MenuItem   onClick={() => deleteProduct(product.id)}>
                                            <DeleteIcon sx={{color:"#818cf8", marginRight:"10px"}}/> Delete
                                        </MenuItem>
                                    </Menu>
                                </td>
                            </tr>
                        ))}

                        </tbody>
                    </table>
                    <div className="mt-6">
                        <p>showing from 1 to 10</p>
                        <div>
                        </div>
                    </div>
                </div>

            </section>
        </AdminPanelLayout>
    )
}

export default ProductsPanel
