
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const AnswerForm = () => {
    const navigate = useNavigate()
    const assignment = useLoaderData()
    const {  title, totalMarks, questiondisplayName, questionEmail, level, date, questiondetails, photo } = assignment
    const { user } = useContext(AuthContext)
    const answerDisplayName = user?.displayName || '';
    const answeremail = user?.email || '';


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const answerlink = form.link.value
        const answertext = form.text.value
        const status = 'Pending'
        const givenmarks = 'none'
        const marksfeedback = 'none'
        const givermarksDisplayName ='none'
        const givenmarksEmail ='none'
        const allDetails =
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

        fetch('http://localhost:5000/answer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allDetails)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Answer submited successfully',
                        icon: 'success',
                        confirmButtonText: 'Back'
                    })
                    navigate('/allassignment')
                }
            })




    }




    return (
        <div className=' my-10 w-full md:w-1/2 mx-auto'>
            <div className='border-2 rounded-xl mb-4'>
                <h1 className='text-center mt-4 text-2xl md:text-3xl font-bold'>Assignment Information</h1>
                <div className='m-4 text-center mb-8'>
                    <h1 className='text-xl mb-2'>Assignment Title: {title}</h1>
                    <h1 className='text-xl mb-2'>Assignment Marks: {totalMarks}</h1>
                    <h1 className='text-xl mb-2'>Assignment Created By: {questiondisplayName}</h1>
                    ({questionEmail})

                </div>
            </div>
            <div className='border-2 rounded-xl'>
                <h1 className='text-center mt-4 md:text-3xl text-2xl font-bold'>Submit Your Answer Here</h1>
                <div className="card flex-shrink-0 w-full   ">
                    <form className="card-body " onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PDF Link</span>
                            </label>
                            <input type="url" name="link" placeholder="PDF Link" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text">Note Text</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-28" name="text" placeholder="Note Text" required></textarea>

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className='btn btn-success text-white text-2xl hover:text-success hover:bg-white font-bold' value="Submit Answer" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AnswerForm;