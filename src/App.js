import { useState, useEffect } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import FindContact from "./FindContact";
//import onDeleteContact from "./ContactList";
//import { deleteTodo, changeFilter, addTodo } from "./redux/redux-things/action";
import { useDispatch } from "react-redux";
import { useLocaleStorage } from "./hocks/useLocaleStorage";

import style from "./App.css";

export default function App() {
  const [contacts, setContacts] = useLocaleStorage("contacts", []);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();

  //const deleteContact = (id) => dispatch(deleteTodo(id));

  const contactFind = (e) => {
    setFilter(e.currentTarget.value);
  };

  // const getVisibleContacts = () => {
  //   return contacts.filter((c) =>
  //     c.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FindContact filter={filter} change={contactFind} />
      <ContactList />
    </div>
  );
}
