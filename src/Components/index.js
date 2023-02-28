import {useState, useEffect} from 'react'

import "./styles.css"

import List from './Contacts/List'
import Form from './Contacts/Form'

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Yavuz",
      phoneNumber: "434"
    },
    {
      fullname: "Sinan",
      phoneNumber: "533"
    },
    {
      fullname: "Kadir",
      phoneNumber: "612"
    }
  ]);

  useEffect( () => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts