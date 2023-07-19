import Authenticated from "@/Layouts/AuthenticatedLayout";
import ProductsLayout from "@/Layouts/ProductsLayout";
import ProductCard from "@/Components/ProductCard/ProductCard.jsx";
import {useState} from "react";


export default function Products(props){
    const products = props.products.data
    console.log(props.products.data,"dataaaaaaaaaaaaaaaaaaaa")
    const [currPage, setCurrPage] = useState(1);
    const lastIndex = currPage * 6;
    const firstIndex = lastIndex - 6;
    const records = products.slice(firstIndex, lastIndex);
    const npage = Math.ceil(products.length / 6)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const changePage = (id) => {
        setCurrPage(id)
    }


    const prePage = () => {
        if(currPage !== 1){
            setCurrPage(currPage - 1)
        }
    }

    const nextPage = () => {
        if(currPage !== npage){
            setCurrPage(currPage + 1)
        }
    }
    return (
        <ProductsLayout>
            <div className="flex  justify-center px-[30px] flex-wrap gap-6 md:justify-between md:px-0 ">
                {records.map((product) => (
                    <ProductCard key={product.id} props={product}/>
                ))}
            </div>
            <div>
                <div className="flex items-center justify-center mt-6">
                    <button
                        className="px-4 py-2 mr-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:text-gray-700 focus:outline-none"
                        onClick={prePage}
                    >
                        Prev
                    </button>
                    {numbers.map((n, i) => (
                        <button
                            key={i}
                            className={`px-4 py-2 mx-1 text-sm font-medium text-white rounded-md focus:outline-none ${
                                currPage === n ? 'bg-blue-500' : 'bg-gray-500 hover:bg-gray-700'
                            }`}
                            onClick={() => changePage(n)}
                        >
                            {n}
                        </button>
                    ))}
                    <button
                        className="px-4 py-2 ml-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:text-gray-700 focus:outline-none"
                        onClick={nextPage}
                    >
                        Next
                    </button>
                </div>
            </div>
        </ProductsLayout>
    )
}
