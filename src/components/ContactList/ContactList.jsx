import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  let contactlist = filteredContacts.map((contact) => (
    <li key={contact.id} className={css.listItem}>
      <Contact contact={contact} />
    </li>
  ));
  return (
    <div className={css.container}>
      <ul className={css.list}>{contactlist}</ul>
    </div>
  );
};
