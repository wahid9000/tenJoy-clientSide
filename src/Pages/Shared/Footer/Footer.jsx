import { FaAddressCard, FaGoogle, FaInstagram, FaMailchimp, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/Logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-orange-600 text-base-content h-full md:h-64 items-center">
                <div>
                    <Link to='/'>
                        <div><img src={logo} className=" rounded-full w-48" alt="" /></div>
                    </Link>
                    <p className='text-lg text-white roboto'>TenJoy.<br />Best Toy Marketplace to pick toys for your child.</p>
                </div>

                <div className="text-white roboto">
                    <span className="footer-title roboto">Contact Information</span>
                    <div className='flex gap-1 items-center roboto'>
                        <FaPhoneAlt></FaPhoneAlt>
                        <Link>Phone: +880 01725 454859</Link>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <FaMailchimp></FaMailchimp>
                        <Link>Email: tenjoy_10@email.com</Link>
                    </div>
                </div>

                <div className="text-white roboto">
                    <span className="footer-title">Address</span>
                    <div className='flex gap-1 items-center'>
                        <FaAddressCard></FaAddressCard>
                        <Link>Address: 25/A, Baridhara, Mirpur, Dhaka</Link>
                    </div>
                    <Link>Available ( 10.00PM to 5.00 PM)</Link>

                </div>

                <div className="text-white roboto">
                    <span className="footer-title">Follow Us</span>
                    <div className='flex gap-4 text-lg text-white'>
                        <Link to="https://www.google.com/"><FaGoogle></FaGoogle></Link>
                        <Link to='https://www.facebook.com/'><FaInstagram></FaInstagram></Link>
                        <Link to='https://twitter.com/'><FaTwitter></FaTwitter></Link>
                    </div>
                </div>
            </footer>
            <div className='text-center bg-orange-600 text-white pb-5'>
                <h2>Copyright © 2023 TenJoy</h2>
            </div>
        </div>
    );
};

export default Footer;