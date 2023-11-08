import { useContext } from "react";
import MyAssCard from "./MyAssCard";
import { AuthContext } from "../../providers/AuthProvider";

import { useQuery } from "@tanstack/react-query";


const MyAssignment = () => {
    const { user } = useContext(AuthContext)
    const { isPending, data: myassign } = useQuery({
        queryKey: ['completeassignment'],
        queryFn: async () => {
            const res = await fetch(`https://group-study-assignment-server-iota.vercel.app/assignments?questionEmail=${user.email}`)
            return res.json()
        }
    })
    if (isPending) {
        return <span className="loading loading-spinner loading-lg ml-[50%] mt-[10%]"></span>
    }
    return (
        <div >
            <div className='py-14'>
                <h2 className="font-bold text-center  py-4 text-5xl text-success border-4 border-success rounded-2xl">MY RUNNING ASSIGNMENT</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
                {
                    myassign.map(mycard => <MyAssCard key={mycard._id} mycard={mycard}></MyAssCard>)
                }
            </div>
            {
                myassign.length < 1 && <p className='text-center pt-24 pb-48 text-2xl font-bold text-pink-700'>You do not have any Running Assignment.</p>
            }
        </div>
    );
};

export default MyAssignment;