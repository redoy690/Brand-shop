import { useContext } from "react";
import MyAssCard from "./MyAssCard";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";


const MyAssignment = () => {
    const { user } = useContext(AuthContext)
    const mail = user.email
    const myassign = useLoaderData()

    console.log(myassign)
    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {
                    myassign.filter(data => { return data.questionEmail == mail }).map(mycard => <MyAssCard key={mycard.id} mycard={mycard}></MyAssCard>)
                }
            </div>
            {/* {
                myassign.filter(data => { return data.questionEmail == mail }) < 1 && <p className='text-center pt-24 pb-48 text-2xl font-bold text-pink-700'>You do not have any Running Assignment.</p>
            } */}
        </div>
    );
};

export default MyAssignment;