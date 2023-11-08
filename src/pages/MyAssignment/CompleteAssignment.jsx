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
            const res = await fetch(`https://group-study-assignment-server-iota.vercel.app/marks`)
            return res.json()
        }
    })
    console.log(user.email)
    if(isPending){
        return <span className="loading loading-spinner loading-lg ml-[50%] mt-[10%]"></span>
       }
    return (
        <div>
            <div >
                <div className='py-14'>
                    <h2 className="font-bold text-center  py-4 text-5xl text-success border-4 border-success rounded-2xl">MY COMPLETE ASSIGNMENT </h2>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-10">
                    {
                        myassign.filter(data=>{return data.questionEmail== user.email}).map(mycard => <CompleteCard key={mycard._id} mycard={mycard}></CompleteCard>)
                    }
                </div>
               
            </div>
        </div>
    );
};

export default CompleteAssignment;