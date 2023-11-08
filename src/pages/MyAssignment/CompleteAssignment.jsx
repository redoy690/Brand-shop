import { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";
// import { useLoaderData } from "react-router-dom";
import CompleteCard from "./CompleteCard";
import { useQuery } from "@tanstack/react-query";

const CompleteAssignment = () => {
    const { user } = useContext(AuthContext)
 
    const {isPending, data:myassign} = useQuery({
        queryKey:['completeassignment'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/answers?questionEmail=${user.email}`)
            return res.json()
        }
    })
    
    if(isPending){
        return <span className="loading loading-spinner loading-lg ml-[50%] mt-[10%]"></span>
       }
    return (
        <div>
            <div >
                <div className='py-14'>
                    <h2 className="font-bold text-center  py-4 text-5xl text-success border-4 border-success rounded-2xl">MY COMPLETE ASSIGNMENT</h2>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-10">
                    {
                        myassign.filter(data => { return  data.status == "Complete" }).map(mycard => <CompleteCard key={mycard._id} mycard={mycard}></CompleteCard>)
                    }
                </div>
                {/* {
                    myassign.filter(data => { return data.status !== "Complete" }) && <p className='text-center pt-24 pb-48 text-2xl font-bold text-pink-700'>You do not have any Complete Assignment.</p>
                } */}
                {/* .filter(data => { return  data.status == "Complete" }) */}
            </div>
        </div>
    );
};

export default CompleteAssignment;