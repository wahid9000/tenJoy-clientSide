import banner from '../../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className='w-full'>
            <div className='relative'>
                <img src={banner} alt="" className='w-full md:h-[550px]' />
                <div className='absolute w-7/12 top-8 md:top-32 mt-5 md:mt-12 pl-5 md:pl-10 space-y-7'>
                    <h2 className='text-4xl md:text-6xl w-11/12 font-bold'>Shop The Best Toy For Your Child</h2>
                    <p className='w-10/12 text-xl invisible md:visible'>TenJoy is a toy market place that have the best animal toys you will find in one single place.</p>
                </div>

            </div>
        </div>
    );
};

export default Banner;