import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import ProdImg from '../assets/laptop.jpg';
import {useState, useEffect} from "react";


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
                    />
                    <div className="mt-4">
                        <div className="flex gap-4 hover:bg-gray-200 p-2 ">
                            <img src={ProdImg} className="w-[70px] h-[60px] rounded"/>
                            <div className="flex flex-col justify-between">
                                <p className="font-semibold">MackBook Air 13</p>
                                <p>3900$</p>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default SearchModal
