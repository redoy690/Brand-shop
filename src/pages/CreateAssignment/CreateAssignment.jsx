import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const CreateAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { displayName, email } = user || '';
    const [selects, setSelects] = useState()
    const handleAddAssignment = event => {
        event.preventDefault();
        const form = event.target
        const title = form.title.value;
        const level = selects;
        const totalMarks = form.marks.value;
        const date = startDate
        const questiondetails = form.details.value;
        const photo = form.photo.value;
        const status = 'none'
        const questiondisplayName = displayName
        const questionEmail = email
        const answerlink = 'none'
        const answertext = 'none'
        const answerDisplayName = 'none'
        const answeremail = 'none'
        const givenmarks = 'none'
        const marksfeedback = 'none'
        const givermarksDisplayName = 'none'
        const givenmarksEmail = 'none'

        const newProduct =
        {
            title,
            level,
            totalMarks,
            date,
            questiondetails,
            photo,
            questiondisplayName,
            questionEmail,
            status,
            answerlink,
            answertext,
            answerDisplayName,
            answeremail,
            givenmarks,
            marksfeedback,
            givermarksDisplayName,
            givenmarksEmail
        }


        console.log(newProduct)
        // send data to the server
        fetch('https://group-study-assignment-server-iota.vercel.app/assignment', {
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
                    <h2 className="font-bold text-center  py-4 text-xl md:text-4xl text-success border-4 border-success rounded-2xl">CREATE ASSIGNMENT</h2>
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

                            <select className="select select-bordered w-[190px] max-w-xs" value={selects} onChange={e => setSelects(e.target.value)}>
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
                            {/* <label className="input-group">
                                <input type="date" placeholder="Date" name="date" className="input input-bordered w-full" required />
                            </label> */}
                            <DatePicker className="border-2 pl-2 py-2 rounded-xl" selected={startDate} onChange={(date) => setStartDate(date)}  />
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
                    <input type="submit" className="btn btn-block mb-10  bg-success text-white hover:border-success hover:bg-white hover:text-success font-bold text-xl md:text-3xl" value="Create Assignment" />
                </form>
            </div>
        </div>
    );
};

export default CreateAssignment;