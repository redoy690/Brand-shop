
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const GiveMarks = () => {
    const { user } = useContext(AuthContext)
    const givermarksDisplayName = user?.displayName || '';
    const givenmarksEmail = user?.email || '';
    const navigate = useNavigate()
    const data = useLoaderData()
    const { _id, photo, answerlink, answertext } = data




    const handlegivenmark = event => {
        event.preventDefault();
        const form = event.target      
        const givenmarks = form.marks.value;     
        const marksfeedback = form.feedback.value;
        const status = 'Complete'

        const updateMarks = {givenmarks,marksfeedback,status,givermarksDisplayName,givenmarksEmail }


        console.log(updateMarks)


        fetch(`http://localhost:5000/answer/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateMarks)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success',
                        text: 'Submited Marks successfully',
                        icon: 'success',
                        confirmButtonText: 'Back'
                    })
                    navigate('/subbmittedassignment')
                }
            })


    }





    return (
        <div>
            <h2>Give Marks</h2>
            <div className='grid grid-cols-3 gap-4 my-4'>
                <div className="card bg-base-100 shadow-xl">
                    <h2 className='text-center text-xl my-4 font-bold'>Assignment Details</h2>
                    <figure><img src={photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <h2 className='text-center text-xl my-4 font-bold'>Answer Details</h2>
                    <div className="card-body">
                        <h2 className="card-title ">
                            <p className=''>Answer Link: {answerlink}</p>

                        </h2>
                        <p>Answer Text: {answertext}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <h2 className='text-center text-xl my-4 font-bold'>Marking Option</h2>
                    <form onSubmit={handlegivenmark}>
                        <div className="  bg-base-100">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Marks</span>
                                </label>
                                <input type="number" placeholder="Marks" name="marks" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Feedback</span>
                                </label>
                                <textarea className="textarea textarea-bordered" name="feedback" placeholder="Write something about result"></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Give Mark" className="btn btn-primary" />
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default GiveMarks;