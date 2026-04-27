const contactAPI = {} // WHY?
const url = 'https://playground.4geeks.com/contact'

const createAgenda = async () => {
    try {
        const resp = await fetch(url + '/agendas/lisandro', {
            method: "POST"
        })
        if (!resp.ok) throw new Error ("Error while creating agenda")
    } catch (error) {
        return console.log(error);
    }
}

contactAPI.getContacts = async (dispatch) => {
    try {
        const resp = await fetch(url + '/agendas/lisandro')
        if (!resp.ok) {
            createAgenda()
            dispatch({type:"loadContacts", payload:[]})
        }
        const data = await resp.json()
            dispatch({type:"loadContacts", payload:data.contacts})
        
    } catch (error) {
        return error
    }
}

contactAPI.createContact = async (dispatch, contact) => {
    try {
        const resp = await fetch(url + "/agendas/lisandro/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        });

        if (!resp.ok) throw new Error("Error creating contact");

        contactAPI.getContacts(dispatch);

    } catch (error) {
        console.log(error);
    }
};

contactAPI.editContact = async (dispatch, contact) => {
    try {
        const resp = await fetch(url + "/agendas/lisandro/contacts/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contact)
        });

        if (!resp.ok) throw new Error("Error editing contact");

        contactAPI.getContacts(dispatch);

    } catch (error) {
        console.log(error);
    }
};


export default contactAPI