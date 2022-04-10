import { useState } from "react";
import style from "./form.module.css";
import PropTypes from "prop-types";
import actions from "../redux/redux-things/action";
import { useDispatch, useSelector } from "react-redux";

const ContactForm = ({ onSubmit }) => {
  const count = useSelector((state) => state.contacts.value);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onInputChangeName = (e) => {
    setName(e.target.value);
  };
  const onInputChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const ctg = e.currentTarget.name;

    if (ctg === "name") {
      dispatch(actions.addTodo(name));
    }
    if (ctg === "number") {
      dispatch(actions.addTodo(number));
    }
    onSubmit({ name, number });
    resetForm();
  };

  return (
    <form className={style.form} onSubmit={onSubmitForm}>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={onInputChangeName}
          required
        />
      </label>
      <label>
        Number:{" "}
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={onInputChangeNumber}
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
