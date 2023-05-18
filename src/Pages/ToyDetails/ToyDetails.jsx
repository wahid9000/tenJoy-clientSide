import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const toyDetails = useLoaderData();
    const { seller, name, picture, price, ratings, quantity, descriptions } = toyDetails;

    return (
        <div>
            <div className="hero w-11/12  mx-auto bg-base-200 rounded-xl mb-20">
                <div className="hero-content gap-16 flex-col lg:flex-row">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-6 flex items-center gap-2 text-xl font-semibold">
                            <Rating
                                className="text-yellow-500"
                                placeholderRating={ratings}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                                readonly
                            /> ({ratings} ratings)
                        </p>
                        <h1 className="text-4xl font-bold">Toy Name: {name}</h1>
                        <p className="py-5 font-semibold text-xl">Price: ${price}</p>
                        <p>{descriptions}</p>
                        <p className="pt-5 text-xl">Only {quantity} item(s) left in stock!</p>
                        <div className="divider"></div>
                        <div className="text-xl font-semibold">
                            <h2>Seller Name: {seller}</h2>
                            <h2>Seller Email:</h2>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;