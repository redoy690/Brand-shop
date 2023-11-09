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
            const res = await fetch(`https://group-study-assignment-server-iota.vercel.app/gmarks?questionEmail=${user.email}`)
            return res.json()
        }
    })
    console.log(user.email)
    if(isPending){
        return <span className="loading loading-spinner loading-lg ml-[50%] mt-[10%]"></span>
       }
    return (
        <div>
            <div className="py-14">
                <div className=''>
                    <h2 className="font-bold text-center  py-4 text-xl md:text-5xl text-success border-4 border-success rounded-2xl">MY COMPLETE ASSIGNMENT : {myassign.length}</h2>
                </div>
                <div className="grid grid-cols-1 gap-20 mt-20">
                    {
                        myassign.map(mycard => <CompleteCard key={mycard._id} mycard={mycard}></CompleteCard>)
                    }
                </div>
                <div>
                    {
                        myassign.length < 1 && <p className='text-center pt-24 pb-48 text-2xl font-bold text-pink-700'>You do not have any Complete Assignment.</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default CompleteAssignment;