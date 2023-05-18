import {  FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-orange-600 text-base-content">
            <div>
                <img src="Logo.png" className=" rounded-full w-60" alt="" />
                <p className='text-lg text-white'>TenJoy.<br />Best Toy Marketplace to pick toys for your child.</p>
                <div className='flex gap-2 text-lg text-white'>
                    <Link><FaGoogle></FaGoogle></Link>
                    <Link><FaInstagram></FaInstagram></Link> 
                    <Link><FaTwitter></FaTwitter></Link> 
                </div>
            </div>
            <div className="text-white">
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div className="text-white">
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div className="text-white">
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;