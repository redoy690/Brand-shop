import { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import CompleteCard from "./CompleteCard";

const CompleteAssignment = () => {
    const { user } = useContext(AuthContext)
    const mail = user.email
    const myassign = useLoaderData()
    return (
        <div>
            <div >
                <div className='py-14'>
                    <h2 className="font-bold text-center  py-4 text-5xl text-success border-4 border-success rounded-2xl">MY COMPLETE ASSIGNMENT</h2>
                </div>
                <div className="grid grid-cols-1 gap-8 mt-10">
                    {
                        myassign.filter(data => { return data.questionEmail == mail && data.status == "Complete" }).map(mycard => <CompleteCard key={mycard.id} mycard={mycard}></CompleteCard>)
                    }
                </div>
                {/* {
                    myassign.filter(data => { return data.status !== "Complete" }) && <p className='text-center pt-24 pb-48 text-2xl font-bold text-pink-700'>You do not have any Complete Assignment.</p>
                } */}
            </div>
        </div>
    );
};

export default CompleteAssignment;