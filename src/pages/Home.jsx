import contactAPI from "../services/contactAPI"; // No me lo importaba directamente
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom";
import Contact from "../components/Contact";

// const navigate = useNavigate()

// const [contacts, setContacts] = useState ([])

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const navigate = useNavigate()
	const handleNavigate = () => {
		navigate('/creation')
	}
	console.log(store.contacts);


	return (
		<div className="text-center mt-5">
			<h1>Contact list</h1>

			<Link to='/creation'>Create a new Contact</Link>
			<button onClick={handleNavigate}>Create contact</button>
			{
				store.contacts.map((contact) => (
					<Contact key={contact.id} contact={contact} />
				))

				}
		</div>
	);
}; 