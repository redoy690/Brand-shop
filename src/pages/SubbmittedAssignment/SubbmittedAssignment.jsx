import { useEffect, useState } from "react";
import SingleSubmitAs from "./SingleSubmitAs";



const SubbmittedAssignment = () => {
    const [data, setData] = useState([])
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
        </div>
    );
};

export default SubbmittedAssignment;