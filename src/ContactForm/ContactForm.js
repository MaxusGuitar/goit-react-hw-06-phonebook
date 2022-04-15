import style from "./form.module.css";
import PropTypes from "prop-types";
import { addTodo } from "../redux/redux-things/action";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";

const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const dispatch = useDispatch();
  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");

  // const onInputChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onInputChangeNumber = (e) => {
  //   setNumber(e.target.value);
  // };

  // const resetForm = () => {
  //   name: '',
  //   number:''
  // };

  const onSubmitForm = ({ name, number }, { resetForm }) => {
    const nameInContacts = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (nameInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }
    const c = {
      id: shortid.generate(),
      name,
      number,
    };
    dispatch(addTodo(c));
    resetForm();
  };

  return (
    <form className={style.form} onSubmit={onSubmitForm}>
      <label htmlFor="name">
        Name:{" "}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        Number:{" "}
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

export default ContactForm;
