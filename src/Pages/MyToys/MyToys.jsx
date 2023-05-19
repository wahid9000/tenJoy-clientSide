import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysRows from "./MyToysRows";

const MyToys = () => {

    const {user} = useContext(AuthContext)
    console.log(user);

    const url = `http://localhost:5000/myToys?email=${user.email}`

    const [myToys, setMyToys] = useState([])
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setMyToys(data))
    } ,[url])



    return (
        <div className="mb-48">
            <div className="border text-center p-5 bg-slate-100 rounded-2xl">
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