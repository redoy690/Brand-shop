import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";


const SingleAssignment = ({ assi, setAssignment, assignment }) => {
    const { user } = useContext(AuthContext)
    const { _id, title, level, totalMarks, date, questiondetails, photo, questiondisplayName, questionEmail } = assi
    console.log(level)

    const handleDelete = _id => {
        if (questionEmail == user.email) {


            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/assignment/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your product has been deleted.',
                                    'success'
                                )
                                const remaining = assignment.filter(mcart => mcart._id !== _id)
                                setAssignment(remaining)
                            }
                        })
                }
            })
        } else {
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your are Not able to delete others Assignment",

            });
        }
    }
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
                    <div className="text-center space-y-2 mt-10 mb-4 ">
                        <div className="w-1/2 mx-auto">
                            <Link to={`/viewassignment/${_id}`}>
                                <button className="btn text-xl btn-primary">View Assignment</button>
                            </Link>
                        </div>
                        <div className="w-1/2 mx-auto">
                            <Link to={`/updateassignment/${_id}`}>
                                <button className="btn text-xl btn-primary">Update Assignment</button>
                            </Link>
                        </div>
                        <div className="w-1/2 mx-auto">

                            <button onClick={() => handleDelete(_id)} className="btn text-xl btn-primary">Delete Assignment</button>

                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default SingleAssignment;