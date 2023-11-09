import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import './SubmittedAss.css'
import SubmitCompleteasCard from "./SubmitCompleteasCard";

const SubmitCompleteas = () => {
    const [data, setData] = useState([])
    const { count } = useLoaderData()
    const [itemsPerPage, setItemsPerpage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0)
    const numberOfPages = Math.ceil(count / itemsPerPage)

    const pages = [...Array(numberOfPages).keys()]

    const handleItemsperpage = e => {
        console.log(e.target.value)
        const val = parseInt(e.target.value)
        setItemsPerpage(val)
        setCurrentPage(0)
    }
    const handlePrevpage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1)
            setCurrentPage(currentPage + 1)
    }



    useEffect(() => {
        fetch(`https://group-study-assignment-server-iota.vercel.app/result?page=${currentPage}&size=${itemsPerPage}'`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [currentPage, itemsPerPage])
    console.log(data)
    return (
        <div className="py-16">
            <div className=''>
                <h2 className="font-bold text-center  py-4 text-xl md:text-5xl text-success border-4 border-success rounded-2xl">COMPLETE ASSIGNMENT : {count}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 my-20">
                {
                    data.map(data => <SubmitCompleteasCard key={data._id} data={data}></SubmitCompleteasCard>)
                }
            </div>
            <div className="pagination mt-24">

                <button onClick={handlePrevpage}>Prev</button>
                {
                    pages.map(page => <button onClick={() => setCurrentPage(page)} className={currentPage == page ? 'selected' : undefined} key={page}>{page}</button>)
                }
                <button onClick={handleNextPage}>Next</button>
                <select className="border-2 border-black rounded-lg p-2 mt-4" value={itemsPerPage} onChange={handleItemsperpage} id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default SubmitCompleteas;