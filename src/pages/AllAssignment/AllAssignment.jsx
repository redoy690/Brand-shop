import { useEffect, useState } from "react";
import SingleAssignment from "./SingleAssignment";





const AllAssignment = () => {
    const [selects, setSelects] = useState('All')
    const [assignment, setAssignment] =useState()





    useEffect(() => {
        fetch('https://group-study-assignment-server-iota.vercel.app/assignment')
            .then(res => res.json())
            .then(data => setAssignment(data))
    }, [])

    // const {  data: assignment } = useQuery({
    //     queryKey: ['completeassignment'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://group-study-assignment-server-iota.vercel.app/assignment`)
    //         return res.json()
    //     }
    // })

    return (
        <div className="mb-12">
            <div className='py-14'>
                <h2 className="font-bold text-center mx-2  py-4 text-2xl md:text-5xl text-success border-4 border-success rounded-2xl">ALL ASSIGNMENT </h2>
            </div>
            <div className="text-end mr-4">
                <select className="select select-bordered w-3/6 md:w-1/6" value={selects} onChange={e => setSelects(e.target.value)}>
                    <option >All </option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-2 md:mx-8 gap-8 py-10">
                {
                    assignment?.filter(card => { return selects == 'All' ? card : selects == card.level }).map(assi => <SingleAssignment assignment={assignment} setAssignment={setAssignment} key={assi._id} assi={assi}></SingleAssignment>)
                }
            </div>

        </div>
    );
};

export default AllAssignment;