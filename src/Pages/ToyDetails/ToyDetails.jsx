import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toyDetails = useLoaderData();
    const { name, picture, price, ratings, quantity } = toyDetails;

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Toy Name: {name}</h1>
                        <p className="py-6">Price: {price}</p>
                        <p className="py-6">Available Quantity: {quantity}</p>
                        <p className="py-6">
                            <Rating
                                className="text-xl text-yellow-500"
                                placeholderRating={ratings}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                                readonly
                            />
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;