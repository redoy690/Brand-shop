import  { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateAssignment = () => {
    const assignment = useLoaderData()
    const { _id, title, level, totalMarks, date, questiondetails, photo, displayName, email } = assignment


    const navigate = useNavigate()


    const [selects, setSelects] = useState(level)
    const handleupdateAssignment = event => {
        event.preventDefault();
        const form = event.target
        const title = form.title.value;
        const level = selects;  
        const totalMarks = form.marks.value;
        const date = form.date.value;
        const questiondetails = form.details.value;
        const photo = form.photo.value;

        const updateassignment = { title, level, totalMarks, date, questiondetails, photo, displayName, email }


        console.log(updateassignment)


        fetch(`http://localhost:5000/assignment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateassignment)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Product Updated successfully',
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
                    <h2 className="font-bold text-center  py-4 text-5xl text-red-400 border-4 border-red-400 rounded-2xl">UPDATE ASSIGNMENT</h2>
                </div>
                <form onSubmit={handleupdateAssignment}>

                    <div className="md:flex gap-12 mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Assignment Title</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Assignment Title" defaultValue={title} name="title" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className='w-1/2'>
                            <label className="label">
                                <span className="label-text">Assignment Difficulty Level</span>
                            </label>

                            <select className="select select-bordered w-full max-w-xs" defaultValue={level} value={selects} onChange={e => setSelects(e.target.value)}>
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
                                <input type="number" placeholder="example 50,70,100" defaultValue={totalMarks} name="marks" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <div className='w-2/3'>
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <label className="input-group">
                                    <input type="date" placeholder="Date" defaultValue={date} name="date" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex gap-12 mb-6">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="url" placeholder="photo url" defaultValue={photo} name="photo" className="input input-bordered w-full" required />
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
                                <textarea placeholder="Details" defaultValue={questiondetails} name="details" className='w-full h-[150px] textarea textarea-success'>
                                </textarea>

                            </label>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-block mb-10  bg-red-400 text-white hover:border-red-400 hover:bg-white hover:text-red-400 font-bold text-3xl" value="Update Assignment" />
                </form>
            </div>
        </div>
    );
};

export default UpdateAssignment;