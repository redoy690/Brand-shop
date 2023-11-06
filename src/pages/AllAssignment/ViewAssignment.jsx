
import { Link, useLoaderData } from 'react-router-dom';

const ViewAssignment = () => {
    const assignment = useLoaderData()
    const { _id,title, level, marks, date, details, photo, questiondisplayName, questionEmail  } = assignment

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl my-10">
                <figure><img src={photo} alt="Shoes" className='h-[90vh] w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">{level}</div>
                    </h2>
                    <h2 className="card-title">{marks}</h2>
                    <h2 className="card-title">{date}</h2>
                    <h2 className="card-title">{questiondisplayName}</h2>
                    <h2 className="card-title">{questionEmail}</h2>

                    <p>{details}</p>
                    {/* <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div> */}
                    <div className="card-actions justify-start my-4">
                        <Link to={`/viewassignment/${_id}/answerform`}>
                            <button className="btn btn-primary text-xl px-10 ">Take Assignment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewAssignment;