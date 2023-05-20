import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Connect = () => {
    return (
        <div className="rounded-lg mt-28 mb-60">
            <div className="text-center mb-16" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100">
                <h2 className="text-5xl font-bold mb-4 roboto">Connect With Us</h2>
                <p className="text-xl w-2/3 mx-auto poppins">We have achieved amazing response from our sellers, customers who helped us to grow. We are Thankful! Stay with us and keep exploring our site for more amazing deals.</p>
            </div>
            <div>
                <div className="h-[600px] w-full rounded-lg" style={{ backgroundImage: "url(https://previews.123rf.com/images/rawpixel/rawpixel1612/rawpixel161236658/67626320-casual-children-cheerful-cute-friends-kids-joy-concept.jpg)", backgroundSize: "cover" }} data-aos="fade-bottom"
                    data-aos-duration="1000"
                    data-aos-delay="100">

                    <div className="h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] pt-16  rounded-lg" >

                        <div className='bg-orange-600 text-white text-center w-1/2 mx-auto mt-80 rounded-lg h-96' data-aos="fade-bottom"
                    data-aos-duration="1000"
                    data-aos-delay="100">
                            <div className='pt-16'>
                                <h2 className='font-bold text-4xl mb-1 roboto '>Subscribe </h2>
                                <p className=' font-semibold text-lg mb-5'>We will send you new discounts, offers and <br /> amazing vouchers every week.</p>

                                <input type="text" placeholder="Write your email" className="input mb-3 roboto input-bordered rounded-md w-72 md:w-80 max-w-xs text-black font-semibold" /> <br />
                                <button className='btn btn-warning roboto bg-white text-black rounded-md mb-5'>Share</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Connect;