
import { useContext } from 'react';
import {  useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';







const GiveMarks = () => {
    const { user } = useContext(AuthContext)
    const givermarksDisplayName = user?.displayName || '';
    const givenmarksEmail = user?.email || '';
    const navigate = useNavigate()
    const data = useLoaderData()
    const { _id,
        title,
        level,
        totalMarks,
        date,
        questiondetails,
        photo,
        questiondisplayName,
        questionEmail,
        answerlink,
        answertext,
        answerDisplayName,
        answeremail,

    } = data




    const handlegivenmark = event => {
        event.preventDefault();
        const form = event.target
        const givenmarks = form.marks.value;
        const marksfeedback = form.feedback.value;
        const status = 'Complete'

        const updateMarks = {
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


        console.log(updateMarks)


  



        // send data to the server
        fetch('https://group-study-assignment-server-iota.vercel.app/marks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateMarks)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Submited Marks successfully',
                        icon: 'success',
                        confirmButtonText: 'Back'
                    })
                    navigate('/submitcompleteas')
                }
            })




        fetch(`https://group-study-assignment-server-iota.vercel.app/answers/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
            })




    }





    return (

        <div className=''>
            <h2 className="font-bold text-center  py-4 text-5xl text-success border-4 border-success rounded-2xl  my-8">GIVE MARKS</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
                <div className="card bg-base-100 shadow-xl border-2 ">
                    <h2 className='text-center text-2xl my-4 font-bold'>ASSIGNMENT DETAILS</h2>
                    <figure><img src={photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="">
                            <div className="">
                                <h3 className="font-bold">Assignment Title    :
                                    <span className='ml-1 font-normal'> {title}</span>
                                </h3>
                            </div>
                            <div className="flex">
                                <h3 className="font-bold">Assignment Mark: </h3>
                                <h3 className='ml-2 font-normal'>  {totalMarks}</h3>
                            </div>
                            <div className="">
                                <h3 className="font-bold">Assignment Description:</h3>
                                <p className='font-normal'> {questiondetails.slice(0, 200)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl border-2 ">
                    <h2 className='text-center text-2xl my-4 font-bold border-b-2 pb-4'>ANSWER DETAILS</h2>
                    <div className="card-body">
                        <h2 className=" ">
                            <p className='text-lg font-bold'>Answer Link:<br/> <span className='text-sm font-normal'>{answerlink.slice(0, 40)}</span></p>
                        </h2>
                        <p className='text-lg font-bold mt-4'>Node Text: <span className='font-normal'>{answertext}</span></p>
                    </div>
                </div>
                <div className="card shadow-xl border-2 ">
                    <h2 className='text-center text-2xl my-4 font-bold border-b-2 pb-4 '>MARKING OPTION</h2>
                    <form onSubmit={handlegivenmark}>
                        <div className="  bg-base-100 mx-8">
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text text-lg">Marks</span>
                                </label>
                                <input type="number" placeholder="Submit marks here" name="marks" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text mt-4 text-lg">Feedback</span>
                                </label>
                                <textarea className="textarea textarea-bordered" name="feedback" placeholder="Write something about result"></textarea>
                            </div>
                            <div className="form-control mt-8">
                                <input type="submit" value="Give Mark" className="btn btn-success mb-8 text-white font-bold text-xl hover:text-success  hover:bg-white" />
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default GiveMarks;