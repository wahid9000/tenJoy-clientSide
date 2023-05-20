import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AboutUs = () => {
    return (
        <div className="mb-20" data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="200">
            <div className=" text-center space-y-5 mb-16" >
                <h2 className="text-5xl font-bold roboto">About us</h2>
                <p className="text-xl poppins">We provide good quality toys in minimum price for your childrens.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 mx-auto items-center">
                <div>
                    <img src="https://i.ibb.co/sjvMtdQ/child5.webp" alt="" />
                </div>
                <div className="space-y-7 text-center md:text-left mb-16">
                    <h2 className="roboto text-5xl font-semibold">We offer Amazing Toys with Premium Discounts</h2>
                    <p className="text-lg poppins mx-auto md:mx-0 w-10/12">Animal toys like giraffes, teddy bears, and horses captivate childrens hearts, offering comfort, companionship, and imaginative adventures. With their soft and huggable bodies, these toys become cherished friends, sparking creativity and creating lasting memories.
                    </p>
                    <button className="btn roboto btn-outline btn-warning text-xl font-bold w-48 h-16">Learn More</button>
                </div>
            </div>
        </div>

    );
};

export default AboutUs;