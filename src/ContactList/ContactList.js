import React from "react";
import ContactItem from "../ContactItem";
//import { decrement } from "../redux/redux-things/action";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function ContactList() {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem key={id} name={name} id={id} number={number} />
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
