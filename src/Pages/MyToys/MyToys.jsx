import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysRows from "./MyToysRows";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
    useTitle(' My Toys')
    const { user } = useContext(AuthContext)
    const [searchText, setSearchText] = useState("");
    const [sort, setSort] = useState(true);

    const url = `http://localhost:5000/myToys?email=${user.email}&sort=${sort}`;

    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url])


    const toggleSortOrder = () => {
        setSort(!sort);
    };



    const handleSearch = () => {
        fetch(`http://localhost:5000/allToySearchByName/${searchText}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }


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
                <h2 className="text-4xl font-bold roboto">My Toys</h2>
            </div>

            <div className="p-2 text-center">
                <input onChange={event => setSearchText(event.target.value)} type="text" placeholder="Search By Toy Name..." className="input roboto input-bordered w-full max-w-xs block mx-auto" />
                <button onClick={handleSearch} className="btn roboto btn-warning mt-2">Search</button>
            </div>
            <div className="text-center md:text-right">
                <button className={sort ? "btn bg-red-700 hover:bg-red-900 text-white roboto" : "btn btn-success text-black roboto"} onClick={toggleSortOrder}>
                {sort ? 'Sort By Descending Order' : 'Sort By Ascending Order'}
            </button>
            </div>
            
            <div className="mt-2">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr className="roboto">
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