import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import useScrollTop from "../../hooks/useScrollTop";

const AddAToy = () => {
    useTitle(' Add A Toy')
    const { pathName } = useLocation();
    useScrollTop(pathName);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.toyName.value;
        const price = form.price.value;
        const ratings = form.rating.value;
        const quantity = form.quantity.value;
        const subCategory = form.selectedOption.value;
        const picture = form.photoURL.value;
        const descriptions = form.descriptions.value;
        const seller = form.sellerName.value;
        const sellerEmail = form.email.value;
        const toyInfo = { name, price, ratings, quantity, subCategory, picture, descriptions, seller, sellerEmail };

        fetch('https://tenjoy-server-wahid9000.vercel.app/allToys', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toyInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Toy Has Been Listed Successfully',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                    })
                    navigate('/myToys')
                }
            })
    }



    return (
        <div className="mb-48">
            <div className="border text-center p-5 bg-amber-100 rounded-2xl text-4xl font-bold roboto">
                <h2>List Your Toy For Sell</h2>
            </div>
            <div className="mt-8">
                <form onSubmit={handleAddToy}>
                    <div className="grid w-9/12 mx-auto grid-cols-2 gap-5">
                        <div>
                            <input type="text" name="sellerName" placeholder="*Seller Name" defaultValue={user && user.displayName} className="input input-bordered w-full max-w-md" />
                        </div>
                        <div>
                            <input type="text" name="email" defaultValue={user && user.email} placeholder="*Seller Email" className="input input-bordered w-full max-w-md" />
                        </div>
                        <div>
                            <input type="text" name="toyName" placeholder="*Toy Name" className="input input-bordered w-full max-w-md" />
                        </div>
                        <div>
                            <input type="text" name="photoURL" placeholder="*Toy Photo URL" className="input input-bordered w-full max-w-md" />
                        </div>
                    </div>
                    <div className="grid w-9/12 mx-auto grid-cols-4 gap-5 my-5">
                        <div>
                            <select className="block border w-full py-3 rounded-lg px-3 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="selectedOption">
                                <option>Sub-Category</option>
                                <option value="Teddy Bear Toys">Teddy Bear Toys</option>
                                <option value="Horse Toys">Horse Toys</option>
                                <option value="Dogs Toys">Dogs Toys</option>
                                <option value="Tiger Toys">Tiger Toys</option>
                                <option value="Dinosaur Toys">Dinosaur Toys</option>
                                <option value="Giraffe Toys">Giraffe Toys</option>
                            </select>
                        </div>
                        <div>
                            <input type="text" name="price" placeholder="*Toy Price" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" name="rating" placeholder="*Toy Ratings" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <input type="text" name="quantity" placeholder="*Available Quantity" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="w-9/12 mx-auto">
                        <textarea name="descriptions" className="textarea textarea-bordered w-full" placeholder="*Write details about toy..."></textarea>
                    </div>
                    <div className="w-9/12 mx-auto mt-5">
                        <button className="btn btn-block roboto bg-[#c58b1f]">Add Your Toy</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddAToy;