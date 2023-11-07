import { useEffect, useState } from "react";
import SingleAssignment from "./SingleAssignment";




const AllAssignment = () => {
    const [selects, setSelects] = useState('All')
    const [assignment, setAssignment] = useState([])
  



      
    useEffect(() => {
        fetch('http://localhost:5000/assignment')
            .then(res => res.json())
            .then(data => setAssignment(data))
    }, [])
    console.log(selects)
    return (
        <div>
            <div className='py-14'>
                <h2 className="font-bold text-center   py-4 text-5xl text-red-400 border-4 border-red-400 rounded-2xl">ALL ASSIGNMENT</h2>
            </div>
            <div className="text-end">
                <select className="select select-bordered w-1/6" value={selects} onChange={e => setSelects(e.target.value)}>
                    <option >All </option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 py-10">
                {
                    assignment.filter(card => { return selects == 'All' ? card : selects == card.level }).map(assi => <SingleAssignment assignment={assignment} setAssignment={setAssignment} key={assi._id} assi={assi}></SingleAssignment>)
                }
            </div>
            
        </div>
    );
};

export default AllAssignment;