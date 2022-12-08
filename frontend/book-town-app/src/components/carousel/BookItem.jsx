import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const BookItem = ({book}) => {
    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate(`/detail/${book.id}`)
    }
    return (
        <div className=" border border-white rounded overflow-hidden h-[230px] md:h-[260px] lg:h-[290px] 2xl:h-[300px] shadow-md shadow-black " onClick={handleClick}>
            <div className="h-full">
                {/* <h1>{item.categories[0].name}</h1> */}
                <img
                    className="w-full h-full"
                    src={book.cover}
                    alt={book.thumbnail}
                />
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default BookItem