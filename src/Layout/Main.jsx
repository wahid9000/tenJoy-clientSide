import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>


            <Toaster></Toaster>
        </div>
    );
};

export default Main;