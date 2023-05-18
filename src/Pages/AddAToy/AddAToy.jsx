
const AddAToy = () => {

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const ratings = form.rating.value;
        const quantity = form.quantity.value;
        const subCategory = form.selectedOption.value;
        const picture = form.photoURL.value;
        const descriptions = form.descriptions.value;
        const toyInfo = {name, price, ratings, quantity, subCategory, picture, descriptions};
        console.log(toyInfo);
    }



    return (
        <div className="mb-48">
            <div className="border text-center p-5 bg-slate-100 rounded-2xl text-4xl font-bold">
                <h2>List Your Toy For Sell</h2>
            </div>
            <div className="mt-8">
                <form onSubmit={handleAddToy}>
                    <div className="grid w-9/12 mx-auto grid-cols-2 gap-5">
                        <div>
                            <input type="text" name="sellerName" placeholder="*Seller Name" className="input input-bordered w-full max-w-md" />
                        </div>
                        <div>
                            <input type="text" name="email" placeholder="*Seller Email" className="input input-bordered w-full max-w-md" />
                        </div>
                        <div>
                            <input type="text" name="name" placeholder="*Toy Name" className="input input-bordered w-full max-w-md" />
                        </div>
                        <div>
                            <input type="text" name="photoURL" placeholder="*Toy Photo URL" className="input input-bordered w-full max-w-md" />
                        </div>
                    </div>
                    <div className="grid w-9/12 mx-auto grid-cols-4 gap-5 my-5">
                        <div>
                            <select className="block border w-full py-3 rounded-lg px-3 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="selectedOption">
                                <option disabled selected>Sub-Category</option>
                                <option value="Teddy Bear Toys">Teddy Bear Toys</option>
                                <option value="Horse Toys">Horse Toys</option>
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
                        <button className="btn btn-block bg-[#c58b1f]">Add Your Toy</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default AddAToy;