import { useLoaderData } from "react-router-dom";
import AllToysRows from "./AllToysRows";
import useTitle from "../../hooks/useTitle";
import { useState } from "react";

const AllToys = () => {
    const allToysInfo = useLoaderData()
    const [allToys, setAllToys] = useState(allToysInfo)
    useTitle(' All Toys')
    const [searchText, setSearchText] = useState("");


    const handleSearch = () => {
        fetch(`https://tenjoy-server-wahid9000.vercel.app/allToySearchByName/${searchText}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }


    return (
        <div className="mb-48">
            <div className="border text-center p-5 bg-amber-100 rounded-2xl">
                <h2 className="text-4xl font-bold roboto">All Available Toys</h2>
            </div>
            <div className="p-2 text-center">
                <input onChange={event => setSearchText(event.target.value)} type="text" placeholder="Search By Toy Name..." className="input roboto input-bordered w-full max-w-xs block mx-auto" />
                <button onClick={handleSearch} className="btn roboto btn-warning mt-2">Search</button>
            </div>
            <div className="mt-8">
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
                                allToys.map(toy => <AllToysRows
                                    key={toy._id}
                                    toy={toy}
                                ></AllToysRows>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;