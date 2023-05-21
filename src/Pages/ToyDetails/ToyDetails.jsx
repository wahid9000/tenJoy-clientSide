import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData, useLocation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import useScrollTop from "../../hooks/useScrollTop";

const ToyDetails = () => {

    const { pathName } = useLocation();
    useScrollTop(pathName);
    useTitle(' Details')
    const toyDetails = useLoaderData();
    const { seller, sellerEmail, name, picture, price, ratings, quantity, descriptions } = toyDetails;

    return (
        <div>
            <div className="hero w-full md:w-11/12 mx-auto bg-base-200 rounded-xl mb-20">
                <div className="hero-content gap-16 flex-col lg:flex-row">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl w-full" />
                    <div>
                        <p className="py-6 flex items-center gap-2 text-xl font-semibold ">
                            <Rating
                                className="text-yellow-500"
                                placeholderRating={ratings}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                                readonly
                            /> ({ratings} ratings)
                        </p>
                        <h1 className="text-4xl font-bold">{name}</h1>
                        <p className="py-5 font-semibold text-xl">Price: ${price}</p>
                        <p className="w-full text-justify">{descriptions}</p>
                        <p className="pt-5 text-xl">Only {quantity} item(s) left in stock!</p>
                        <div className="divider"></div>
                        <div className="text-xl font-semibold">
                            <h2>Seller Name: {seller}</h2>
                            <h2>Seller Email: {sellerEmail}</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;