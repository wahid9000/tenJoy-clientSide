import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <ClipLoader
                    color="red"
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        )
    }
    if (user) {
        return children;
    }
    else {
        return (
            Swal.fire({
                title: 'Something Error!',
                text: 'You must Login First to Visit this Page',
                icon: 'error',
                confirmButtonText: 'Continue'
            }),
            <div>
                <Navigate to="/login" state={{from: location}}></Navigate>
            </div>





        )
    }

};

export default PrivateRoute;