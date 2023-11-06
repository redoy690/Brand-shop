import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const CreateAssignment = () => {
    const navigate= useNavigate()
    const {user} = useContext(AuthContext)
    const {displayName,email} = user || '';
    const [selects, setSelects] = useState()
    const handleAddAssignment = event => {
        event.preventDefault();
        const form = event.target
        const title = form.title.value;
        const level = selects;
        const marks = form.marks.value;
        const date = form.date.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const newProduct = { title, level, marks, date, details, photo,displayName,email }


        console.log(newProduct)
        // send data to the server
        fetch('http://localhost:5000/assignment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Assignment added successfully',
                        icon: 'success',
                        confirmButtonText: 'Back'
                    })
                    navigate('/allassignment') 
                }
            })



    }
    return (
        <div>
            <div className="bg-[#fff] border px-4 md:px-10 lg:px-32 pb-10 my-10">
                <div className='py-14'>
                    <h2 className="font-bold text-center  py-4 text-5xl text-red-400 border-4 border-red-400 rounded-2xl">CREATE ASSIGNMENT</h2>
                </div>
                <form onSubmit={handleAddAssignment}>

                    <div className="md:flex gap-12 mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Assignment Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Assignment Title" name="title" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className='w-1/2'>
                            <label className="label">
                                <span className="label-text">Assignment Difficulty Level</span>
                            </label>

                            <select className="select select-bordered w-full max-w-xs" value={selects} onChange={e => setSelects(e.target.value)}>
                                <option >Select Level</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>
                        </div>
                    </div>

                    <div className="md:flex gap-12 mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Assignment Marks</span>
                            </label>
                            <label className="input-group">
                                <input type="number" placeholder="example 50,70,100" name="marks" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <label className="input-group">
                                <input type="date" placeholder="Date" name="date" className="input input-bordered w-full" required />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex gap-12 mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="url" placeholder="photo url" name="photo" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2"></div>
                    </div>

                    {/* pic row */}
                    <div className=" pb-14">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group w-full pr-12">
                                <textarea placeholder="Details" name="details" className='w-full h-[150px] textarea textarea-success'>
                                </textarea>

                            </label>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-block mb-10  bg-red-400 text-white hover:border-red-400 hover:bg-white hover:text-red-400 font-bold text-3xl" value="Create Assignment" />
                </form>
            </div>
        </div>
    );
};

export default CreateAssignment;