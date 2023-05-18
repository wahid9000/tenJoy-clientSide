import { Link } from "react-router-dom";

const AllToysRows = ({toy}) => {
    const {_id, seller,name, subCategory, price, quantity} = toy;
    return (
            <tr>
                <td>{seller}</td>
                <td>{name}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>
                    <Link to={`/allToys/${_id}`}><button className="btn btn-outline  btn-sm">View Details</button></Link>
                </td>
            </tr>
      
    );
};

export default AllToysRows;