import contactAPI from "../services/contactAPI"
import { Link, useNavigate } from "react-router-dom";

const Contact = ({ contact }) => {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/edit')
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://www.zonammorpg.com/wp-content/uploads/2009/07/Armus.jpg" />
            <div className="card-body">
                <h5>{contact.name}</h5>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
                <p>{contact.address}</p>
                <button onClick={handleNavigate}>Edit</button>
            </div>
        </div>
    );
};

export default Contact;