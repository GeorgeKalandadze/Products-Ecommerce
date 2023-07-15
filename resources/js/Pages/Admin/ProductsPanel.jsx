import AdminPanelLayout from "@/Layouts/AdminPanelLayout.jsx";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductForm from "@/Components/AdminPanelComps/ProductForm.jsx";
import { useGlobalContext } from "@/Context/Context.jsx";
import axios from "axios";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ProductsPanel = (props) => {
    const options = [5, 10, 30, 40, 50];
    const [anchorEl, setAnchorEl] = useState([]);
    const [openCreateProduct, setOpenCreateProduct] = useState(false);
    const open = Boolean(anchorEl);
    const [products, setProducts] = useState(props.products.data);
    const { setSelectedProduct } = useGlobalContext();
    const [searchQuery, setSearchQuery] = useState('');
    const [paginate, setPaginate] = useState(5);
    const [sortField, setSortField] = useState('updated_at');
    const [sortDirection, setSortDirection] = useState('desc');

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

    const handleSort = (field) => {
        if (field === sortField) {
            setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    useEffect(() => {
        axios
            .get(`${window.location.protocol}//${window.location.host}/api/products`, {
                params: {
                    search: searchQuery,
                    per_page: paginate,
                    sort_field: sortField,
                    sort_direction: sortDirection,
                },
            })
            .then((res) => {
                setProducts(res.data.data);
            });
    }, [searchQuery, paginate, sortField, sortDirection]);

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
                console.error('Error deleting product:', error);
            });
    };

    const editProduct = (product) => {
        setOpenCreateProduct(true)
        setSelectedProduct(product)
    }

    return (
        <AdminPanelLayout>
            <ProductForm
                open={openCreateProduct}
                close={() => setOpenCreateProduct(false)}
                products={products}
                setProducts={setProducts}
            />
            <section className="p-[16px]">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-[30px]">Products</h1>
                    <button className="bg-[#423dce] text-white px-6 py-2.5 rounded font-bold" onClick={() => { setOpenCreateProduct(true), setSelectedProduct(null) }}>Add New Product</button>
                </div>
                <div className="p-4 rounded-[8px] bg-[#f3f4f6] mt-6 min-h-screen">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <div className="flex items-center gap-4">
                            <p className="font-medium">Per page</p>
                            <select
                                id="quantity"
                                defaultValue="10"
                                className="border-none rounded outline-none"
                                onChange={(event) => setPaginate(event.target.value)}
                                value={paginate}
                            >
                                {options.map((option) => (
                                    <option key={option} value={option} className="border-none">
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <p className="font-medium">Found {products.length} Products</p>
                        </div>
                        <input
                            type="search"
                            className="border-none rounded .placeholder-gray-500 px-6 mt-4 sm:mt-0"
                            placeholder="Type to search product"
                            value={searchQuery}
                            onChange={(event) => setSearchQuery(event.target.value)}
                        />
                    </div>
                    <div className="overflow-x-auto mt-6">
                        <table className="w-full">
                            <thead className="bg-white border-b-2 border-t-2">
                            <tr>
                                <th className="py-[15px] cursor-pointer" onClick={() => handleSort('id')}>
                                    ID {sortField === 'id' && (sortDirection === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />)}
                                </th>
                                <th className="cursor-pointer">
                                    Image
                                </th>
                                <th className="cursor-pointer" onClick={() => handleSort('title')}>
                                    Title {sortField === 'title' && (sortDirection === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />)}
                                </th>
                                <th className="cursor-pointer" onClick={() => handleSort('price')}>
                                    Price {sortField === 'price' && (sortDirection === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />)}
                                </th>
                                <th className="cursor-pointer" onClick={() => handleSort('updated_at')}>
                                    Last Updated At {sortField === 'updated_at' && (sortDirection === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />)}
                                </th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.length > 0 && products.map((product, index) => (
                                <tr className="text-center mt-4 border-b-2" key={product.id}>
                                    <td>{product.id}</td>
                                    <td className="flex justify-center items-center py-2">
                                        <img src={product.product_images[0]?.name} className="w-[100px] h-[80px]" alt="Product" />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.price}$</td>
                                    <td>{product.updated_at}</td>
                                    <td>
                                        <IconButton
                                            aria-label="more"
                                            id={`long-button-${product.id}`}
                                            aria-controls={open ? `long-menu-${product.id}` : undefined}
                                            aria-expanded={open ? 'true' : undefined}
                                            aria-haspopup="true"
                                            onClick={(event) => handleClick(event, index)}
                                        >
                                            <MoreVertIcon sx={{ color: "#818cf8" }} />
                                        </IconButton>
                                        <Menu
                                            MenuListProps={{
                                                'aria-labelledby': `long-button-${product.id}`,
                                            }}
                                            id={`menu-${product.id}`}
                                            anchorEl={anchorEl[index]}
                                            open={Boolean(anchorEl[index])}
                                            onClose={() => handleClose(index)}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: 48 * 4.5,
                                                },
                                            }}
                                        >
                                            <MenuItem onClick={() => editProduct(product)}>
                                                <EditIcon sx={{ color: "#818cf8", marginRight: "10px" }} /> Edit
                                            </MenuItem>
                                            <MenuItem onClick={() => deleteProduct(product.id)}>
                                                <DeleteIcon sx={{ color: "#818cf8", marginRight: "10px" }} /> Delete
                                            </MenuItem>
                                        </Menu>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-6 flex justify-between"></div>
                </div>
            </section>
            <style jsx>{`
        @media screen and (max-width: 640px) {
          table {
            display: block;
            overflow-x: auto;
            white-space: nowrap;
          }

          th, td {
            min-width: 100px;
            padding: 8px;
          }

          th:first-child, td:first-child {
            min-width: 80px;
          }

          th:nth-child(2), td:nth-child(2) {
            min-width: 150px;
          }
        }
      `}</style>
        </AdminPanelLayout>
    );
};

export default ProductsPanel;
