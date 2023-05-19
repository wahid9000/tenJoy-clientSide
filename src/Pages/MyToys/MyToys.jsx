import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysRows from "./MyToysRows";
import Swal from "sweetalert2";

const MyToys = () => {

    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/myToys?email=${user.email}`

    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])

    const [remainingToys, setRemainingToys] = useState(myToys);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myToys/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remaining = remainingToys.filter(toy => toy._id !== id);
                        setRemainingToys(remaining)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'The Toy Information has been deleted successfully.',
                                'success'
                            )
                        }

                    })
            }
        })
    }



    return (
        <div className="mb-48">
            <div className="border text-center p-5 bg-amber-100 rounded-2xl">
                <h2 className="text-4xl font-bold">My Toys</h2>
            </div>
            <div>
            </div>
            <div className="mt-8">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th className="bg-[#c58b1f] text-white">Seller Name</th>
                                <th className="bg-[#c58b1f] text-white">Toy Name</th>
                                <th className="bg-[#c58b1f] text-white">Sub-Category</th>
                                <th className="bg-[#c58b1f] text-white">Price of Toy</th>
                                <th className="bg-[#c58b1f] text-white">Available Quantity</th>
                                <th className="bg-[#c58b1f] text-white">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myToys.map(toy => <MyToysRows
                                    key={toy._id}
                                    toy={toy}
                                    handleDelete={handleDelete}
                                ></MyToysRows>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;