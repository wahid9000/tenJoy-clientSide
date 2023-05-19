import { useLoaderData } from "react-router-dom";
import AllToysRows from "./AllToysRows";

const AllToys = () => {
    const allToys = useLoaderData()
    return (
        <div className="mb-48">
            <div className="border text-center p-5 bg-amber-100 rounded-2xl">
                <h2 className="text-4xl font-bold">All Available Toys</h2>
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