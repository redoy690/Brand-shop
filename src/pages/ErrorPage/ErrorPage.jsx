
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-[15%]'>
            <h2 className='mb-5'>No Data Found</h2>
            <Link to={'/'}><button className='btn btn-secondary '>Home</button></Link>
        </div>
    );
};

export default ErrorPage;