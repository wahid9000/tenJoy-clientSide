import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

const MyToysRows = ({toy, handleDelete}) => {
    const { _id, seller, name, subCategory, price, quantity } = toy;
    return (
        <tr>
            <td>{seller}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td className="flex items-center gap-2">
                <Link to={`/allToys/${_id}`}><button className="btn btn-circle btn-md bg-slate-900"><FaEye className="text-white text-lg"></FaEye></button></Link>
                <Link to={`/allToys/${_id}`}><button className="btn btn-circle btn-md bg-green-600"><FaEdit className="text-white text-lg"></FaEdit></button></Link>
                <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-md bg-red-700"><FaTrash className="text-white text-lg"></FaTrash></button>
                
            </td>
        </tr>

    );
};

export default MyToysRows;