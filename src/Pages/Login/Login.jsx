import { FaArrowRight, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 mb-20">
            <div className="rounded-lg w-full py-12">
                <h2 className="text-4xl text-center font-bold mb-8">Sign In</h2>
                <form onSubmit={handleSignIn}>
                    <div className="mx-auto w-1/2">
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full rounded-2xl block mb-4" />
                    </div>
                    <div className="mx-auto w-1/2">
                        <label>
                            Password:
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered w-full rounded-2xl block mb-4" />
                    </div>
                    <div className="mx-auto w-1/2">
                        <button className="btn btn-primary btn-block rounded-2xl">Sign In</button>
                    </div>
                    <div className="text-center mt-4 flex justify-center gap-2">
                        <p>Dont have an account?</p>
                        <Link to="/register" className="font-bold text-green-700 hover:text-orange-500 flex items-center gap-1">SignUp Now <FaArrowRight></FaArrowRight></Link>
                    </div>
                    <div className="mx-auto w-1/2 mt-4 text-center">
                        <button className="btn btn-outline rounded-2xl"><FaGoogle className="mr-2"></FaGoogle>Sign In With Google</button>
                    </div>

                </form>
            </div>
            <div>
                <img src="https://i.ibb.co/XC9WKh4/Untitled-design-11.png" className="h-[600px] w-full mx-auto rounded-xl" alt="" />
            </div>

        </div>
    );
};

export default Login;