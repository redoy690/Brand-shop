import { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import PendingCard from "./PendingCard";


const PendingAssignment = () => {
    const { user } = useContext(AuthContext)
    const mail = user.email
    const myassign = useLoaderData()
    
   
    
    return (
        <div>
            <div >
                <div className='py-14'>
                    <h2 className="font-bold text-center  py-4 text-5xl text-success border-4 border-success rounded-2xl">MY PENDING ASSIGNMENT</h2>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-10">
                    {
                        myassign.filter(data => { return data.questionEmail == mail && data.status == "Pending" }).map(mycard => <PendingCard key={mycard._id} mycard={mycard}></PendingCard>)
                    }
                </div>
                <div>
                    {/* {
                        myassign.filter(data => { return data.questionEmail !== mail && data.status !== "Pending" }) && <p className='text-center pt-24 pb-48 text-2xl font-bold text-pink-700'>You do not have any Pending Assignment.</p>
                    } */}

                    
                </div>
            </div>
        </div>
    );
};

export default PendingAssignment;