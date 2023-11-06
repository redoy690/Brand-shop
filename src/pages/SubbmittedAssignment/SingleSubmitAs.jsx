import React from 'react';

const SingleSubmitAs = ({ data }) => {
    const { answerlink, answertext, answerDisplayName, answeremail, title, level, marks, date, details, photo, createdDisplayName, createdEmail, status } = data
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
                    <h2 className="card-title">Assignment marks: {marks}</h2>
                    <h2 className="card-title">Assignment date: {date}</h2>
                    <h2 className="card-title">Assignment createdDisplayName: {createdDisplayName}</h2>
                    <h2 className="card-title">Assignment createdEmail: {createdEmail}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                    <hr />
                    <h2 className="card-title">Assignment answerlink: {answerlink}</h2>
                    <h2 className="card-title">Assignment answertext: {answertext}</h2>
                    <h2 className="card-title">Assignment answerDisplayName: {answerDisplayName}</h2>
                    <h2 className="card-title">Assignment answeremail: {answeremail}</h2>
                </div>
            </div>
        </div>
    );
};

export default SingleSubmitAs;