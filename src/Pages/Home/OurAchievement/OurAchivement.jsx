import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const OurAchivement = () => {
    return (
        <div className="mb-20">
            <div className="text-center" data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100">
                <h2 className="text-5xl font-bold mb-4 roboto">Our Achievement </h2>
                <p className="text-xl w-2/3 mx-auto poppins">We have achieved amazing response from our sellers, customers who helped us to grow. We are Thankful! Stay with us and keep exploring our site for more amazing deals.</p>
            </div>

            <div className="flex-row md:flex justify-center items-center mt-16 px-5 space-y-5">

                <div className="h-[300px] w-full rounded-l-lg" style={{ backgroundImage: "url(https://media.istockphoto.com/id/683888694/photo/lonely-teddy-bear-sitting-in-the-dark-room.jpg?s=170667a&w=0&k=20&c=D_k-cyNOV3FtZmoZExchsd2938DVUMqG_Ku-x0ouI4c=)", backgroundSize: "cover" }} data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="100">
                    <div className="h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] pt-16  rounded-lg" >
                        <h2 className="text-8xl font-bold text-center text-white mx-auto mb-4 roboto">1000+</h2>
                        <h3 className="text-4xl font-bold text-center roboto text-amber-400 mx-auto">Registered <br />
                            Users</h3>
                    </div>
                </div>

                <div className="h-[500px] w-full rounded-lg" style={{ backgroundImage: "url(https://i.etsystatic.com/42083975/r/il/6567b9/4809094130/il_fullxfull.4809094130_r2bk.jpg)", backgroundSize: "cover" }} data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100">
                    <div className="h-full bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] pt-16 rounded-lg" >
                        <h2 className="text-8xl font-bold text-center text-white mx-auto mb-4 roboto">2000+</h2>
                        <h3 className="text-4xl font-bold text-center text-amber-400 mx-auto toboto">Amazing Toy <br />
                            Products</h3>
                    </div>
                </div>


                <div className="h-[300px] w-full rounded-r-lg" style={{ backgroundImage: "url(https://thumbs.dreamstime.com/b/white-teddy-bear-sitting-dark-background-white-teddy-bear-dark-background-diferent-poses-toy-bear-177392194.jpg)", backgroundSize: "cover" }} data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="100">
                    <div className="h-full bg-gradient-to-t from-[#151515] to-[rgba(21, 21, 21, 0)] pt-16 rounded-lg" >
                        <h2 className="text-8xl font-bold text-center text-white mx-auto mb-4 roboto">500+</h2>
                        <h3 className="text-4xl font-bold text-center text-amber-400 mx-auto roboto">Registered <br />
                            Sellers</h3>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default OurAchivement;