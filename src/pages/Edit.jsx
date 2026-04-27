import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import contactAPI from "../services/contactAPI";
import { useNavigate } from "react-router-dom";

export const Edit = () => {

    const { dispatch } = useGlobalReducer();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await contactAPI.editContact(dispatch, form);

        navigate("/");
    };

    return (
        <div>
            <h2>Edit contact</h2>

            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <input name="phone" placeholder="Phone" onChange={handleChange} />
                <input name="email" placeholder="Email" onChange={handleChange} />
                <input name="address" placeholder="Address" onChange={handleChange} />

                <button type="submit">Create</button>
            </form>
        </div>
    );
};