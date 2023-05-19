import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const GiraffeToys = ({giraffe}) => {

    const {_id, picture, name, price, ratings } = giraffe;
    return (
        <div className="card w-full mx-auto md:w-96 bg-base-100 border">
            <figure className="px-10 pt-10">
                <img src={picture} alt="TeddyBear" className="rounded-xl h-80" />
            </figure>
            <div className="divider"></div>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <p className="text-xl">${price}</p>
                <p>
                    <Rating
                        className="text-xl text-yellow-500"
                        placeholderRating={ratings}
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                        readonly
                    />
                </p>
                <div className="card-actions">
                  <Link to={`allToys/${_id}`}>  <button className="btn btn-warning hover:bg-red-900 hover:text-white hover text-black font-semibold">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default GiraffeToys;