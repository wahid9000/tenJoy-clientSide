import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        console.log(email, password, name, photoURL);
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 mb-20">
            <div className="rounded-lg w-full py-8">
                <h2 className="text-4xl text-center font-bold mb-8">Sign Up</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mx-auto w-1/2">
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="*Email" className="input input-bordered w-full rounded-2xl block mb-4" />
                    </div>
                    <div className="mx-auto w-1/2">
                        <label>
                            Password:
                        </label>
                        <input type="password" name="password" placeholder="*Password" className="input input-bordered w-full rounded-2xl block mb-4" />
                    </div>
                    <div className="mx-auto w-1/2">
                        <label>Name:</label>
                        <input type="text" name="name" placeholder="*Name" className="input input-bordered w-full rounded-2xl block mb-4" />
                    </div>
                    <div className="mx-auto w-1/2">
                        <label>PhotoURL:</label>
                        <input type="text" name="photoURL" placeholder="*PhotoURL" className="input input-bordered w-full rounded-2xl block mb-4" />
                    </div>
                    <div className="mx-auto w-1/2">
                        <button className="btn bg-[#136513] btn-block rounded-2xl">Sign Up</button>
                    </div>
                    <div className="text-center mt-4 flex justify-center gap-2">
                        <p>Already have an account?</p>
                        <Link to="/login" className="font-bold text-blue-700 hover:text-orange-500 flex items-center gap-1">SignIn Now <FaArrowRight></FaArrowRight></Link>
                    </div>
                </form>
            </div>
            <div>
                <img src="https://i.ibb.co/XC9WKh4/Untitled-design-11.png" className="h-[600px] w-full mx-auto rounded-xl" alt="" />
            </div>

        </div>
    );
};

export default Register;