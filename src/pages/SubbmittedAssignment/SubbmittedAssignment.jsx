import { useEffect, useState } from "react";
import SingleSubmitAs from "./SingleSubmitAs";
import { useLoaderData } from "react-router-dom";
import './SubmittedAss.css'



const SubbmittedAssignment = () => {
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
    }





    useEffect(() => {
        fetch('http://localhost:5000/answer')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <div>
            <div className='py-14'>
                <h2 className="font-bold text-center  py-4 text-5xl text-red-400 border-4 border-red-400 rounded-2xl">SUBMITTED ASSIGNMENT</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-10">
                {
                    data.map(data => <SingleSubmitAs key={data._id} data={data}></SingleSubmitAs>)
                }
            </div>
            <div className="pagination">
                <p>{currentPage}</p>
                {
                    pages.map(page => <button onClick={() => setCurrentPage(page)} className="btn" key={page}>{page}</button>)
                }
                <select value={itemsPerPage}  onChange={handleItemsperpage} id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
    );
};

export default SubbmittedAssignment;