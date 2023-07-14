import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import ProdImg from '../assets/laptop.jpg';
import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "@inertiajs/react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 14,
    p: 4,
    maxHeight: '95vh',
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    scrollbarColor: '#888 transparent',
    border:0,
    borderRadius:"4px",
    minHeight:"80vh"
};

const SearchModal = ({open, close}) => {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState([])
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
    return(
        <div>
            <Modal
                open={open}
                onClose={close}
            >
                <Box sx={style}>
                    <input
                        placeholder="Search Product"
                        className="bg-transparent focus:outline-none border-b-2 w-full pb-2"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="mt-4">
                        {products.length > 0 && products.map((product) => (
                            <Link href={`/products/${product.id}`}>
                            <div className="flex gap-4 hover:bg-gray-200 p-2 shadow-sm" >
                                <img src={product.product_images[0].name} className="w-[70px] h-[60px] rounded"/>
                                <div className="flex flex-col justify-between">
                                    <p className="font-semibold">{product.name}</p>
                                    <p>{product.price}</p>
                                </div>
                            </div>
                            </Link>
                        ))}

                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default SearchModal
