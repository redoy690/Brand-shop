

const CompleteCard = ({mycard}) => {
    const { title, level, totalMarks, date, questiondetails, photo, displayName, email,status } = mycard
    return (
        <div>
            <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">{status}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"></button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CompleteCard;