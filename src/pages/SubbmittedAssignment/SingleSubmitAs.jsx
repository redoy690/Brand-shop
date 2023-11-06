import React from 'react';
import { Link } from 'react-router-dom';

const SingleSubmitAs = ({ data }) => {
    const {
        _id,
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
    } = data


    return (
        <div>
            <div className="card  bg-base-100 shadow-xl border-2">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title">
                            Assignment Title: {title}
                        </h2>
                        <div className="badge px-6 py-4 text-base border-red-400 text-pink-600 " >{status}</div>
                    </div>
                    <h2 className="card-title">Assignment level: {level}</h2>
                    <h2 className="card-title">Assignment marks: {totalMarks}</h2>
                    <h2 className="card-title">Assignment date: {date}</h2>
                    <h2 className="card-title">Assignment createdDisplayName: {questiondisplayName}</h2>
                    <h2 className="card-title">Assignment createdEmail: {questionEmail}</h2>
                    <p>{questiondetails}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                    <hr />
                    <h2 className="card-title max-w-full">Assignment answerlink: {answerlink}</h2>
                    <h2 className="card-title">Assignment answertext: {answertext}</h2>
                    <h2 className="card-title">Assignment answerDisplayName: {answerDisplayName}</h2>
                    <h2 className="card-title">Assignment answeremail: {answeremail}</h2>
                    <div>
                        {
                            givenmarks !== 'none' &&
                            <div>{ givenmarks}</div>
                        }
                    </div>
                </div>
                
                <div className="justify-center ">
                    {
                        status == "Pending" &&
                        <Link to={`/subbmittedassignment/${_id}`}>
                            <button className="ml-[25%] btn btn-secondary w-1/2 mb-10 btn-outline">Give Mark</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleSubmitAs;