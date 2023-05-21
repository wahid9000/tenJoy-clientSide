import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
    useTitle(' Update Toy Details')
    const toyInfo = useLoaderData();
    console.log(toyInfo);
    const {_id, price, quantity, descriptions } = toyInfo;
    const navigate = useNavigate();


    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const descriptions = form.descriptions.value;
        const updatedToy = {price, quantity, descriptions};
        
        fetch(`https://tenjoy-server-wahid9000.vercel.app/myToys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Toy Information Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
                navigate('/myToys');
            }
        })
    }


    return (
        <div className="mb-20">
            <div className="border text-center p-5 bg-amber-100 rounded-2xl text-4xl font-bold">
                <h2>Update Your Toy Information</h2>
            </div>
            <div className="mt-12">
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 w-10/12 md:w-7/12 mx-auto md:grid-cols-2 mb-8 gap-5">
                        <div>
                            <label className="block mb-2">Price of Toy:</label>
                            <input type="text" name="price" defaultValue={price} className="input input-bordered w-full max-w-md" />
                        </div>
                        <div>
                            <label className="block mb-2">Available Quantity:</label>
                            <input type="text" name="quantity" defaultValue={quantity} className="input input-bordered w-full max-w-md" />
                        </div>
                    </div>
                    <div className="w-10/12 md:w-7/12 mx-auto">
                        <label className="block mb-2">Details About Toy:</label>
                        <textarea name="descriptions" defaultValue={descriptions} className="textarea textarea-bordered w-full"></textarea>
                    </div>
                    <div className="w-10/12 md:w-7/12 mx-auto mt-5">
                        <button className="btn btn-block bg-[#c58b1f]">Update Your Toy</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateToy;