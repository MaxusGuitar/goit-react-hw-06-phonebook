import React from "react";
import ContactItem from "../ContactItem";
import { decrement } from "../redux/redux-things/action";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

function ContactList({ contacts }) {
  const dispatch = useDispatch();
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li>
          <ContactItem contactItem={{ name, number, id }} />
          <button type="button" onClick={() => dispatch(decrement())}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
