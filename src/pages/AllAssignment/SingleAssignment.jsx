import { Link } from "react-router-dom";


const SingleAssignment = ({ assi }) => {
    const { _id,title, level, totalMarks, date, questiondetails, photo, questiondisplayName, questionEmail } = assi
    console.log(level)
    return (
        <div>

            <div className="card bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" className="h-[400px] w-full" /></figure>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title">Title: {title}</h2>
                        {/* <div className="badge badge-outline px-8 py-4 bg-yellow-200 text-lg text-red-500">{status}</div> */}
                    </div>
                    <h2 className="card-title">Level: {level}</h2>


                    <h2 className="card-title">Total Marks: {totalMarks}</h2>
                    <h2 className="card-title">Date: {date}</h2>
                    <h2 className="card-title"> Crated By: {questiondisplayName} <span className="text-sm">({questionEmail})</span></h2>

                    <p className="card-title">Description: <span className="text-base">{questiondetails}</span></p>
                    <div className="card-actions justify-center mt-10 mb-4">
                        <Link to={`/viewassignment/${_id}`}>
                            <button className="btn text-xl btn-primary">View Assignment</button>
                        </Link>
                        <Link to={`/updateassignment/${_id}`}>
                            <button className="btn text-xl btn-primary">Update Assignment</button>
                        </Link>
                        
                    </div>
                </div>
            </div>





        </div>
    );
};

export default SingleAssignment;