import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className='mt-5 md:mt-20 text-center md:flex items-center justify-center mx-auto'>
            <div>
                <h2 className='text-7xl font-bold'>{status || 404} <small className='text-2xl text-orange-500'>error</small></h2>
                <p className='text-xl mt-4'>OoPs! The Page your are looking for is unavailable.</p>
                <p className='text-3xl mt-5'>{error.message}</p>
                <Link to="/"><button className='btn-md bg-orange-400 text-white mt-10 hover:bg-orange-500 rounded-xl'>Back To Home Page</button></Link>
            </div>
            <div>
                <img src="https://i.ibb.co/hd9QdR9/Untitled-design-12.png" alt="" className='w-60 md:w-80 mx-auto' />
            </div>


        </div>
    );
};

export default ErrorPage;