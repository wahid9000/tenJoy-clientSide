import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import logo from '../../../assets/images/Logo.png'

const NavBar = () => {

    const { logOut, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: 'LogOut?',
            text: "You will be redirected to the Login Page!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'LogOut'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(
                        navigate('/login')
                    )
                    .catch(error => {
                        console.log(error);
                    })
                Swal.fire(
                    'Logged Out!',
                    'You have Logged Out Successfully.',
                    'success'
                )
            }
        })
    }


    return (
        <div>
            <div className="navbar bg-transparent py-8 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 roboto rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link to="/allToys">All Toys</Link></li>
                            {
                                user &&
                                <div className="items-center">
                                    <li><Link to="/myToys">My Toys</Link></li>
                                    <li><Link to="/addToy">Add A Toy</Link></li>
                                </div>
                            }
                            <li><Link to="/blogs">Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to='/'><img src={logo} className="w-96 md:w-60" alt="" /></Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal roboto px-1 font-semibold text-lg">
                        <li><Link to='/' className="text-xl italic font-extrabold">TenJoy</Link></li>
                        <li><Link>Home</Link></li>
                        <li><Link to="/allToys">All Toys</Link></li>
                        {
                            user &&
                            <div className="flex items-center">
                                <li><Link to="/myToys">My Toys</Link></li>
                                <li><Link to="/addToy">Add A Toy</Link></li>
                            </div>
                        }
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user &&
                        <div className="tooltip tooltip-bottom mr-2" data-tip={user.displayName}>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                        </div>
                    }
                    {
                        user ?
                            <button onClick={handleLogout} className="btn roboto btn-outline btn-warning hover:bg-red-900 hover:text-white font-semibold">LogOut</button>

                            :

                            <Link to='/login'><button className="btn btn-warning toboto hover:bg-red-900 hover:text-white hover text-black font-semibold">Sign In</button></Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default NavBar;