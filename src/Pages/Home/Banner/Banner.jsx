
import banner from '../../../assets/images/banner1.png'

const Banner = () => {
    return (
        // <div className='w-full'>
        //     <div className='relative'>
        //         <img src={banner} alt="" className='w-full rounded-xl h-48 md:h-[550px]' />
        //         <div className='absolute w-7/12 top-0 md:top-32 mt-2 md:mt-6 pl-5 md:pl-10 space-y-7'>
        //             <h2 className='text-4xl roboto md:text-6xl w-11/12 font-bold'>Shop The Best Toy For Your Child</h2>
        //             <p className='w-10/12 poppins text-xl invisible md:visible'>TenJoy is a toy market place that have the best animal toys you will find in one single place.</p>
        //         </div>

        //     </div>
        // </div>
        <div>
            <img src={banner} alt="" className='w-full rounded-xl h-48 md:h-[700px]' />
        </div>
    );
};

export default Banner;