import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import useTitle from '../../../hooks/useTitle';
AOS.init();

const Home = () => {
    useTitle(' Home')
    return (
        <div>
            <div
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="100"
            >
                <Banner></Banner>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="800"
            >
                <Gallery></Gallery>
            </div>


            <Category></Category>
            <AboutUs></AboutUs>


        </div>
    );
};

export default Home;