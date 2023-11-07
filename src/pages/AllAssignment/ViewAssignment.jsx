
import { Link, useLoaderData } from 'react-router-dom';

const ViewAssignment = () => {
    const assignment = useLoaderData()
    const { _id, title, level, totalMarks, date, questiondetails, photo, questiondisplayName, questionEmail } = assignment

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl my-10">
                <figure><img src={photo} alt="Shoes" className='h-[90vh] w-full' /></figure>
                <div className="lg:mx-4">
                    <div className="bg-white rounded-2xl mt-4 ">
                        <div className="p-4">
                            <h2 className="font-bold text-2xl mb-4">Assignment Title: {title}</h2>

                            <div className="flex">
                                <h3 className="w-[150px]">Assignment level</h3>
                                <h3>: {level}</h3>
                            </div>
                            <div className="flex">
                                <h3 className="w-[150px]">Assignment Marks</h3>
                                <h3>: {totalMarks}</h3>
                            </div>
                            <div className="flex">
                                <h3 className="w-[150px]">Assignment Date</h3>
                                <h3>: {date}</h3>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-bold text-xl">Assignment Description: <span className='font-normal text-base'>{questiondetails}</span></h3>

                            </div>
                        </div>
                    </div>
                    <div className="ml-4 mx-4">
                        <div className="border-2 w-full md:w-[260px] rounded-xl px-8 py-2 text-center">
                            <p className="text-xs">Assignment Created:</p>
                            <p>UserName: {questiondisplayName}</p>
                            <p className="text-xs">({questionEmail})</p>
                        </div>
                    </div>

                    
                    <div className="card-actions justify-start my-4 ml-4">
                        <Link to={`/viewassignment/${_id}/answerform`}>
                            <button className="btn btn-primary  text-xl px-10 ">Take Assignment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ViewAssignment;