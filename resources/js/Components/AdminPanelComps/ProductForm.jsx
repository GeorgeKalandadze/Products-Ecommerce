import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import InputGroup from '@/Components/AdminPanelComps/InputGroup.jsx';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import UploadImages from '@/Components/AdminPanelComps/UploadImages.jsx';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 14,
    borderRadius: 1,
    p: 4,
    maxHeight: '95vh',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 transparent',
};

const ProductForm = ({ open, close }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [filteredSubcategories, setFilteredSubcategories] = useState([]);
    const [productsData, setProductsData] = useState({});

    useEffect(() => {
        axios.get(`${window.location.protocol}//${window.location.host}/api/categories`).then((res) => {
            setCategories(res.data);
        });
    }, []);

    const handleCategoryChange = (e) => {
        const selectedCategoryId = e.target.value;
        const selectedCategory = categories.find((category) => category.id === selectedCategoryId);
        setSelectedCategory(selectedCategoryId);
        setFilteredSubcategories(selectedCategory?.sub_categories || []);
        setSelectedSubcategory('');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductsData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setProductsData((prevData) => ({
            ...prevData,
            [name]: checked,
        }));
    };

    console.log(productsData);

    const postProducts = () => {
        axios.post(`${window.location.protocol}//${window.location.host}/api/products/create`, productsData)
            .then((response) => {
                console.log('Product successfully posted!', response);
                // Do something with the response if needed
            })
            .catch((error) => {
                console.error('Error posting product:', error);
                // Handle the error if needed
            });
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component="form" noValidate autoComplete="off">
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                        Create Product
                    </Typography>
                    <div className="flex justify-between mt-4">
                        <InputGroup
                            label="Name"
                            placeholder="Enter Product Name"
                            type="text"
                            name="name"
                            className="w-[350px]"
                            onChange={handleInputChange}
                        />
                        <InputGroup
                            label="Slug"
                            placeholder="Enter Product Slug"
                            type="text"
                            name="slug"
                            className="w-[350px]"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex justify-between mt-4 mb-4">
                        <InputGroup
                            label="Price"
                            placeholder="Enter Product Price"
                            type="number"
                            name="price"
                            className="w-[350px]"
                            onChange={handleInputChange}
                        />
                        <InputGroup
                            label="Quantity"
                            placeholder="Enter Product qunatity"
                            type="number"
                            name="quantity"
                            className="w-[350px]"
                            onChange={handleInputChange}
                        />

                    </div>
                    <InputGroup
                        label="Quote"
                        placeholder="Enter Product Quote"
                        type="text"
                        name="quote"
                        onChange={handleInputChange}
                    />
                    <div className="mt-4 flex flex-col gap-2">
                        <label className="font-medium text-[18px]">Description</label>
                        <textarea
                            className="border-gray-200 border-2 py-2.5 rounded px-2 w-full resize-none h-[200px]"
                            onChange={handleInputChange}
                            name="description"
                        ></textarea>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <label className="font-medium text-[18px]">Category</label>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Category"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category.id} value={category.id}>
                                        {category.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <label className="font-medium text-[18px]">Subcategory</label>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Subcategory</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Subcategory"
                                value={selectedSubcategory}
                                name="subcategory_id"
                                onChange={(e) => {
                                    setSelectedSubcategory(e.target.value);
                                    handleInputChange(e); // Call handleInputChange here
                                }}
                            >
                                {filteredSubcategories.map((subcategory) => (
                                    <MenuItem key={subcategory.id} value={subcategory.id}>
                                        {subcategory.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="mt-[30px] mb-[15px]">
                        <FormControlLabel
                            control={<Checkbox name="published" onChange={handleCheckboxChange} />}
                            checked={productsData.published || false} // Provide a default value of false
                        />
                        <label className="font-medium">If you want your Product to be published, check this checkbox.</label>
                    </div>
                    <UploadImages />
                    <button onClick={postProducts} type="button">Create Product</button>
                </Box>
            </Modal>
        </div>
    );
};

export default ProductForm;
