import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@inertiajs/react";
import SearchIcon from '@mui/icons-material/Search';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 14,
    maxHeight: '95vh',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 transparent',
    border: 0,
    borderRadius: "4px",
    minHeight: "80vh"
};


const SearchModal = ({ open, close }) => {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${window.location.protocol}//${window.location.host}/api/products`, {
                params: {
                    search: query
                },
            })
            .then((res) => {
                setProducts(res.data.data)
                console.log(res)
            });
    }, [query]);

    const highlightText = (text, query) => {
        const regex = new RegExp(`(${query})`, "gi");
        return text.replace(regex, "<span style='color: #008bd2' '>$1</span>");
    };


    return (
        <div>
            <Modal
                open={open}
                onClose={close}
            >
                <Box sx={style}>
                    <div className="flex border-b-2  p-4 items-center justify-between">
                        <div className="flex items-center gap-4">
                            <SearchIcon sx={{ color: "gray" }} />
                            <input
                                placeholder="Search Product"
                                className="bg-transparent focus:outline-none  w-full "
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>
                        <button className="text-[12px] font-extrabold border-2 px-1 py-0.5 rounded dark:group-hover:shadow" onClick={close}>ESC</button>
                    </div>
                    <div className="mt-4 p-4">
                        {products.length > 0 && products.map((product) => (
                            <Link href={`/products/${product.id}`} key={product.id}>
                                <div className="flex w-full justify-between items-center  bg-gray-50 p-3 shadow-sm rounded mb-4 hover:bg-gray-200">
                                    <div className="flex gap-4">
                                        <img src={product.product_images[0].name} className="w-[70px] h-[60px] rounded" />
                                        <div className="flex flex-col justify-between">
                                            <p className="font-semibold" dangerouslySetInnerHTML={{ __html: highlightText(product.name, query) }} />
                                            <p>{product.quote}</p>
                                        </div>
                                    </div>
                                    <NavigateNextIcon />
                                </div>
                            </Link>
                        ))}
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default SearchModal;
